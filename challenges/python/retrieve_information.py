def get_book_property(library_data, isbn, field_name):
    return __get(library_data, ['catalog', 'booksByIsbn', isbn, field_name])


def __get(m, ks):
    return m[ks[0]] if len(ks) == 1 else __get(m[ks[0]], ks[1:])


if __name__ == '__main__':
    from library_data import data

    title = get_book_property(data, '978-1779501127', 'title')
    print(title)
