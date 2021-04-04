import {Library} from './data-model';
import {bookInfo} from '../../../src/do/my-code/chapter3/search';
import {libraryData} from './test-data';

import {Book, Catalog, Library} from '../../data-model';

function authorNames(catalogData: Catalog, book: Book) {
  return book.authorIds.map(authorId => catalogData.authorsById[authorId].name);
}

export function bookInfo(catalogData: Catalog, book: Book) {
  return {
    title: book.title,
    isbn: book.isbn,
    authorNames: authorNames(catalogData, book)
  };
}

function searchBooksByTitle(catalogData: Catalog, query: string) {
  return Object.values(catalogData.booksByIsbn)
    .filter(book => book.title.includes(query))
    .map(book => bookInfo(catalogData, book));
}

export function searchBooksByTitleJSON(libraryData: Library, query: string) {
  return JSON.stringify(searchBooksByTitle(libraryData.catalog, query));
}

function searchBooksByTitle(library: Library, query: string) {
  const matchingBooks = Object.values(library.catalog.booksByIsbn)
    .filter(book => book.title.toLowerCase().includes(query.toLowerCase()))
    .map(book => bookInfo(library.catalog, book));
  return JSON.stringify(matchingBooks);
}

describe('Challenge 2 - Search information', () => {
  test('searchBooksByTitleJSON should return the correct result', () => {
    const result = searchBooksByTitle(libraryData, 'watCH');
    expect(JSON.parse(result)).toEqual([{
      'title': 'Watchmen',
      'isbn': '978-1779501127',
      'authorNames': ['Alan Moore', 'Dave Gibbons']
    }]);
  });
});