import copy
import json

def merge(m1, m2):
    m3 = copy.deepcopy(m1)

    for k, v in m2.items():
        m3[k] = v

    return m3


def merge_and_serialize(m1, m2):
    return json.dumps(merge(m1, m2))


if __name__ == '__main__':
    watchmen_from_DB = {
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


    print(merge_and_serialize(watchmen_from_DB, watchmen_from_openlib))
