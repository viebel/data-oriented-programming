require 'json'
require 'pp'

# Hacking in "real" immutable data
class Object
  def immutable!
    self.freeze
  end
end

module Enumerable
  def immutable!
    self.each do |x|
      freeze = x.is_a?(Enumerable) ? :immutable! : :freeze
      x.send(freeze)
    end.freeze
  end
end

# Adds structural sharing support to Arrays and Hashes
class Array
 def set(key, value)
   self.dup.tap { |dup| dup[key] = value }
 end

 def set_in((k, *rest_of_path), v)
   modified_node = v
   modified_node = self[k].set_in(rest_of_path, v) unless rest_of_path.empty?
   set(k, modified_node)
 end
end

class Hash
 def set(key, value)
   self.dup.tap { |dup| dup[key] = value }
 end

 def set_in((k, *rest_of_path), v)
   modified_node = v
   modified_node = self[k].set_in(rest_of_path, v) unless rest_of_path.empty?
   set(k, modified_node)
 end
end

$library_data = {
  'name' => 'The smallest library on earth',
  'address' => 'Here and now',
  'catalog' => {
    'booksByIsbn' => {
      '978-1779501127' => {
        'isbn' => '978-1779501127',
        'title' => 'Watchmen',
        'publicationYear' => 1987,
        'authorIds' => ['alan-moore',
                      'dave-gibbons'],
                      'bookItems' => [
                        {
                          'id' => 'book-item-1',
                          'rackId' => 'rack-17',
                        },
                        {
                          'id' => 'book-item-2',
                          'rackId' => 'rack-17',
                        }
                      ]
      }
    },
    'authorsById' => {
      'alan-moore' => {
        'name' => 'Alan Moore',
        'bookIsbns' => ['978-1779501127']
      },
      'dave-gibbons' => {
        'name' => 'Dave Gibbons',
        'bookIsbns' => ['978-1779501127']
      }
    }
  },
  'userManagement' => {
    'librarians' => {
      'franck@gmail.com' => {
        'email' => 'franck@gmail.com',
        'encryptedPassword' => 'bXlwYXNzd29yZA=='
      }
    },
    'members' => {
      'samantha@gmail.com' => {
        'email' => 'samantha@gmail.com',
        'encryptedPassword' => 'c2VjcmV0',
        'isBlocked' => false,
      }
    }
  }
}.immutable!
