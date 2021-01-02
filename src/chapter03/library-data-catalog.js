var libraryData = {
    "name": "The smallest library on earth",
    "address": "Here and now",
    "catalog": {
        "booksByIsbn": {
            "978-1779501127": {
                "isbn": "978-1779501127",
                "title": "Watchmen",
                "publicationYear": 1986,
                "authorIds": ["alan-moore",
                            "dave-gibbons"],
                "bookItems": [
                    {
                        "id": "book-item-1",
                        "rackId": "rack-17",
                        "isLent": true
                    },
                    {
                        "id": "book-item-2",
                        "rackId": "rack-17",
                        "isLent": false
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
    },
    "userManagement": {
        // omitted for now
    }
}
