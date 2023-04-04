const { Requester, Validator } = require('@chainlink/external-adapter')
require('dotenv').config()
const moment = require('moment')
const apiKey = process.env.API_KEY

// Define custom error scenarios for the API.
// Return true for the adapter to retry.
const customError = (data) => {
  if (data.Response === 'Error') return true
  return false
}

// Define custom parameters to be used by the adapter.
// Extra parameters can be stated in the extra object,
// with a Boolean value indicating whether or not they
// should be required.
const customParams = {
  id: ['id'],
  endpoint: false
}

const createRequest = (input, callback) => {
  // The Validator helps you validate the Chainlink request data
  const validator = new Validator(callback, input, customParams)
  const jobRunID = validator.validated.id
  const id = validator.validated.data.id

  const url = `https://therundown-therundown-v1.p.rapidapi.com/events/${id}?include=scores`

  const params = {
  }

  const headerObj = {
    'x-rapidapi-host': 'therundown-therundown-v1.p.rapidapi.com',
    'x-rapidapi-key': apiKey
  }
  // This is where you would add method and headers
  // you can add method like GET or POST and add it to the config
  // The default is GET requests
  // const method = 'get'
  const config = {
    url,
    params,
    headers: headerObj
  }

  // The Requester allows API calls be retry in case of timeout
  // or connection failure
  Requester.request(config, customError)
    .then(response => {
      // It's common practice to store the desired value at the top-level
      // result key. This allows different adapters to be compatible with
      // one another.
      // if the contest is scheduled, return a result, otherwise do not
      if (Requester.getResult(response.data, ['score', 'event_status']) === 'STATUS_SCHEDULED') {

        const league = +Requester.getResult(response.data, ['sport_id'])

        const eventTime = moment(Requester.getResult(response.data, ['event_date']).trim()).unix()

        const awayTeam = +Requester.getResult(response.data, ['teams_normalized', '0', 'team_id'])

        const homeTeam = +Requester.getResult(response.data, ['teams_normalized', '1', 'team_id'])

        // order: league (first 2 chars), away team id (next 4 chars), home team id (next 4 chars), event time (final 10 chars)
        // largest number allowed in js would be:        9 2233 7203 6854775807
        // largest number allowed in solidity would be: 18 4467 4407 3709551615
        const leagueNumeric = league * 1e18
        const awayTeamNumeric = awayTeam * 1e14
        const homeTeamNumeric = homeTeam * 1e10

        response.data.result = (BigInt(leagueNumeric) + BigInt(awayTeamNumeric) + BigInt(homeTeamNumeric) + BigInt(eventTime)).toString()
        callback(response.status, Requester.success(jobRunID, response))
      }
    })
    .catch(error => {
      callback(500, Requester.errored(jobRunID, error))
    })
}

// This is a wrapper to allow the function to work with
// GCP Functions
exports.gcpservice = (req, res) => {
  createRequest(req.body, (statusCode, data) => {
    res.status(statusCode).send(data)
  })
}

// This is a wrapper to allow the function to work with
// AWS Lambda
exports.handler = (event, context, callback) => {
  createRequest(event, (statusCode, data) => {
    callback(null, data)
  })
}

// This is a wrapper to allow the function to work with
// newer AWS Lambda implementations
exports.handlerv2 = (event, context, callback) => {
  createRequest(JSON.parse(event.body), (statusCode, data) => {
    callback(null, {
      statusCode: statusCode,
      body: JSON.stringify(data),
      isBase64Encoded: false
    })
  })
}

// This allows the function to be exported for testing
// or for running in express
module.exports.createRequest = createRequest
