load 'library-data.rb'

def rename_keys(map, key_map)
  new_map = map.transform_keys(key_map)
  map
    .merge(new_map)
    .reject { |k, _| key_map.keys.include?(k) }
end

alan_moore = {
  'name'      => 'Alan Moore',
  'bookIsbns' => ['978-1779501127']
}

pp rename_keys(alan_moore, {'bookIsbns' => 'books'})

book_item = {
  'id'     => 'book-item-1',
  'rackId' => 'rack-17',
  'isLent' => true
}

pp rename_keys(book_item, {'rackId' => 'id', 'id' => 'bookItemId'})
