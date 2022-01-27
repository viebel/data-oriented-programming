import json
from deepdiff import DeepDiff
from mergedeep import merge
from pydash import py_
from toolz.dicttoolz import assoc_in


## Challenge #1: Retrieve a piece of information
# Write a function named `getBookProperty` that receives and ISBN and a field name
# and returns the value of the field for the book with the given ISBN
def get_book_property(library_data: object, isbn: str, field_name: str) -> object:
	return py_.get(library_data, ['catalog', 'booksByIsbn', isbn, field_name])


## Challenge #2: Search information
# Write a function named `bookInfo` that receives a string and returns a JSON string that contains book information
# about the books whose title contains the given string, in a case insensitive way. 
# Book information is made of: title, isbn, author full names.
# Remark: You are not allowed to extract author names from author ids. Assume that author ids are opaque strings.
def book_info(library_data: object, query: str) -> str:
	def author_names(author_ids: list):
		return [py_.get(library_data, ['catalog', 'authorsById', author_id, 'name']) for author_id in author_ids]
	def return_values(book: object):
		return {
			'title': book['title'],
			'isbn': book['isbn'],
			'authorNames': author_names(book['authorIds'])
		}

	books = library_data['catalog']['booksByIsbn'].values()
	matching_books = filter(lambda book: query.lower() in book['title'].lower(), books)
	return json.dumps(list(map(return_values, matching_books)))


## Challenge #3: Add a piece of information
# Write a function named `blockMember` that receives an email address and returns a new version
# of library data without altering the original version, where the user with the given email is blocked.
def block_member(library_data: object, email: str) -> object:
	return assoc_in(library_data, ['userManagement', 'members', email, 'isBlocked'], True)


## Challenge #4: Rename keys in a data entity
# Write a function named `renameKeys` that receives a data entity and a key mappings and returns a new data entity, 
# without altering the original entity, where the fields are renamed according to the key mappings
def rename_keys(data: object, key_map: object) -> object:
	return {key_map.get(k, k): v for k, v in data.items()}


## Challenge #5: Merge pieces of information
# Write a function named `mergeAndSerialize` that receives two pieces of book information, one from the database
# and one from an external service like [Open Library Books API](https://openlibrary.org/dev/docs/api/books)
# and returns a JSON string with information from both sources.
def merge_and_serialize(d1: dict, d2: dict) -> str:
	return json.dumps(merge(d1, d2))


## Challenge #6: Compare versions of data
# Write a function named `diff` that receives two versions of library data and returns an object that contains 
# the diff between the two versions, in the format of your choice.
def diff(old_data: object, new_data: object) -> object:
	return DeepDiff(old_data, new_data, view='tree')['values_changed']
