package main

var libraryData = d{
	"name":    "The smallest library on earth",
	"address": "Here and now",
	"catalog": d{
		"booksByIsbn": d{
			"978-1779501127": d{
				"isbn":            "978-1779501127",
				"title":           "Watchmen",
				"publicationYear": 1987,
				"authorIds": l{"alan-moore",
					"dave-gibbons"},
				"bookItems": l{
					d{
						"id":     "book-item-1",
						"rackId": "rack-17",
					},
					d{
						"id":     "book-item-2",
						"rackId": "rack-17",
					},
				},
			},
		},
		"authorsById": d{
			"alan-moore": d{
				"name":      "Alan Moore",
				"bookIsbns": l{"978-1779501127"},
			},
			"dave-gibbons": d{
				"name":      "Dave Gibbons",
				"bookIsbns": l{"978-1779501127"},
			},
		},
	},
	"userManagement": d{
		"librarians": d{
			"franck@gmail.com": d{
				"email":             "franck@gmail.com",
				"encryptedPassword": "bXlwYXNzd29yZA==",
			},
		},
		"members": d{
			"samantha@gmail.com": d{
				"email":             "samantha@gmail.com",
				"encryptedPassword": "c2VjcmV0",
				"isBlocked":         false,
			},
		},
	},
}
