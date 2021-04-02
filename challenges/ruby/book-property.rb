load 'library-data.rb'

def get_book_property(library_data, isbn, field_name)
  information_path = ['catalog', 'booksByIsbn', isbn, field_name]
  library_data.dig(*information_path)
end

pp get_book_property($library_data, '978-1779501127', 'title')
