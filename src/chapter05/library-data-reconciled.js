_.get(SystemConsistency.reconcile(current, previous, next),
     "catalog");
{
    "booksByIsbn": {
        "978-1779501127": {
            "isbn": "978-1779501127",
            "title": "The Watchmen",
            "publicationYear": 1986,
            "authorIds": ["alan-moore", "dave-gibbons"],
            "bookItems": [
                {
                    "id": "book-item-1",
                    "rackId": "rack-17",
                    "isLent": true
                }
            ]
        }
    },
    "authorsById": {
        "alan-moore": {
            "name": "Alan Moore",
            "bookIsbns": ["978-1779501127"]
        },
        "dave-gibbons": {
            "name": "Dave Gibbons",
            "bookIsbns": ["978-1779501127"]
        }
    }
}
