import {getKeys} from '../../../.private/utils';

export type RenameMap<T> = Partial<Record<keyof T, string>>;

export type Renamed<T, M extends RenameMap<T>> =
  { [K in keyof (M | T) as `${M[K]}`]: T[K] }

function renameKeys<T, M extends RenameMap<T>>(object: T, keyMap: M): Renamed<T, M> & Omit<T, keyof M> {
  const result: any = {...object};
  for (const key of getKeys(keyMap)) {
    result[keyMap[key]] = object[key as keyof T];
    delete result[key];
  }
  return result;
}

describe('Challenge 4 - Rename keys in a data entity', () => {
  test('Rename book "isbns" to "books"', () => {
    const alanMoore = {
      'name': 'Alan Moore',
      'bookIsbns': ['978-1779501127']
    };

    const renamed = renameKeys(alanMoore, {bookIsbns: 'books'} as const);

    expect(renamed).toEqual({
      name: alanMoore.name,
      books: alanMoore.bookIsbns
    });

    // The result is statically correctly typed:
    const nameIsStillThere: string = renamed.name;
    const booksIsArrayOfString: string[] = renamed.books;

    // @ts-expect-error
    const booksIsNotSomeOtherType: number = renamed.books;

    // @ts-expect-error
    const bookIsbnsIsNoMore = renamed.bookIsbns;

    // You can't call renameKeys with an invalid keyMap:
    // @ts-expect-error
    const doesNotCompile = renameKeys(alanMoore, {unknownKey: 'books'} as const);
  });
});