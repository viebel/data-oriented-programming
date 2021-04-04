import {Library} from '../../../src/do/data-model';

export const libraryData: Library = {
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
            'rackId': 'rack-17',
            purchaseDate: '',
            isLent: false
          },
          {
            'id': 'book-item-2',
            'rackId': 'rack-17',
            purchaseDate: '',
            isLent: false
          }
        ]
      }
    },
    'authorsById': {
      'alan-moore': {
        id: 'alan',
        'name': 'Alan Moore',
        'bookIsbns': ['978-1779501127']
      },
      'dave-gibbons': {
        id: 'dave',
        'name': 'Dave Gibbons',
        'bookIsbns': ['978-1779501127']
      }
    }
  },
  'userManagement': {
    'librariansByEmail': {
      'franck@gmail.com': {
        'email': 'franck@gmail.com',
        'encryptedPassword': 'bXlwYXNzd29yZA=='
      }
    },
    'membersByEmail': {
      'samantha@gmail.com': {
        'email': 'samantha@gmail.com',
        'encryptedPassword': 'c2VjcmV0',
        'isBlocked': false,
      }
    }
  }
};