const tours = [
 
  {
    "startLocation": {
      "description": "Aspen, USA",
      "type": "Point",
      "coordinates": [-106.822318, 39.190872],
      "address": "419 S Mill St, Aspen, CO 81611, USA"
    },
    "ratingsAverage": 4.5,
    "ratingsQuantity": 6,
    "images": ["tour-3-1.jpg", "tour-3-2.jpg", "tour-3-3.jpg"],
    "startDates": [
      "2022-01-05T10:00:00.000Z",
      "2022-02-12T10:00:00.000Z",
      "2023-01-06T10:00:00.000Z"
    ],
    "_id": "5c88fa8cf4afda39709c295a",
    "name": "The Snow Adventurer",
    "duration": 4,
    "maxGroupSize": 10,
    "difficulty": "difficult",
    "guides": [
      "5c8a21d02f8fb814b56fa189",
      "5c8a23412f8fb814b56fa18c",
      "5c8a1f4e2f8fb814b56fa185"
    ],
    "price": 997,
    "summary": "Exciting adventure in the snow with snowboarding and skiing",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
    "imageCover": "tour-3-cover.jpg",
    "locations": [
      {
        "_id": "5c88fa8cf4afda39709c295c",
        "description": "Aspen Highlands",
        "type": "Point",
        "coordinates": [-106.855385, 39.182677],
        "day": 1
      },
      {
        "_id": "5c88fa8cf4afda39709c295b",
        "description": "Beaver Creek",
        "type": "Point",
        "coordinates": [-106.516623, 39.60499],
        "day": 2
      }
    ]
  },
  {
    "startLocation": {
      "description": "Las Vegas, USA",
      "type": "Point",
      "coordinates": [-115.172652, 36.110904],
      "address": "3663 S Las Vegas Blvd, Las Vegas, NV 89109, USA"
    },
    "ratingsAverage": 4.7,
    "ratingsQuantity": 7,
    "images": ["tour-5-1.jpg", "tour-5-2.jpg", "tour-5-3.jpg"],
    "startDates": [
      "2021-08-05T09:00:00.000Z",
      "2022-03-20T10:00:00.000Z",
      "2022-08-12T09:00:00.000Z"
    ],
    "_id": "5c88fa8cf4afda39709c2961",
    "name": "The Park Camper",
    "duration": 10,
    "maxGroupSize": 15,
    "difficulty": "medium",
    "guides": [
      "5c8a21f22f8fb814b56fa18a",
      "5c8a23412f8fb814b56fa18c",
      "5c8a201e2f8fb814b56fa186"
    ],
    "price": 1497,
    "summary": "Breathing in Nature in America's most spectacular National Parks",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!",
    "imageCover": "tour-5-cover.jpg",
    "locations": [
      {
        "_id": "5c88fa8cf4afda39709c2965",
        "description": "Zion Canyon National Park",
        "type": "Point",
        "coordinates": [-112.987418, 37.198125],
        "day": 1
      },
      {
        "_id": "5c88fa8cf4afda39709c2964",
        "description": "Antelope Canyon",
        "type": "Point",
        "coordinates": [-111.376161, 36.86438],
        "day": 4
      },
      {
        "_id": "5c88fa8cf4afda39709c2963",
        "description": "Grand Canyon National Park",
        "type": "Point",
        "coordinates": [-112.115763, 36.058973],
        "day": 5
      },
      {
        "_id": "5c88fa8cf4afda39709c2962",
        "description": "Joshua Tree National Park",
        "type": "Point",
        "coordinates": [-116.107963, 34.011646],
        "day": 9
      }
    ]
  },
  {
    "startLocation": {
      "description": "NYC, USA",
      "type": "Point",
      "coordinates": [-73.985141, 40.75894],
      "address": "Manhattan, NY 10036, USA"
    },
    "ratingsAverage": 4.6,
    "ratingsQuantity": 5,
    "images": ["tour-4-1.jpg", "tour-4-2.jpg", "tour-4-3.jpg"],
    "startDates": [
      "2021-03-11T10:00:00.000Z",
      "2021-05-02T09:00:00.000Z",
      "2021-06-09T09:00:00.000Z"
    ],
    "_id": "5c88fa8cf4afda39709c295d",
    "name": "The City Wanderer",
    "duration": 9,
    "maxGroupSize": 20,
    "difficulty": "easy",
    "guides": ["5c8a22c62f8fb814b56fa18b", "5c8a201e2f8fb814b56fa186"],
    "price": 1197,
    "summary": "Living the life of Wanderlust in the US' most beatiful cities",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat lorem ipsum dolor sit amet.\nConsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!",
    "imageCover": "tour-4-cover.jpg",
    "locations": [
      {
        "_id": "5c88fa8cf4afda39709c2960",
        "description": "New York",
        "type": "Point",
        "coordinates": [-73.967696, 40.781821],
        "day": 1
      },
      {
        "_id": "5c88fa8cf4afda39709c295f",
        "description": "Los Angeles",
        "type": "Point",
        "coordinates": [-118.324396, 34.097984],
        "day": 3
      },
      {
        "_id": "5c88fa8cf4afda39709c295e",
        "description": "San Francisco",
        "type": "Point",
        "coordinates": [-122.408865, 37.787825],
        "day": 5
      }
    ]
  },
  {
    "startLocation": {
      "description": "California, USA",
      "type": "Point",
      "coordinates": [-118.803461, 34.006072],
      "address": "29130 Cliffside Dr, Malibu, CA 90265, USA"
    },
    "ratingsAverage": 3.9,
    "ratingsQuantity": 7,
    "images": ["tour-6-1.jpg", "tour-6-2.jpg", "tour-6-3.jpg"],
    "startDates": [
      "2021-07-19T09:00:00.000Z",
      "2021-09-06T09:00:00.000Z",
      "2022-03-18T10:00:00.000Z"
    ],
    "_id": "5c88fa8cf4afda39709c2966",
    "name": "The Sports Lover",
    "duration": 14,
    "maxGroupSize": 8,
    "difficulty": "difficult",
    "guides": [
      "5c8a21f22f8fb814b56fa18a",
      "5c8a1f292f8fb814b56fa184",
      "5c8a1f4e2f8fb814b56fa185"
    ],
    "price": 2997,
    "summary": "Surfing, skating, parajumping, rock climbing and more, all in one tour",
    "description": "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nVoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!",
    "imageCover": "tour-6-cover.jpg",
    "locations": [
      {
        "_id": "5c88fa8cf4afda39709c296b",
        "description": "Point Dume Beach",
        "type": "Point",
        "coordinates": [-118.809361, 34.003098],
        "day": 1
      },
      {
        "_id": "5c88fa8cf4afda39709c296a",
        "description": "Venice Skate Park",
        "type": "Point",
        "coordinates": [-118.47549, 33.987367],
        "day": 4
      },
      {
        "_id": "5c88fa8cf4afda39709c2969",
        "description": "San Diego Skydive",
        "type": "Point",
        "coordinates": [-116.830104, 33.022843],
        "day": 6
      },
      {
        "_id": "5c88fa8cf4afda39709c2968",
        "description": "Kern River Rafting",
        "type": "Point",
        "coordinates": [-118.4547, 35.710359],
        "day": 7
      },
      {
        "_id": "5c88fa8cf4afda39709c2967",
        "description": "Yosemite National Park",
        "type": "Point",
        "coordinates": [-119.600492, 37.742371],
        "day": 10
      }
    ]
  },
  {
    "startLocation": {
      "description": "Utah, USA",
      "type": "Point",
      "coordinates": [-109.55099, 37.283469],
      "address": "Bluff, UT 84512, USA"
    },
    "ratingsAverage": 4.8,
    "ratingsQuantity": 6,
    "images": ["tour-8-1.jpg", "tour-8-2.jpg", "tour-8-3.jpg"],
    "startDates": [
      "2021-03-23T10:00:00.000Z",
      "2021-10-25T09:00:00.000Z",
      "2022-01-30T10:00:00.000Z"
    ],
    "_id": "5c88fa8cf4afda39709c2970",
    "name": "The Star Gazer",
    "duration": 9,
    "maxGroupSize": 8,
    "difficulty": "medium",
    "guides": ["5c8a21d02f8fb814b56fa189", "5c8a1f292f8fb814b56fa184"],
    "price": 2997,
    "summary": "The most remote and stunningly beautiful places for seeing the night sky",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "imageCover": "tour-8-cover.jpg",
    "locations": [
      {
        "_id": "5c88fa8cf4afda39709c2973",
        "description": "Natural Bridges National Monument",
        "type": "Point",
        "coordinates": [-109.99953, 37.629017],
        "day": 1
      },
      {
        "_id": "5c88fa8cf4afda39709c2972",
        "description": "Horseshoe Bend",
        "type": "Point",
        "coordinates": [-111.50954, 36.883269],
        "day": 3
      },
      {
        "_id": "5c88fa8cf4afda39709c2971",
        "description": "Death Valley National Park",
        "type": "Point",
        "coordinates": [-117.07399, 36.501435],
        "day": 6
      }
    ]
  },
  {
    "startLocation": {
      "description": "Yellowknife, CAN",
      "type": "Point",
      "coordinates": [-114.406097, 62.439943],
      "address": "Yellowknife, NT X1A 2L2, Canada"
    },
    "ratingsAverage": 4.7,
    "ratingsQuantity": 7,
    "images": ["tour-9-1.jpg", "tour-9-2.jpg", "tour-9-3.jpg"],
    "startDates": [
      "2021-12-16T10:00:00.000Z",
      "2022-01-16T10:00:00.000Z",
      "2022-12-12T10:00:00.000Z"
    ],
    "_id": "5c88fa8cf4afda39709c2974",
    "name": "The Northern Lights",
    "duration": 3,
    "maxGroupSize": 12,
    "difficulty": "easy",
    "guides": [
      "5c8a21f22f8fb814b56fa18a",
      "5c8a201e2f8fb814b56fa186",
      "5c8a23412f8fb814b56fa18c"
    ],
    "price": 1497,
    "summary": "Enjoy the Northern Lights in one of the best places in the world",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
    "imageCover": "tour-9-cover.jpg",
    "locations": [
      {
        "_id": "5c88fa8cf4afda39709c2975",
        "description": "Yellowknife",
        "type": "Point",
        "coordinates": [-114.406097, 62.439943],
        "day": 1
      }
    ]
  },
  {
    "startLocation": {
      "description": "California, USA",
      "type": "Point",
      "coordinates": [-122.29286, 38.294065],
      "address": "560 Jefferson St, Napa, CA 94559, USA"
    },
    "ratingsAverage": 4.4,
    "ratingsQuantity": 7,
    "images": ["tour-7-1.jpg", "tour-7-2.jpg", "tour-7-3.jpg"],
    "startDates": [
      "2021-02-12T10:00:00.000Z",
      "2021-04-14T09:00:00.000Z",
      "2021-09-01T09:00:00.000Z"
    ],
    "_id": "5c88fa8cf4afda39709c296c",
    "name": "The Wine Taster",
    "duration": 5,
    "maxGroupSize": 8,
    "difficulty": "easy",
    "guides": ["5c8a22c62f8fb814b56fa18b", "5c8a23412f8fb814b56fa18c"],
    "price": 1997,
    "summary": "Exquisite wines, scenic views, exclusive barrel tastings,  and much more",
    "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "imageCover": "tour-7-cover.jpg",
    "locations": [
      {
        "_id": "5c88fa8cf4afda39709c296f",
        "description": "Beringer Vineyards",
        "type": "Point",
        "coordinates": [-122.479887, 38.510312],
        "day": 1
      },
      {
        "_id": "5c88fa8cf4afda39709c296e",
        "description": "Clos Pegase Winery & Tasting Room",
        "type": "Point",
        "coordinates": [-122.582948, 38.585707],
        "day": 3
      },
      {
        "_id": "5c88fa8cf4afda39709c296d",
        "description": "Raymond Vineyard and Cellar",
        "type": "Point",
        "coordinates": [-122.434697, 38.482181],
        "day": 5
      }
    ]
  }
]

