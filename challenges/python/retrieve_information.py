def get_book_property(library_data, isbn, field_name):
    return library_data['catalog']['booksByIsbn'][isbn][field_name]

if __name__ == '__main__':
    from library_data import data

    title = get_book_property(data, '978-1779501127', 'title')
    print(title)
