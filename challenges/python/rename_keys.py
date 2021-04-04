def rename_keys(m, key_map):
    return {key_to_use(key_map, k): v for (k, v) in m.items()}


def key_to_use(key_map, k):
    return key_map[k] if k in key_map else k


def show(original, updated):
    print(f'original:{original}')
    print(f'updated:{updated}\n')


if __name__ == '__main__':
    alan_moore = {
            'name': 'Alan Moore',
            'bookIsbns': ['978-1779501127']}

    updated_alan = rename_keys(alan_moore, {'bookIsbns': 'books'})
    show(alan_moore, updated_alan)


    book_item = {
            'id': 'book-item-1',
            'rackId': 'rack-17',
            'isLent': True}

    updated_book_item = rename_keys(book_item, {'rackId': 'id', 'id': 'bookItemId'})
    show(book_item, updated_book_item)
