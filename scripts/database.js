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