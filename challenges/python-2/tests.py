from unittest import TestCase, main

from data import library_data, watchmen_book_info, watchmen_from_db, watchmen_from_openlib
from challenges import *

class ChallengeTestCase(TestCase):
	def test_get_book_property(self):
		expected = [{'id': 'book-item-1', 'rackId': 'rack-17'}, {'id': 'book-item-2', 'rackId': 'rack-17'}]
		result = get_book_property(library_data, '978-1779501127', 'bookItems')
		self.assertEqual(result, expected)

	def test_book_info(self):
		expected = [{'title': 'Watchmen', 'isbn': '978-1779501127', 'authorNames': ['Alan Moore', 'Dave Gibbons']}]
		result = json.loads(book_info(library_data, 'watch'))
		self.assertEqual(result, expected)

	def test_block_member(self):
		expected = {'name': 'The smallest library on earth', 'address': 'Here and now', 'catalog': {'booksByIsbn': {'978-1779501127': {'isbn': '978-1779501127', 'title': 'Watchmen', 'publicationYear': 1987, 'authorIds': ['alan-moore', 'dave-gibbons'], 'bookItems': [{'id': 'book-item-1', 'rackId': 'rack-17'}, {'id': 'book-item-2', 'rackId': 'rack-17'}]}}, 'authorsById': {'alan-moore': {'name': 'Alan Moore', 'bookIsbns': ['978-1779501127']}, 'dave-gibbons': {'name': 'Dave Gibbons', 'bookIsbns': ['978-1779501127']}}}, 'userManagement': {'librarians': {'franck@gmail.com': {'email': 'franck@gmail.com', 'encryptedPassword': 'bXlwYXNzd29yZA=='}}, 'members': {'samantha@gmail.com': {'email': 'samantha@gmail.com', 'encryptedPassword': 'c2VjcmV0', 'isBlocked': True}}}}
		result = block_member(library_data, 'samantha@gmail.com')
		self.assertEqual(result, expected)

	def test_rename_keys(self):
		expected = {'bookTitle': 'Watchmen', 'bookIsbn': '978-1779501127', 'authorNames': ['Alan Moore', 'Dave Gibbons']}
		result = rename_keys(watchmen_book_info, {'title': 'bookTitle', 'isbn': 'bookIsbn'})
		self.assertEqual(result, expected)

	def test_merge_and_serialize(self):
		expected = {'isbn': '978-1779501127', 'title': 'Watchmen', 'publicationYear': 1987, 'authorIds': ['alan-moore', 'dave-gibbons'], 'bookItems': [{'id': 'book-item-1', 'rackId': 'rack-17', 'isLent': True}, {'id': 'book-item-2', 'rackId': 'rack-17', 'isLent': False}], 'publishers': ['DC Comics'], 'number_of_pages': 334, 'weight': '1.4 pounds', 'physical_format': 'Paperback', 'subjects': ['Graphic Novels', 'Comics & Graphic Novels', 'Fiction', 'Fantastic fiction'], 'isbn_13': ['9780930289232'], 'isbn_10': ['0930289234'], 'publish_date': 'April 1, 1995', 'physical_dimensions': '10.1 x 6.6 x 0.8 inches'}
		result = json.loads(merge_and_serialize(watchmen_from_db, watchmen_from_openlib))
		self.assertEqual(result, expected)

	def test_diff(self):
		# not sure how to test this, just do a string comparison for now
		expected = "[<root['userManagement']['members']['samantha@gmail.com']['isBlocked'] t1:False, t2:True>]"
		result = str(diff(library_data, block_member(library_data, 'samantha@gmail.com')))
		self.assertEqual(result, expected)

if __name__ == '__main__':
    main()
