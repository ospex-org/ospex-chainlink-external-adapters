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
  const url = `https://sportspage-feeds.p.rapidapi.com/gameById?gameId=${id}`

  const params = {
  }

  const headerObj = {
    'x-rapidapi-host': 'sportspage-feeds.p.rapidapi.com',
    'x-rapidapi-key': apiKey
  }

  // This is where you would add method and headers
  // you can add method like GET or POST and add it to the config
  // The default is GET requests
  // method = 'get'
  // headers = 'headers.....'
  const config = {
    url,
    params,
    headers: headerObj
  }

  const leagueLegend = [
    {
      league: 'NCAAF',
      id: 1
    },
    {
      league: 'NFL',
      id: 2
    },
    {
      league: 'MLB',
      id: 3
    },
    {
      league: 'NBA',
      id: 4
    },
    {
      league: 'NCAAB',
      id: 5
    },
    {
      league: 'NHL',
      id: 6
    },
    {
      league: 'MMA',
      id: 7
    },
    {
      league: 'WNBA',
      id: 8
    },
    {
      league: 'CFL',
      id: 9
    }
  ]
  const teamLegend = [
    {
      leagueId: 3,
      team: 'Chicago White Sox',
      id: 51
    },
    {
      leagueId: 3,
      team: 'Cleveland Guardians',
      id: 52
    },
    {
      leagueId: 3,
      team: 'Detroit Tigers',
      id: 53
    },
    {
      leagueId: 3,
      team: 'Kansas City Royals',
      id: 54
    },
    {
      leagueId: 3,
      team: 'Minnesota Twins',
      id: 55
    },
    {
      leagueId: 3,
      team: 'Baltimore Orioles',
      id: 46
    },
    {
      leagueId: 3,
      team: 'Boston Red Sox',
      id: 47
    },
    {
      leagueId: 3,
      team: 'New York Yankees',
      id: 48
    },
    {
      leagueId: 3,
      team: 'Tampa Bay Rays',
      id: 49
    },
    {
      leagueId: 3,
      team: 'Toronto Blue Jays',
      id: 50
    },
    {
      leagueId: 3,
      team: 'Houston Astros',
      id: 56
    },
    {
      leagueId: 3,
      team: 'Los Angeles Angels',
      id: 57
    },
    {
      leagueId: 3,
      team: 'Oakland Athletics',
      id: 58
    },
    {
      leagueId: 3,
      team: 'Seattle Mariners',
      id: 59
    },
    {
      leagueId: 3,
      team: 'Texas Rangers',
      id: 60
    },
    {
      leagueId: 3,
      team: 'Chicago Cubs',
      id: 36
    },
    {
      leagueId: 3,
      team: 'Cincinnati Reds',
      id: 37
    },
    {
      leagueId: 3,
      team: 'Milwaukee Brewers',
      id: 38
    },
    {
      leagueId: 3,
      team: 'Pittsburgh Pirates',
      id: 39
    },
    {
      leagueId: 3,
      team: 'St. Louis Cardinals',
      id: 40
    },
    {
      leagueId: 3,
      team: 'Atlanta Braves',
      id: 31
    },
    {
      leagueId: 3,
      team: 'Miami Marlins',
      id: 32
    },
    {
      leagueId: 3,
      team: 'New York Mets',
      id: 33
    },
    {
      leagueId: 3,
      team: 'Philadelphia Phillies',
      id: 34
    },
    {
      leagueId: 3,
      team: 'Washington Nationals',
      id: 35
    },
    {
      leagueId: 3,
      team: 'Arizona Diamondbacks',
      id: 41
    },
    {
      leagueId: 3,
      team: 'Colorado Rockies',
      id: 42
    },
    {
      leagueId: 3,
      team: 'Los Angeles Dodgers',
      id: 43
    },
    {
      leagueId: 3,
      team: 'San Diego Padres',
      id: 44
    },
    {
      leagueId: 3,
      team: 'San Francisco Giants',
      id: 45
    },
    {
      leagueId: 4,
      team: 'Boston Celtics',
      id: 1
    },
    {
      leagueId: 4,
      team: 'Brooklyn Nets',
      id: 2
    },
    {
      leagueId: 4,
      team: 'New York Knicks',
      id: 3
    },
    {
      leagueId: 4,
      team: 'Philadelphia 76ers',
      id: 4
    },
    {
      leagueId: 4,
      team: 'Toronto Raptors',
      id: 5
    },
    {
      leagueId: 4,
      team: 'Chicago Bulls',
      id: 6
    },
    {
      leagueId: 4,
      team: 'Cleveland Cavaliers',
      id: 7
    },
    {
      leagueId: 4,
      team: 'Detroit Pistons',
      id: 8
    },
    {
      leagueId: 4,
      team: 'Indiana Pacers',
      id: 9
    },
    {
      leagueId: 4,
      team: 'Milwaukee Bucks',
      id: 10
    },
    {
      leagueId: 4,
      team: 'Atlanta Hawks',
      id: 11
    },
    {
      leagueId: 4,
      team: 'Charlotte Hornets',
      id: 12
    },
    {
      leagueId: 4,
      team: 'Miami Heat',
      id: 13
    },
    {
      leagueId: 4,
      team: 'Orlando Magic',
      id: 14
    },
    {
      leagueId: 4,
      team: 'Washington Wizards',
      id: 15
    },
    {
      leagueId: 4,
      team: 'Denver Nuggets',
      id: 16
    },
    {
      leagueId: 4,
      team: 'Minnesota Timberwolves',
      id: 17
    },
    {
      leagueId: 4,
      team: 'Oklahoma City Thunder',
      id: 18
    },
    {
      leagueId: 4,
      team: 'Portland Trail Blazers',
      id: 19
    },
    {
      leagueId: 4,
      team: 'Utah Jazz',
      id: 20
    },
    {
      leagueId: 4,
      team: 'Golden State Warriors',
      id: 21
    },
    {
      leagueId: 4,
      team: 'Los Angeles Clippers',
      id: 22
    },
    {
      leagueId: 4,
      team: 'Los Angeles Lakers',
      id: 23
    },
    {
      leagueId: 4,
      team: 'Phoenix Suns',
      id: 24
    },
    {
      leagueId: 4,
      team: 'Sacramento Kings',
      id: 25
    },
    {
      leagueId: 4,
      team: 'Dallas Mavericks',
      id: 26
    },
    {
      leagueId: 4,
      team: 'Houston Rockets',
      id: 27
    },
    {
      leagueId: 4,
      team: 'Memphis Grizzlies',
      id: 28
    },
    {
      leagueId: 4,
      team: 'New Orleans Pelicans',
      id: 29
    },
    {
      leagueId: 4,
      team: 'San Antonio Spurs',
      id: 30
    },
    {
      leagueId: 5,
      team: 'Albany',
      id: 1382
    },
    {
      leagueId: 5,
      team: 'Binghamton',
      id: 1754
    },
    {
      leagueId: 5,
      team: 'Bryant',
      id: 1401
    },
    {
      leagueId: 5,
      team: 'Maine',
      id: 1486
    },
    {
      leagueId: 5,
      team: 'NJIT',
      id: 1747
    },
    {
      leagueId: 5,
      team: 'New Hampshire',
      id: 1517
    },
    {
      leagueId: 5,
      team: 'UMBC',
      id: 1718
    },
    {
      leagueId: 5,
      team: 'UMass Lowell',
      id: 1746
    },
    {
      leagueId: 5,
      team: 'Vermont',
      id: 1636
    },
    {
      leagueId: 5,
      team: 'Cincinnati',
      id: 259
    },
    {
      leagueId: 5,
      team: 'East Carolina',
      id: 265
    },
    {
      leagueId: 5,
      team: 'Houston',
      id: 275
    },
    {
      leagueId: 5,
      team: 'Memphis',
      id: 292
    },
    {
      leagueId: 5,
      team: 'SMU',
      id: 329
    },
    {
      leagueId: 5,
      team: 'South Florida',
      id: 327
    },
    {
      leagueId: 5,
      team: 'Temple',
      id: 334
    },
    {
      leagueId: 5,
      team: 'Tulane',
      id: 341
    },
    {
      leagueId: 5,
      team: 'Tulsa',
      id: 342
    },
    {
      leagueId: 5,
      team: 'UCF',
      id: 1411
    },
    {
      leagueId: 5,
      team: 'Wichita State',
      id: 1663
    },
    {
      leagueId: 5,
      team: 'Boston College',
      id: 253
    },
    {
      leagueId: 5,
      team: 'Clemson',
      id: 260
    },
    {
      leagueId: 5,
      team: 'Duke',
      id: 264
    },
    {
      leagueId: 5,
      team: 'Florida State',
      id: 270
    },
    {
      leagueId: 5,
      team: 'Georgia Tech',
      id: 273
    },
    {
      leagueId: 5,
      team: 'Louisville',
      id: 288
    },
    {
      leagueId: 5,
      team: 'Miami (FL)',
      id: 293
    },
    {
      leagueId: 5,
      team: 'NC State',
      id: 307
    },
    {
      leagueId: 5,
      team: 'North Carolina',
      id: 306
    },
    {
      leagueId: 5,
      team: 'Notre Dame',
      id: 311
    },
    {
      leagueId: 5,
      team: 'Pittsburgh',
      id: 320
    },
    {
      leagueId: 5,
      team: 'Syracuse',
      id: 332
    },
    {
      leagueId: 5,
      team: 'Virginia',
      id: 351
    },
    {
      leagueId: 5,
      team: 'Virginia Tech',
      id: 352
    },
    {
      leagueId: 5,
      team: 'Wake Forest',
      id: 353
    },
    {
      leagueId: 5,
      team: 'Austin Peay',
      id: 1392
    },
    {
      leagueId: 5,
      team: 'Bellarmine',
      id: 3121
    },
    {
      leagueId: 5,
      team: 'Central Arkansas',
      id: 1409
    },
    {
      leagueId: 5,
      team: 'Eastern Kentucky',
      id: 1435
    },
    {
      leagueId: 5,
      team: 'Florida Gulf Coast',
      id: 1683
    },
    {
      leagueId: 5,
      team: 'Jacksonville',
      id: 1471
    },
    {
      leagueId: 5,
      team: 'Jacksonville State',
      id: 1472
    },
    {
      leagueId: 5,
      team: 'Kennesaw State',
      id: 1476
    },
    {
      leagueId: 5,
      team: 'Liberty',
      id: 1482
    },
    {
      leagueId: 5,
      team: 'Lipscomb',
      id: 1748
    },
    {
      leagueId: 5,
      team: 'North Alabama',
      id: 1642
    },
    {
      leagueId: 5,
      team: 'North Florida',
      id: 1686
    },
    {
      leagueId: 5,
      team: 'Queens (NC)',
      id: 3261
    },
    {
      leagueId: 5,
      team: 'Stetson',
      id: 1579
    },
    {
      leagueId: 5,
      team: 'Davidson',
      id: 1425
    },
    {
      leagueId: 5,
      team: 'Dayton',
      id: 1426
    },
    {
      leagueId: 5,
      team: 'Duquesne',
      id: 1431
    },
    {
      leagueId: 5,
      team: 'Fordham',
      id: 1444
    },
    {
      leagueId: 5,
      team: 'George Mason',
      id: 1646
    },
    {
      leagueId: 5,
      team: 'George Washington',
      id: 1701
    },
    {
      leagueId: 5,
      team: 'La Salle',
      id: 1656
    },
    {
      leagueId: 5,
      team: 'Loyola Chicago',
      id: 1651
    },
    {
      leagueId: 5,
      team: 'Rhode Island',
      id: 1550
    },
    {
      leagueId: 5,
      team: 'Richmond',
      id: 1552
    },
    {
      leagueId: 5,
      team: "St. Joseph's (PA)",
      id: 1708
    },
    {
      leagueId: 5,
      team: 'Saint Louis',
      id: 1720
    },
    {
      leagueId: 5,
      team: 'St. Bonaventure',
      id: 1676
    },
    {
      leagueId: 5,
      team: 'Massachusetts',
      id: 1490
    },
    {
      leagueId: 5,
      team: 'Virginia Commonwealth',
      id: 1677
    },
    {
      leagueId: 5,
      team: 'Butler',
      id: 1404
    },
    {
      leagueId: 5,
      team: 'Creighton',
      id: 1662
    },
    {
      leagueId: 5,
      team: 'DePaul',
      id: 1666
    },
    {
      leagueId: 5,
      team: 'Georgetown',
      id: 1448
    },
    {
      leagueId: 5,
      team: 'Marquette',
      id: 1660
    },
    {
      leagueId: 5,
      team: 'Providence',
      id: 1704
    },
    {
      leagueId: 5,
      team: 'Seton Hall',
      id: 1657
    },
    {
      leagueId: 5,
      team: "St. John's",
      id: 1678
    },
    {
      leagueId: 5,
      team: 'Connecticut',
      id: 263
    },
    {
      leagueId: 5,
      team: 'Villanova',
      id: 1616
    },
    {
      leagueId: 5,
      team: 'Xavier',
      id: 1644
    },
    {
      leagueId: 5,
      team: 'Eastern Washington',
      id: 1437
    },
    {
      leagueId: 5,
      team: 'Idaho State',
      id: 1462
    },
    {
      leagueId: 5,
      team: 'Idaho',
      id: 276
    },
    {
      leagueId: 5,
      team: 'Montana',
      id: 1506
    },
    {
      leagueId: 5,
      team: 'Montana State',
      id: 1507
    },
    {
      leagueId: 5,
      team: 'Northern Arizona',
      id: 1527
    },
    {
      leagueId: 5,
      team: 'Northern Colorado',
      id: 1528
    },
    {
      leagueId: 5,
      team: 'Portland State',
      id: 1545
    },
    {
      leagueId: 5,
      team: 'Sacramento State',
      id: 1555
    },
    {
      leagueId: 5,
      team: 'Weber State',
      id: 1624
    },
    {
      leagueId: 5,
      team: 'Campbell',
      id: 1408
    },
    {
      leagueId: 5,
      team: 'Charleston Southern',
      id: 1413
    },
    {
      leagueId: 5,
      team: 'Gardner-Webb',
      id: 1447
    },
    {
      leagueId: 5,
      team: 'High Point',
      id: 1680
    },
    {
      leagueId: 5,
      team: 'Longwood',
      id: 1699
    },
    {
      leagueId: 5,
      team: 'Presbyterian',
      id: 1547
    },
    {
      leagueId: 5,
      team: 'Radford',
      id: 1751
    },
    {
      leagueId: 5,
      team: 'South Carolina-Upstate',
      id: 1696
    },
    {
      leagueId: 5,
      team: 'UNC Asheville',
      id: 1719
    },
    {
      leagueId: 5,
      team: 'Winthrop',
      id: 1679
    },
    {
      leagueId: 5,
      team: 'Illinois',
      id: 277
    },
    {
      leagueId: 5,
      team: 'Indiana',
      id: 278
    },
    {
      leagueId: 5,
      team: 'Iowa',
      id: 279
    },
    {
      leagueId: 5,
      team: 'Maryland',
      id: 291
    },
    {
      leagueId: 5,
      team: 'Michigan State',
      id: 296
    },
    {
      leagueId: 5,
      team: 'Michigan',
      id: 295
    },
    {
      leagueId: 5,
      team: 'Minnesota',
      id: 298
    },
    {
      leagueId: 5,
      team: 'Nebraska',
      id: 302
    },
    {
      leagueId: 5,
      team: 'Northwestern',
      id: 310
    },
    {
      leagueId: 5,
      team: 'Ohio State',
      id: 313
    },
    {
      leagueId: 5,
      team: 'Penn State',
      id: 319
    },
    {
      leagueId: 5,
      team: 'Purdue',
      id: 321
    },
    {
      leagueId: 5,
      team: 'Rutgers',
      id: 323
    },
    {
      leagueId: 5,
      team: 'Wisconsin',
      id: 359
    },
    {
      leagueId: 5,
      team: 'Baylor',
      id: 251
    },
    {
      leagueId: 5,
      team: 'Iowa State',
      id: 280
    },
    {
      leagueId: 5,
      team: 'Kansas',
      id: 281
    },
    {
      leagueId: 5,
      team: 'Kansas State',
      id: 282
    },
    {
      leagueId: 5,
      team: 'Oklahoma',
      id: 314
    },
    {
      leagueId: 5,
      team: 'Oklahoma State',
      id: 315
    },
    {
      leagueId: 5,
      team: 'TCU',
      id: 333
    },
    {
      leagueId: 5,
      team: 'Texas',
      id: 336
    },
    {
      leagueId: 5,
      team: 'Texas Tech',
      id: 338
    },
    {
      leagueId: 5,
      team: 'West Virginia',
      id: 356
    },
    {
      leagueId: 5,
      team: 'Cal Poly',
      id: 1406
    },
    {
      leagueId: 5,
      team: 'Cal State-Bakersfield',
      id: 1672
    },
    {
      leagueId: 5,
      team: 'Cal State-Fullerton',
      id: 1688
    },
    {
      leagueId: 5,
      team: 'Cal State-Northridge',
      id: 1721
    },
    {
      leagueId: 5,
      team: 'Hawaii',
      id: 274
    },
    {
      leagueId: 5,
      team: 'Long Beach State',
      id: 1675
    },
    {
      leagueId: 5,
      team: 'UC Davis',
      id: 1602
    },
    {
      leagueId: 5,
      team: 'UC Irvine',
      id: 1670
    },
    {
      leagueId: 5,
      team: 'UC Riverside',
      id: 1647
    },
    {
      leagueId: 5,
      team: 'UC San Diego',
      id: 3125
    },
    {
      leagueId: 5,
      team: 'UC Santa Barbara',
      id: 1702
    },
    {
      leagueId: 5,
      team: 'College of Charleston',
      id: 1645
    },
    {
      leagueId: 5,
      team: 'Delaware',
      id: 1427
    },
    {
      leagueId: 5,
      team: 'Drexel',
      id: 1694
    },
    {
      leagueId: 5,
      team: 'Elon',
      id: 1438
    },
    {
      leagueId: 5,
      team: 'Hampton',
      id: 1454
    },
    {
      leagueId: 5,
      team: 'Hofstra',
      id: 1689
    },
    {
      leagueId: 5,
      team: 'Monmouth',
      id: 1505
    },
    {
      leagueId: 5,
      team: 'North Carolina A&T',
      id: 1523
    },
    {
      leagueId: 5,
      team: 'Northeastern',
      id: 1661
    },
    {
      leagueId: 5,
      team: 'Stony Brook',
      id: 1580
    },
    {
      leagueId: 5,
      team: 'Towson',
      id: 1596
    },
    {
      leagueId: 5,
      team: 'UNC Wilmington',
      id: 1641
    },
    {
      leagueId: 5,
      team: 'William & Mary',
      id: 1630
    },
    {
      leagueId: 5,
      team: 'Charlotte',
      id: 1414
    },
    {
      leagueId: 5,
      team: 'Florida Atlantic',
      id: 268
    },
    {
      leagueId: 5,
      team: 'Florida International',
      id: 269
    },
    {
      leagueId: 5,
      team: 'Louisiana Tech',
      id: 285
    },
    {
      leagueId: 5,
      team: 'Middle Tennessee',
      id: 297
    },
    {
      leagueId: 5,
      team: 'North Texas',
      id: 308
    },
    {
      leagueId: 5,
      team: 'Rice',
      id: 322
    },
    {
      leagueId: 5,
      team: 'UAB',
      id: 343
    },
    {
      leagueId: 5,
      team: 'UTEP',
      id: 349
    },
    {
      leagueId: 5,
      team: 'UTSA',
      id: 1613
    },
    {
      leagueId: 5,
      team: 'Western Kentucky',
      id: 357
    },
    {
      leagueId: 5,
      team: 'Cleveland State',
      id: 1716
    },
    {
      leagueId: 5,
      team: 'Detroit',
      id: 1669
    },
    {
      leagueId: 5,
      team: 'Green Bay',
      id: 1724
    },
    {
      leagueId: 5,
      team: 'IUPUI',
      id: 1655
    },
    {
      leagueId: 5,
      team: 'Milwaukee',
      id: 1649
    },
    {
      leagueId: 5,
      team: 'Northern Kentucky',
      id: 1697
    },
    {
      leagueId: 5,
      team: 'Oakland',
      id: 1648
    },
    {
      leagueId: 5,
      team: 'Purdue Fort Wayne',
      id: 1722
    },
    {
      leagueId: 5,
      team: 'Robert Morris',
      id: 1553
    },
    {
      leagueId: 5,
      team: 'Wright State',
      id: 1654
    },
    {
      leagueId: 5,
      team: 'Youngstown State',
      id: 1635
    },
    {
      leagueId: 5,
      team: 'Chicago State',
      id: 1753
    },
    {
      leagueId: 5,
      team: 'Hartford',
      id: 1673
    },
    {
      leagueId: 5,
      team: 'Brown',
      id: 1400
    },
    {
      leagueId: 5,
      team: 'Columbia',
      id: 1422
    },
    {
      leagueId: 5,
      team: 'Cornell',
      id: 1423
    },
    {
      leagueId: 5,
      team: 'Dartmouth',
      id: 1424
    },
    {
      leagueId: 5,
      team: 'Harvard',
      id: 1455
    },
    {
      leagueId: 5,
      team: 'Pennsylvania',
      id: 1542
    },
    {
      leagueId: 5,
      team: 'Princeton',
      id: 1548
    },
    {
      leagueId: 5,
      team: 'Yale',
      id: 1634
    },
    {
      leagueId: 5,
      team: 'Canisius',
      id: 1684
    },
    {
      leagueId: 5,
      team: 'Fairfield',
      id: 1706
    },
    {
      leagueId: 5,
      team: 'Iona',
      id: 1638
    },
    {
      leagueId: 5,
      team: 'Manhattan',
      id: 1700
    },
    {
      leagueId: 5,
      team: 'Marist',
      id: 1487
    },
    {
      leagueId: 5,
      team: "Mount St. Mary's",
      id: 1762
    },
    {
      leagueId: 5,
      team: 'Niagara',
      id: 1658
    },
    {
      leagueId: 5,
      team: 'Quinnipiac',
      id: 1711
    },
    {
      leagueId: 5,
      team: 'Rider',
      id: 1681
    },
    {
      leagueId: 5,
      team: "St. Peter's",
      id: 1692
    },
    {
      leagueId: 5,
      team: 'Siena',
      id: 1710
    },
    {
      leagueId: 5,
      team: 'Akron',
      id: 242
    },
    {
      leagueId: 5,
      team: 'Ball State',
      id: 250
    },
    {
      leagueId: 5,
      team: 'Bowling Green',
      id: 254
    },
    {
      leagueId: 5,
      team: 'Buffalo',
      id: 256
    },
    {
      leagueId: 5,
      team: 'Central Michigan',
      id: 258
    },
    {
      leagueId: 5,
      team: 'Eastern Michigan',
      id: 266
    },
    {
      leagueId: 5,
      team: 'Kent State',
      id: 283
    },
    {
      leagueId: 5,
      team: 'Miami (OH)',
      id: 294
    },
    {
      leagueId: 5,
      team: 'Northern Illinois',
      id: 309
    },
    {
      leagueId: 5,
      team: 'Ohio',
      id: 312
    },
    {
      leagueId: 5,
      team: 'Toledo',
      id: 339
    },
    {
      leagueId: 5,
      team: 'Western Michigan',
      id: 358
    },
    {
      leagueId: 5,
      team: 'Coppin State',
      id: 1682
    },
    {
      leagueId: 5,
      team: 'Delaware State',
      id: 1428
    },
    {
      leagueId: 5,
      team: 'Howard',
      id: 1460
    },
    {
      leagueId: 5,
      team: 'Maryland-Eastern',
      id: 1717
    },
    {
      leagueId: 5,
      team: 'Morgan State',
      id: 1509
    },
    {
      leagueId: 5,
      team: 'Norfolk State',
      id: 1521
    },
    {
      leagueId: 5,
      team: 'North Carolina Central',
      id: 1512
    },
    {
      leagueId: 5,
      team: 'South Carolina State',
      id: 1566
    },
    {
      leagueId: 5,
      team: 'Belmont',
      id: 1709
    },
    {
      leagueId: 5,
      team: 'Bradley',
      id: 1687
    },
    {
      leagueId: 5,
      team: 'Drake',
      id: 1429
    },
    {
      leagueId: 5,
      team: 'Evansville',
      id: 1695
    },
    {
      leagueId: 5,
      team: 'Illinois State',
      id: 1464
    },
    {
      leagueId: 5,
      team: 'Indiana State',
      id: 1467
    },
    {
      leagueId: 5,
      team: 'Missouri State',
      id: 1504
    },
    {
      leagueId: 5,
      team: 'Murray State',
      id: 1510
    },
    {
      leagueId: 5,
      team: 'Northern Iowa',
      id: 1530
    },
    {
      leagueId: 5,
      team: 'Southern Illinois',
      id: 1573
    },
    {
      leagueId: 5,
      team: 'Illinois-Chicago',
      id: 1664
    },
    {
      leagueId: 5,
      team: 'Valparaiso',
      id: 1614
    },
    {
      leagueId: 5,
      team: 'Air Force',
      id: 1377
    },
    {
      leagueId: 5,
      team: 'Boise State',
      id: 252
    },
    {
      leagueId: 5,
      team: 'Colorado State',
      id: 262
    },
    {
      leagueId: 5,
      team: 'Fresno State',
      id: 271
    },
    {
      leagueId: 5,
      team: 'Nevada',
      id: 303
    },
    {
      leagueId: 5,
      team: 'New Mexico',
      id: 304
    },
    {
      leagueId: 5,
      team: 'San Diego State',
      id: 324
    },
    {
      leagueId: 5,
      team: 'San Jose State',
      id: 325
    },
    {
      leagueId: 5,
      team: 'UNLV',
      id: 346
    },
    {
      leagueId: 5,
      team: 'Utah State',
      id: 348
    },
    {
      leagueId: 5,
      team: 'Wyoming',
      id: 360
    },
    {
      leagueId: 5,
      team: 'Central Connecticut',
      id: 1410
    },
    {
      leagueId: 5,
      team: 'Fairleigh Dickinson',
      id: 1757
    },
    {
      leagueId: 5,
      team: 'Long Island University',
      id: 2797
    },
    {
      leagueId: 5,
      team: 'Merrimack',
      id: 2540
    },
    {
      leagueId: 5,
      team: 'Sacred Heart',
      id: 1556
    },
    {
      leagueId: 5,
      team: 'St. Francis (PA)',
      id: 1576
    },
    {
      leagueId: 5,
      team: 'St. Francis (NY)',
      id: 1707
    },
    {
      leagueId: 5,
      team: 'Stonehill College',
      id: 4397
    },
    {
      leagueId: 5,
      team: 'Wagner',
      id: 1620
    },
    {
      leagueId: 5,
      team: 'Eastern Illinois',
      id: 1434
    },
    {
      leagueId: 5,
      team: 'Lindenwood',
      id: 2723
    },
    {
      leagueId: 5,
      team: 'Arkansas-Little Rock',
      id: 1640
    },
    {
      leagueId: 5,
      team: 'Morehead State',
      id: 1508
    },
    {
      leagueId: 5,
      team: 'SIU-Edwardsville',
      id: 1723
    },
    {
      leagueId: 5,
      team: 'SE Missouri State',
      id: 1570
    },
    {
      leagueId: 5,
      team: 'Southern Indiana',
      id: 4394
    },
    {
      leagueId: 5,
      team: 'Tennessee State',
      id: 1585
    },
    {
      leagueId: 5,
      team: 'Tennessee Tech',
      id: 1586
    },
    {
      leagueId: 5,
      team: 'Tennessee-Martin',
      id: 1715
    },
    {
      leagueId: 5,
      team: 'Arizona State',
      id: 245
    },
    {
      leagueId: 5,
      team: 'Arizona',
      id: 244
    },
    {
      leagueId: 5,
      team: 'California',
      id: 257
    },
    {
      leagueId: 5,
      team: 'Colorado',
      id: 261
    },
    {
      leagueId: 5,
      team: 'Oregon',
      id: 317
    },
    {
      leagueId: 5,
      team: 'Oregon State',
      id: 318
    },
    {
      leagueId: 5,
      team: 'Stanford',
      id: 331
    },
    {
      leagueId: 5,
      team: 'UCLA',
      id: 345
    },
    {
      leagueId: 5,
      team: 'USC',
      id: 328
    },
    {
      leagueId: 5,
      team: 'Utah',
      id: 347
    },
    {
      leagueId: 5,
      team: 'Washington',
      id: 354
    },
    {
      leagueId: 5,
      team: 'Washington State',
      id: 355
    },
    {
      leagueId: 5,
      team: 'American',
      id: 1755
    },
    {
      leagueId: 5,
      team: 'Army',
      id: 248
    },
    {
      leagueId: 5,
      team: 'Boston University',
      id: 1756
    },
    {
      leagueId: 5,
      team: 'Bucknell',
      id: 1402
    },
    {
      leagueId: 5,
      team: 'Colgate',
      id: 1419
    },
    {
      leagueId: 5,
      team: 'Holy Cross',
      id: 1457
    },
    {
      leagueId: 5,
      team: 'Lafayette',
      id: 1479
    },
    {
      leagueId: 5,
      team: 'Lehigh',
      id: 1481
    },
    {
      leagueId: 5,
      team: 'Loyola Maryland',
      id: 1652
    },
    {
      leagueId: 5,
      team: 'Navy',
      id: 301
    },
    {
      leagueId: 5,
      team: 'Alabama',
      id: 243
    },
    {
      leagueId: 5,
      team: 'Arkansas',
      id: 246
    },
    {
      leagueId: 5,
      team: 'Auburn',
      id: 249
    },
    {
      leagueId: 5,
      team: 'Florida',
      id: 267
    },
    {
      leagueId: 5,
      team: 'Georgia',
      id: 272
    },
    {
      leagueId: 5,
      team: 'Kentucky',
      id: 284
    },
    {
      leagueId: 5,
      team: 'LSU',
      id: 289
    },
    {
      leagueId: 5,
      team: 'Mississippi State',
      id: 299
    },
    {
      leagueId: 5,
      team: 'Missouri',
      id: 300
    },
    {
      leagueId: 5,
      team: 'Mississippi',
      id: 316
    },
    {
      leagueId: 5,
      team: 'South Carolina',
      id: 326
    },
    {
      leagueId: 5,
      team: 'Tennessee',
      id: 335
    },
    {
      leagueId: 5,
      team: 'Texas A&M',
      id: 337
    },
    {
      leagueId: 5,
      team: 'Vanderbilt',
      id: 350
    },
    {
      leagueId: 5,
      team: 'Chattanooga',
      id: 1415
    },
    {
      leagueId: 5,
      team: 'East Tennessee State',
      id: 1714
    },
    {
      leagueId: 5,
      team: 'Furman',
      id: 1446
    },
    {
      leagueId: 5,
      team: 'Mercer',
      id: 1493
    },
    {
      leagueId: 5,
      team: 'Samford',
      id: 1558
    },
    {
      leagueId: 5,
      team: 'The Citadel',
      id: 1594
    },
    {
      leagueId: 5,
      team: 'UNC Greensboro',
      id: 1650
    },
    {
      leagueId: 5,
      team: 'VMI',
      id: 1619
    },
    {
      leagueId: 5,
      team: 'Western Carolina',
      id: 1626
    },
    {
      leagueId: 5,
      team: 'Wofford',
      id: 1632
    },
    {
      leagueId: 5,
      team: 'Houston Christian',
      id: 4510
    },
    {
      leagueId: 5,
      team: 'Incarnate Word',
      id: 1465
    },
    {
      leagueId: 5,
      team: 'Lamar',
      id: 1480
    },
    {
      leagueId: 5,
      team: 'McNeese State',
      id: 1491
    },
    {
      leagueId: 5,
      team: 'New Orleans',
      id: 1758
    },
    {
      leagueId: 5,
      team: 'Nicholls State',
      id: 1520
    },
    {
      leagueId: 5,
      team: 'Northwestern State',
      id: 1532
    },
    {
      leagueId: 5,
      team: 'Southeastern Louisiana',
      id: 1571
    },
    {
      leagueId: 5,
      team: 'Texas A&M-Commerce',
      id: 3757
    },
    {
      leagueId: 5,
      team: 'Texas A&M-Corpus Christi',
      id: 1713
    },
    {
      leagueId: 5,
      team: 'Alabama A&M',
      id: 1380
    },
    {
      leagueId: 5,
      team: 'Alabama State',
      id: 1381
    },
    {
      leagueId: 5,
      team: 'Alcorn State',
      id: 1383
    },
    {
      leagueId: 5,
      team: 'Arkansas-Pine Bluff',
      id: 1389
    },
    {
      leagueId: 5,
      team: 'Bethune-Cookman',
      id: 1395
    },
    {
      leagueId: 5,
      team: 'Florida A&M',
      id: 1440
    },
    {
      leagueId: 5,
      team: 'Grambling',
      id: 1453
    },
    {
      leagueId: 5,
      team: 'Jackson State',
      id: 1470
    },
    {
      leagueId: 5,
      team: 'Mississippi Valley State',
      id: 1502
    },
    {
      leagueId: 5,
      team: 'Prairie View',
      id: 1546
    },
    {
      leagueId: 5,
      team: 'Southern',
      id: 1572
    },
    {
      leagueId: 5,
      team: 'Texas Southern',
      id: 1591
    },
    {
      leagueId: 5,
      team: 'Denver',
      id: 1698
    },
    {
      leagueId: 5,
      team: 'UMKC',
      id: 1752
    },
    {
      leagueId: 5,
      team: 'North Dakota',
      id: 1524
    },
    {
      leagueId: 5,
      team: 'North Dakota State',
      id: 1525
    },
    {
      leagueId: 5,
      team: 'Nebraska-Omaha',
      id: 1659
    },
    {
      leagueId: 5,
      team: 'Oral Roberts',
      id: 1667
    },
    {
      leagueId: 5,
      team: 'South Dakota',
      id: 1567
    },
    {
      leagueId: 5,
      team: 'South Dakota State',
      id: 1568
    },
    {
      leagueId: 5,
      team: 'St. Thomas (MN)',
      id: 3697
    },
    {
      leagueId: 5,
      team: 'Western Illinois',
      id: 1627
    },
    {
      leagueId: 5,
      team: 'Appalachian State',
      id: 1384
    },
    {
      leagueId: 5,
      team: 'Arkansas State',
      id: 247
    },
    {
      leagueId: 5,
      team: 'Coastal Carolina',
      id: 369
    },
    {
      leagueId: 5,
      team: 'Georgia Southern',
      id: 1450
    },
    {
      leagueId: 5,
      team: 'Georgia State',
      id: 1451
    },
    {
      leagueId: 5,
      team: 'James Madison',
      id: 1473
    },
    {
      leagueId: 5,
      team: 'Louisiana-Lafayette',
      id: 286
    },
    {
      leagueId: 5,
      team: 'Marshall',
      id: 290
    },
    {
      leagueId: 5,
      team: 'Old Dominion',
      id: 1538
    },
    {
      leagueId: 5,
      team: 'South Alabama',
      id: 1564
    },
    {
      leagueId: 5,
      team: 'Southern Mississippi',
      id: 330
    },
    {
      leagueId: 5,
      team: 'Texas State',
      id: 1592
    },
    {
      leagueId: 5,
      team: 'Troy',
      id: 340
    },
    {
      leagueId: 5,
      team: 'Louisiana-Monroe',
      id: 287
    },
    {
      leagueId: 5,
      team: 'BYU',
      id: 1405
    },
    {
      leagueId: 5,
      team: 'Gonzaga',
      id: 1665
    },
    {
      leagueId: 5,
      team: 'Loyola Marymount',
      id: 1653
    },
    {
      leagueId: 5,
      team: 'Pacific',
      id: 1668
    },
    {
      leagueId: 5,
      team: 'Pepperdine',
      id: 1637
    },
    {
      leagueId: 5,
      team: 'Portland',
      id: 1703
    },
    {
      leagueId: 5,
      team: "St. Mary's (CA)",
      id: 1685
    },
    {
      leagueId: 5,
      team: 'San Diego',
      id: 1559
    },
    {
      leagueId: 5,
      team: 'San Francisco',
      id: 1690
    },
    {
      leagueId: 5,
      team: 'Santa Clara',
      id: 1671
    },
    {
      leagueId: 5,
      team: 'Abilene Christian',
      id: 1376
    },
    {
      leagueId: 5,
      team: 'California Baptist',
      id: 1763
    },
    {
      leagueId: 5,
      team: 'Grand Canyon',
      id: 1749
    },
    {
      leagueId: 5,
      team: 'New Mexico State',
      id: 305
    },
    {
      leagueId: 5,
      team: 'Sam Houston State',
      id: 1557
    },
    {
      leagueId: 5,
      team: 'Seattle',
      id: 2541
    },
    {
      leagueId: 5,
      team: 'Southern Utah',
      id: 1575
    },
    {
      leagueId: 5,
      team: 'Stephen F. Austin',
      id: 1578
    },
    {
      leagueId: 5,
      team: 'Tarleton State',
      id: 3123
    },
    {
      leagueId: 5,
      team: 'Texas-Arlington',
      id: 1693
    },
    {
      leagueId: 5,
      team: 'Rio Grande Valley',
      id: 1759
    },
    {
      leagueId: 5,
      team: 'Utah Tech',
      id: 4421
    },
    {
      leagueId: 5,
      team: 'Utah Valley',
      id: 1674
    },
    {
      leagueId: 6,
      team: 'Boston Bruins',
      id: 98
    },
    {
      leagueId: 6,
      team: 'Buffalo Sabres',
      id: 99
    },
    {
      leagueId: 6,
      team: 'Detroit Red Wings',
      id: 110
    },
    {
      leagueId: 6,
      team: 'Florida Panthers',
      id: 104
    },
    {
      leagueId: 6,
      team: 'Montreal Canadiens',
      id: 100
    },
    {
      leagueId: 6,
      team: 'Ottawa Senators',
      id: 101
    },
    {
      leagueId: 6,
      team: 'Tampa Bay Lightning',
      id: 105
    },
    {
      leagueId: 6,
      team: 'Toronto Maple Leafs',
      id: 102
    },
    {
      leagueId: 6,
      team: 'Carolina Hurricanes',
      id: 103
    },
    {
      leagueId: 6,
      team: 'Columbus Blue Jackets',
      id: 109
    },
    {
      leagueId: 6,
      team: 'New Jersey Devils',
      id: 93
    },
    {
      leagueId: 6,
      team: 'New York Islanders',
      id: 94
    },
    {
      leagueId: 6,
      team: 'New York Rangers',
      id: 95
    },
    {
      leagueId: 6,
      team: 'Philadelphia Flyers',
      id: 96
    },
    {
      leagueId: 6,
      team: 'Pittsburgh Penguins',
      id: 97
    },
    {
      leagueId: 6,
      team: 'Washington Capitals',
      id: 106
    },
    {
      leagueId: 6,
      team: 'Arizona Coyotes',
      id: 121
    },
    {
      leagueId: 6,
      team: 'Chicago Blackhawks',
      id: 108
    },
    {
      leagueId: 6,
      team: 'Colorado Avalanche',
      id: 114
    },
    {
      leagueId: 6,
      team: 'Dallas Stars',
      id: 119
    },
    {
      leagueId: 6,
      team: 'Minnesota Wild',
      id: 116
    },
    {
      leagueId: 6,
      team: 'Nashville Predators',
      id: 111
    },
    {
      leagueId: 6,
      team: 'St. Louis Blues',
      id: 112
    },
    {
      leagueId: 6,
      team: 'Winnipeg Jets',
      id: 107
    },
    {
      leagueId: 6,
      team: 'Anaheim Ducks',
      id: 118
    },
    {
      leagueId: 6,
      team: 'Calgary Flames',
      id: 113
    },
    {
      leagueId: 6,
      team: 'Edmonton Oilers',
      id: 115
    },
    {
      leagueId: 6,
      team: 'Los Angeles Kings',
      id: 120
    },
    {
      leagueId: 6,
      team: 'San Jose Sharks',
      id: 122
    },
    {
      leagueId: 6,
      team: 'Seattle Kraken',
      id: 3501
    },
    {
      leagueId: 6,
      team: 'Vancouver Canucks',
      id: 117
    },
    {
      leagueId: 6,
      team: 'Vegas Golden Knights',
      id: 361
    }
  ]

  // The Requester allows API calls be retry in case of timeout
  // or connection failure
  Requester.request(config, customError)
    .then(response => {
      // It's common practice to store the desired value at the top-level
      // result key. This allows different adapters to be compatible with
      // one another.
      // if the contest is scheduled, return a result, otherwise do not
      if (Requester.getResult(response.data, ['results', '0', 'status']) === 'scheduled') {

        const leagueString = Requester.getResult(response.data, ['results', '0', 'details', 'league']).trim()

        // convert leagueString to numberic id
        const league = leagueLegend.find(x => x.league === leagueString).id

        const eventTime = moment(Requester.getResult(response.data, ['results', '0', 'schedule', 'date']).trim()).unix()

        // away team
        const awayTeamString = Requester.getResult(response.data, ['results', '0', 'teams', 'away', 'team']).trim()

        // convert awayTeamString
        const awayTeam = teamLegend.find(x => x.leagueId === league && x.team === awayTeamString).id

        // home team
        const homeTeamString = Requester.getResult(response.data, ['results', '0', 'teams', 'home', 'team']).trim()

        // convert homeTeamString
        const homeTeam = teamLegend.find(x => x.leagueId === league && x.team === homeTeamString).id

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
