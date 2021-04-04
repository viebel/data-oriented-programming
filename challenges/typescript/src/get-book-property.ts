import {Book, Library} from './data-model';
import {libraryData} from './test-data';

function getBookProperty<K extends keyof Book>(libraryData: Library, isbn: string, fieldName: K) {
  return libraryData.catalog.booksByIsbn[isbn][fieldName];
}

describe('Challenge 1 - Retrieve a piece of information', () => {
  test('fieldName can only contain valid field names of an Book', () => {
    const itCompiles = getBookProperty(libraryData, '978-1779501127', 'title');

    // @ts-expect-error
    const itDoesNotCompile = getBookProperty(libraryData, '978-1779501127', 'unknownField');
  });


  test('getting the title returns a statically types string', () => {
    const title = getBookProperty(libraryData, '978-1779501127', 'title');

    const titleIsString: string = title;

    // @ts-expect-error
    const titleIsNoNumber: number = title;

    expect(title).toEqual('Watchmen');
  });

  test('getting the publicationYear returns a statically typed number', () => {
    const publicationYear = getBookProperty(libraryData, '978-1779501127', 'publicationYear');

    const publicationYearIsNumber: number = publicationYear;

    // @ts-expect-error
    const publicationYearIsNoString: string = publicationYear;

    expect(publicationYear).toEqual(1987);
  });
});
