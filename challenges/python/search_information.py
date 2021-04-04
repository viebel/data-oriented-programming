import json

def book_info(library_data, search_string):
    ss = search_string.lower()
    books = library_data['catalog']['booksByIsbn']

    results = [{
        'title':        b['title'],
        'isbn':         b['isbn'],
        'authorNames':  author_names(library_data, b['authorIds'])}
        for b in books.values()
        if ss in b['title'].lower()]

    return json.dumps(results)


def author_names(library_data, author_ids):
    authors = library_data['catalog']['authorsById']

    return [author['name']
            for (author_id, author) in authors.items()
            if author_id in author_ids]


if __name__ == '__main__':
    from library_data import data

    print(book_info(data, 'watCH'))
