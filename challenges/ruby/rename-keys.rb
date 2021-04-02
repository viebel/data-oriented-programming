require 'pp'
load 'library-data.rb'

def rename_keys(map, key_map)
  key_map.reduce(map.deep_copy) do |result, (old_key, new_key)|
    value = map[old_key]
    result[new_key] = value
    result.reject { |k, _| k == old_key }
  end
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
