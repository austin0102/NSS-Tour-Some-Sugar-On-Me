const database = {
    venues: [
        {
            id: 1, 
            name: "Grand Ole Opry",
            address: "2804 Opryland Dr, Nashville",
            sqft: 45000,
            maxOcc: 4000
        },
        {
            id: 2,
            name: "Bridgestone Arena",
            address: "501 Broadway, Nashville",
            sqft: 1000000,
            maxOcc: 20000
        },
        {
            id: 3,
            name: "Nissan Stadium",
            address: "1 Titans Way, Nashville",
            sqft: 1500000,
            maxOcc: 69143
        },
        {
            id: 4,
            name: "Ascend Amphitheater",
            address: "301 1st Ave South, Nashville",
            sqft: 13000,
            maxOcc: 6800
        }
    ],
     
    bands: [
        {
            id: 1,
            name: "Ripped to Shreds",
            numOfMems: 4,
            genre: "Death Metal",
            yearFormed: 2019
        },
        {
            id: 2,
            name: "Scowl",
            numOfMems: 4,
            genre: "Hardcore Punk",
            yearFormed: 2018
        },
        {
            id: 3,
            name: "Undeath",
            numOfMems: 5,
            genre: "Death Metal",
            yearFormed: 2020
        },
        {
            id: 4,
            name: "L.S. Dunes",
            numOfMems: 4,
            genre: "Emo Rock",
            yearFormed: 2021
        },
        {
            id: 5,
            name: "Weston Estate",
            numOfMems: 5,
            genre: "Alternative Pop",
            yearFormed: 2017
        },
       
        {
            id: 6,
            name: "Michelle",
            numOfMems: 6,
            genre: "Pop & R&B",
            yearFormed: 2018
        },
        {
            id: 7,
            name: "Skeleton Club",
            numOfMems: 3,
            genre: "Experimental Pop",
            yearFormed: 2019
        },
        {
            id: 8,
            name: "NEWJEANS",
            numOfMems: 5,
            genre: "K-Pop",
            yearFormed: 2022
        },
        {
            id: 9,
            name: "Hello Mary",
            numOfMems: 3,
            genre: "Alternative Rock",
            yearFormed: 2023
        },
        {
            id: 10,
            name: "Meet Me @ The Altar",
            numOfMems: 3,
            genre: "Pop Punk",
            yearFormed: 2015
        }
    ],
    members: [
       // Band 1 (4 members)
  {
    id: 1,
    firstName: "Robert",
    lastName: "Downey Jr.",
    yearBorn: 1965,
    role: "Lead Singer",
    bandId: 1,
  },
  {
    id: 2,
    firstName: "Chris",
    lastName: "Evans",
    yearBorn: 1981,
    role: "Guitarist",
    bandId: 1,
  },
  {
    id: 3,
    firstName: "Scarlett",
    lastName: "Johansson",
    yearBorn: 1984,
    role: "Bassist",
    bandId: 1,
  },
  {
    id: 4,
    firstName: "Drew",
    lastName: "Brees",
    yearBorn: 1979,
    role: "Drummer",
    bandId: 1,
  },
  // Band 2 (4 members)
  {
    id: 5,
    firstName: "Aaron",
    lastName: "Rodgers",
    yearBorn: 1983,
    role: "Lead Singer",
    bandId: 2,
  },
  {
    id: 6,
    firstName: "Brad",
    lastName: "Pitt",
    yearBorn: 1963,
    role: "Guitarist",
    bandId: 2,
  },
  {
    id: 7,
    firstName: "Angelina",
    lastName: "Jolie",
    yearBorn: 1975,
    role: "Bassist",
    bandId: 2,
  },
  {
    id: 8,
    firstName: "Tom",
    lastName: "Cruise",
    yearBorn: 1962,
    role: "Drummer",
    bandId: 2,
  },
  // Band 3 (5 members)
  {
    id: 9,
    firstName: "Jennifer",
    lastName: "Lawrence",
    yearBorn: 1990,
    role: "Lead Singer",
    bandId: 3,
  },
  {
    id: 10,
    firstName: "Robert",
    lastName: "Pattinson",
    yearBorn: 1986,
    role: "Guitarist",
    bandId: 3,
  },
  {
    id: 11,
    firstName: "LeBron",
    lastName: "James",
    yearBorn: 1984,
    role: "Bassist",
    bandId: 3,
  },
  {
    id: 12,
    firstName: "Serena",
    lastName: "Williams",
    yearBorn: 1981,
    role: "Drummer",
    bandId: 3,
  },
  // Band 4 (4 members)
  {
    id: 13,
    firstName: "Alex",
    lastName: "Rodriguez",
    yearBorn: 1975,
    role: "Lead Singer",
    bandId: 4,
  },
  {
    id: 14,
    firstName: "Kevin",
    lastName: "Durant",
    yearBorn: 1988,
    role: "Guitarist",
    bandId: 4,
  },
  {
    id: 15,
    firstName: "Tiger",
    lastName: "Woods",
    yearBorn: 1975,
    role: "Bassist",
    bandId: 4,
  },
  {
    id: 16,
    firstName: "Stephen",
    lastName: "Curry",
    yearBorn: 1988,
    role: "Drummer",
    bandId: 4,
  },
  // Band 5 (5 members)
  {
    id: 17,
    firstName: "Johnny",
    lastName: "Depp",
    yearBorn: 1963,
    role: "Lead Singer",
    bandId: 5,
  },
  {
    id: 18,
    firstName: "Russell",
    lastName: "Westbrook",
    yearBorn: 1988,
    role: "Guitarist",
    bandId: 5,
  },
  {
    id: 19,
    firstName: "Aaron",
    lastName: "Judge",
    yearBorn: 1992,
    role: "Bassist",
    bandId: 5,
  },
  {
    id: 20,
    firstName: "Derek",
    lastName: "Jeter",
    yearBorn: 1974,
    role: "Drummer",
    bandId: 5,
  },
  {
    id: 21,
    firstName: "Jake",
    lastName: "Gyllenhaal",
    yearBorn: 1980,
    role: "Keyboardist",
    bandId: 5,
  },
  // Band 6 (4 members)
  {
    id: 22,
    firstName: "Michael",
    lastName: "Phelps",
    yearBorn: 1985,
    role: "Lead Singer",
    bandId: 6,
  },
  {
    id: 23,
    firstName: "Dwayne",
    lastName: "Johnson",
    yearBorn: 1972,
    role: "Guitarist",
    bandId: 6,
  },
  {
    id: 24,
    firstName: "Chris",
    lastName: "Pratt",
    yearBorn: 1979,
    role: "Bassist",
    bandId: 6,
  },
  {
    id: 25,
    firstName: "Tom",
    lastName: "Holland",
    yearBorn: 1996,
    role: "Drummer",
    bandId: 6,
  },
  // Band 7 (5 members)
  {
    id: 26,
    firstName: "Shaquille",
    lastName: "O'Neal",
    yearBorn: 1972,
    role: "Lead Singer",
    bandId: 7,
  },
  {
    id: 27,
    firstName: "Floyd",
    lastName: "Mayweather Jr.",
    yearBorn: 1977,
    role: "Guitarist",
    bandId: 7,
  },
  {
    id: 28,
    firstName: "Russel",
    lastName: "Wilson",
    yearBorn: 1988,
    role: "Bassist",
    bandId: 7,
  },
  {
    id: 29,
    firstName: "Chris",
    lastName: "Hemsworth",
    yearBorn: 1983,
    role: "Drummer",
    bandId: 7,
  },
  {
    id: 30,
    firstName: "Emma",
    lastName: "Watson",
    yearBorn: 1990,
    role: "Keyboardist",
    bandId: 7,
  },
  // Band 8 (4 members)
  {
    id: 31,
    firstName: "Jackie",
    lastName: "Chan",
    yearBorn: 1954,
    role: "Lead Singer",
    bandId: 8,
  },
  {
    id: 32,
    firstName: "Yao",
    lastName: "Ming",
    yearBorn: 1980,
    role: "Guitarist",
    bandId: 8,
  },
  {
    id: 33,
    firstName: "Ken",
    lastName: "Jeong",
    yearBorn: 1969,
    role: "Bassist",
    bandId: 8,
  },
  {
    id: 34,
    firstName: "Manny",
    lastName: "Pacquio",
    yearBorn: 1978,
    role: "Drummer",
    bandId: 8,
  },
  // Band 9 (5 members)
  {
    id: 35,
    firstName: "Leonardo",
    lastName: "DiCaprio",
    yearBorn: 1974,
    role: "Lead Singer",
    bandId: 9,
  },
  {
    id: 36,
    firstName: "Anne",
    lastName: "Hathaway",
    yearBorn: 1982,
    role: "Guitarist",
    bandId: 9,
  },
  {
    id: 37,
    firstName: "Mike",
    lastName: "Trout",
    yearBorn: 1991,
    role: "Bassist",
    bandId: 9,
  },
  {
    id: 38,
    firstName: "Emma",
    lastName: "Stone",
    yearBorn: 1988,
    role: "Drummer",
    bandId: 9,
  },
  {
    id: 39,
    firstName: "Ryan",
    lastName: "Reynolds",
    yearBorn: 1976,
    role: "Keyboardist",
    bandId: 9,
  },
  // Band 10 (4 members)
  {
    id: 40,
    firstName: "Will",
    lastName: "Smith",
    yearBorn: 1968,
    role: "Lead Singer",
    bandId: 10,
  },
  {
    id: 41,
    firstName: "Tom",
    lastName: "Brady",
    yearBorn: 1977,
    role: "Guitarist",
    bandId: 10,
  },
  {
    id: 42,
    firstName: "Ryan",
    lastName: "Gosling",
    yearBorn: 1980,
    role: "Bassist",
    bandId: 10,
  },
  {
    id: 43,
    firstName: "Natalie",
    lastName: "Portman",
    yearBorn: 1981,
    role: "Drummer",
    bandId: 10,
  },

      ],
      
    bookings: [
        {id: 1, bandId: 5, venueId: 1, date: "05/17/23" },

        {id: 2, bandId: 9, venueId: 1, date: "05/17/23"},

        {id: 3, bandId: 2, venueId: 2, date: "06/21/23"},

        {id: 4, bandId: 4, venueId: 2, date: "06/21/23"},

        {id: 5, bandId: 7, venueId: 3, date: "07/19/23"},

        {id: 6, bandId: 6, venueId: 3, date: "07/19/23"},

        {id: 7, bandId: 7, venueId: 4, date: "08/16/23"},

        {id: 8, bandId: 8, venueId: 4, date: "08/16/23"},

        {id: 9, bandId: 8, venueId: 4, date: "09/20/23"},

        {id: 10, bandId: 10, venueId: 4, date: "09/20/23"},

        {id: 11, bandId: 1, venueId: 1, date: "10/18/23"},

        {id: 12, bandId: 3, venueId: 1, date: "10/18/23"},    
    ]
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}
export const getBands = () => {
    return database.bands.map(band => ({...band}))
}
export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

export const getMembers = () => {
    return database.members.map(member => ({...member}))
}