load 'library-data.rb'

def author_names(catalog_data, book)
  book['authorIds'].map do |author_id|
    catalog_data.dig('authorsById', author_id, 'name')
  end
end

def book_info(catalog_data, book)
  {
    'title'       => book['title'],
    'isbn'        => book['isbn'],
    'authorNames' => author_names(catalog_data, book)
  }
end

def search_books_by_title(library_data, query)
  catalog_data   = library_data['catalog']
  all_books      = catalog_data['booksByIsbn']
  matching_books = all_books.select do |_, book|
    book['title'].downcase.include?(query.downcase)
  end
  matching_books.map { |_, book| book_info(catalog_data, book) }.to_json
end

pp search_books_by_title($library_data, 'watCH')
