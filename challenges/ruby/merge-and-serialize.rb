require 'json'
require 'pp'
load 'library-data.rb'

def merge_and_serialize(a, b)
  a.merge(b).to_json
end

watchmen_from_DB = {
  'isbn' => '978-1779501127',
  'title' => 'Watchmen',
  'publicationYear' => 1987,
  'authorIds' => ['alan-moore',
                  'dave-gibbons'],
                  'bookItems' => [
                    {
                      'id' => 'book-item-1',
                      'rackId' => 'rack-17',
                      'isLent' => true
                    },
                    {
                      'id' => 'book-item-2',
                      'rackId' => 'rack-17',
                      'isLent' => false
                    }
                  ]
}

watchmen_from_open_lib = {
  'publishers' => [
    'DC Comics'
  ],
  'number_of_pages' => 334,
  'weight' => '1.4 pounds',
  'physical_format' => 'Paperback',
  'subjects' => [
    'Graphic Novels',
    'Comics & Graphic Novels',
    'Fiction',
    'Fantastic fiction'
  ],
  'isbn_13' => [
    '9780930289232'
  ],
  'title' => 'Watchmen',
  'isbn_10' => [
    '0930289234'
  ],
  'publish_date' => 'April 1, 1995',
  'physical_dimensions' => '10.1 x 6.6 x 0.8 inches'
}

pp merge_and_serialize(watchmen_from_DB, watchmen_from_open_lib)
