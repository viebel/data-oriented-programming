var books = [
    {
        "isbn": "978-1779501127",
        "title": "Watchmen",
        "bookItems": [
            {
                "id": "book-item-1",
                "libId": "nyc-central-lib",
                "isLent": true
            } 
        ]
    },
    {
        "isbn":  "978-1982137274",
        "title": "7 Habits of Highly Effective People",
        "bookItems": [
            {
                "id": "book-item-123",
                "libId": "hudson-park-lib",
                "isLent": true
            },
            {
                "id": "book-item-17",
                "libId": "nyc-central-lib",
                "isLent": false
            }
        ]
    }
];

var expectedRes = 
{
    "hudson-park-lib": [
        {
            "bookItems": {
                "id": "book-item-123",
                "isLent": true,
                "libId": "hudson-park-lib",
            },
            "isbn": "978-1982137274",
            "title": "7 Habits of Highly Effective People",
        },
    ],
    "nyc-central-lib": [
        {
            "bookItems":  {
                "id": "book-item-1",
                "isLent": true,
                "libId": "nyc-central-lib",
            },
            "isbn": "978-1779501127",
            "title": "Watchmen",
        },
        {
            "bookItems":  {
                "id": "book-item-17",
                "isLent": false,
                "libId": "nyc-central-lib",
            },
            "isbn": "978-1982137274",
            "title": "7 Habits of Highly Effective People",
        },
    ],
};
_.isEqual(booksByRack(books) , expectedRes);

