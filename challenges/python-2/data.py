
library_data = {
    'name': 'The smallest library on earth',
    'address': 'Here and now',
    'catalog': {
        'booksByIsbn': {
            '978-1779501127': {
                'isbn': '978-1779501127',
                'title': 'Watchmen',
                'publicationYear': 1987,
                'authorIds': ['alan-moore',
                              'dave-gibbons'],
                'bookItems': [
                    {
                        'id': 'book-item-1',
                        'rackId': 'rack-17'
                    },
                    {
                        'id': 'book-item-2',
                        'rackId': 'rack-17'
                    }
                ]
            }
        },
        'authorsById': {
            'alan-moore': {
                'name': 'Alan Moore',
                'bookIsbns': ['978-1779501127']
            },
            'dave-gibbons': {
                'name': 'Dave Gibbons',
                'bookIsbns': ['978-1779501127']
            }
        }
    },
  'userManagement': {
    'librarians': {
      'franck@gmail.com' : {
        'email': 'franck@gmail.com',
        'encryptedPassword': 'bXlwYXNzd29yZA=='
      }
    },
    'members': {
      'samantha@gmail.com': {
        'email': 'samantha@gmail.com',
        'encryptedPassword': 'c2VjcmV0',
        'isBlocked': False
      }
    }
  }
};


watchmen_book_info = {
  'title': 'Watchmen',
  'isbn': '978-1779501127',
  'authorNames': ['Alan Moore', 'Dave Gibbons']
}

watchmen_from_db = {
  'isbn': '978-1779501127',
  'title': 'Watchmen',
  'publicationYear': 1987,
  'authorIds': ['alan-moore',
                'dave-gibbons'],
  'bookItems': [
    {
      'id': 'book-item-1',
      'rackId': 'rack-17',
      'isLent': True
    },
    {
      'id': 'book-item-2',
      'rackId': 'rack-17',
      'isLent': False
    }
  ]
}

watchmen_from_openlib = {
  'publishers': [
    'DC Comics'
  ],
  'number_of_pages': 334,
  'weight': '1.4 pounds',
  'physical_format': 'Paperback',
  'subjects': [
    'Graphic Novels',
    'Comics & Graphic Novels',
    'Fiction',
    'Fantastic fiction'
  ],
  'isbn_13': [
    '9780930289232'
  ],
  'title': 'Watchmen',
  'isbn_10': [
    '0930289234'
  ],
  'publish_date': 'April 1, 1995',
  'physical_dimensions': '10.1 x 6.6 x 0.8 inches'
}