const client = [ 
  {
    "_id": "5c8a1f292f8fb814b56fa184",
    "name": "Leo Gillespie",
    "email": "leo@example.com",
    "role": "guide",
    "active": true,
    "photo": "user-5.jpg",
    "password": "$2a$12$OOPr90tBEBF1Iho3ox0Jde0O/WXUR0VLA5xdh6tWcu7qb.qOCvSg2"
  },
  {
    "_id": "5c8a1f4e2f8fb814b56fa185",
    "name": "Jennifer Hardy",
    "email": "jennifer@example.com",
    "role": "guide",
    "active": true,
    "photo": "user-6.jpg",
    "password": "$2a$12$XCXvvlhRBJ8CydKH09v1v.jpg0hB9gVVfMVEoz4MsxqL9zb5PrF42"
  },
  {
    "_id": "5c8a201e2f8fb814b56fa186",
    "name": "Kate Morrison",
    "email": "kate@example.com",
    "role": "guide",
    "active": true,
    "photo": "user-7.jpg",
    "password": "$2a$12$II1F3aBSFDF3Xz7iB4rk/.a2dogwkClMN5gGCWrRlILrG1xtJG7q6"
  },
  {
    "_id": "5c8a20d32f8fb814b56fa187",
    "name": "Eliana Stout",
    "email": "eliana@example.com",
    "role": "user",
    "active": true,
    "photo": "user-8.jpg",
    "password": "$2a$12$Jb/ILhdDV.ZpnPMu19xfe.NRh5ntE2LzNMNcsty05QWwRbmFFVMKO"
  },
  {
    "_id": "5c8a211f2f8fb814b56fa188",
    "name": "Cristian Vega",
    "email": "chris@example.com",
    "role": "user",
    "active": true,
    "photo": "user-9.jpg",
    "password": "$2a$12$r7/jtdWtzNfrfC7zw3uS.eDJ3Bs.8qrO31ZdbMljL.lUY0TAsaAL6"
  },
  {
    "_id": "5c8a21d02f8fb814b56fa189",
    "name": "Steve T. Scaife",
    "email": "steve@example.com",
    "role": "lead-guide",
    "active": true,
    "photo": "user-10.jpg",
    "password": "$2a$12$q7v9dm.S4DvqhAeBc4KwduedEDEkDe2GGFGzteW6xnHt120oRpkqm"
  },
  {
    "_id": "5c8a21f22f8fb814b56fa18a",
    "name": "Aarav Lynn",
    "email": "aarav@example.com",
    "role": "lead-guide",
    "active": true,
    "photo": "user-11.jpg",
    "password": "$2a$12$lKWhzujFvQwG4m/X3mnTneOB3ib9IYETsOqQ8aN5QEWDjX6X2wJJm"
  },
  {
    "_id": "5c8a22c62f8fb814b56fa18b",
    "name": "Miyah Myles",
    "email": "miyah@example.com",
    "role": "lead-guide",
    "active": true,
    "photo": "user-12.jpg",
    "password": "$2a$12$.XIvvmznHQSa9UOI639yhe4vzHKCYO1vpTUZc4d45oiT4GOZQe1kS"
  },
  {
    "_id": "5c8a23412f8fb814b56fa18c",
    "name": "Ben Hadley",
    "email": "ben@example.com",
    "role": "guide",
    "active": true,
    "photo": "user-13.jpg",
    "password": "$2a$12$D3fyuS9ETdBBw5lOwceTMuZcDTyVq28ieeGUAanIuLMcSDz6bpfIe"
  },
  {
    "_id": "5c8a23c82f8fb814b56fa18d",
    "name": "Laura Wilson",
    "email": "laura@example.com",
    "role": "user",
    "active": true,
    "photo": "user-14.jpg",
    "password": "$2a$12$VPYaAAOsI44uhq11WbZ5R.cHT4.fGdlI9gKJd95jmYw3.sAsmbvBq"
  },
  {
    "_id": "5c8a23de2f8fb814b56fa18e",
    "name": "Max Smith",
    "email": "max@example.com",
    "role": "user",
    "active": true,
    "photo": "user-15.jpg",
    "password": "$2a$12$l5qamwqcqC2NlgN6o5A5..9Fxzr6X.bjx/8j3a9jYUHWGOL99oXlm"
  },
  {
    "_id": "5c8a24282f8fb814b56fa18f",
    "name": "Isabel Kirkland",
    "email": "isabel@example.com",
    "role": "user",
    "active": true,
    "photo": "user-16.jpg",
    "password": "$2a$12$IUnwPH0MGFeMuz7g4gtfvOll.9wgLyxG.9C3TKlttfLtCQWEE6GIu"
  },
  {
    "_id": "5c8a24402f8fb814b56fa190",
    "name": "Alexander Jones",
    "email": "alex@example.com",
    "role": "user",
    "active": true,
    "photo": "user-17.jpg",
    "password": "$2a$12$NnclhoYFNcSApoQ3ML8kk.b4B3gbpOmZJLfqska07miAnXukOgK6y"
  },
  {
    "_id": "5c8a245f2f8fb814b56fa191",
    "name": "Eduardo Hernandez",
    "email": "edu@example.com",
    "role": "user",
    "active": true,
    "photo": "user-18.jpg",
    "password": "$2a$12$uB5H1OxLMOqDYTuTlptAoewlovENJvjrLwzsL1wUZ6OkAIByPPBGq"
  },
  {
    "_id": "5c8a24822f8fb814b56fa192",
    "name": "John Riley",
    "email": "john@example.com",
    "role": "user",
    "active": true,
    "photo": "user-19.jpg",
    "password": "$2a$12$11JElTatQlAFo1Obw/dwd..vuVmQyYS7MT14pkl3lRvVPjGA00G8O"
  },
  {
    "_id": "5c8a24a02f8fb814b56fa193",
    "name": "Lisa Brown",
    "email": "lisa@example.com",
    "role": "user",
    "active": true,
    "photo": "user-20.jpg",
    "password": "$2a$12$uA9FsDw63v6dkJKGlLQ/8ufYBs8euB7kqIQewyYlZXU5azEKeLEky"
  }
]

module.exports = { tours, client }