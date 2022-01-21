var dbBookInfos = [
  {
    "isbn": "978-1982137274",
    "title": "7 Habits of Highly Effective People",
    "available": true
  },
  {
    "isbn": "978-0812981605",
    "title": "The Power of Habit",
    "available": false
  }
];

var openLibBookInfos = [
  {
    "isbn": "978-0812981605",
    "title": "7 Habits of Highly Effective People",
    "subtitle": "Powerful Lessons in Personal Change",
    "number_of_pages": 432,
  },
  {
    "isbn": "978-1982137274",
    "title": "The Power of Habit",
    "subtitle": "Why We Do What We Do in Life and Business",
    "subjects": [
      "Social aspects",
      "Habit",
      "Change (Psychology)"
    ],
  }
];

var joinedArrays =  [
  {
    "available": true,
    "isbn": "978-1982137274",
    "subjects":  [
      "Social aspects",
      "Habit",
      "Change (Psychology)",
    ],
    "subtitle": "Why We Do What We Do in Life and Business",
    "title": "The Power of Habit",
  },
  {
    "available": false,
    "isbn": "978-0812981605",
    "number_of_pages": 432,
    "subtitle": "Powerful Lessons in Personal Change",
    "title": "7 Habits of Highly Effective People",
  },
]

_.isEqual(joinedArrays,
          joinArrays(dbBookInfos, openLibBookInfos, "isbn", "isbn"));
