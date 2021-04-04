import {libraryData} from './test-data';
import {getKeys, isObject} from '../utils';

export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> };
export const NO_CHANGE = Symbol('NO_CHANGE');

export const DataDiff = {
  diff<T>(data1: T, data2: T): DeepPartial<T> | typeof NO_CHANGE {
    if (isObject(data1) && isObject(data2)) {
      return DataDiff.diffObject(data1, data2);
    } else if (data1 !== data2) {
      return data2;
    } else {
      return NO_CHANGE;
    }
  },

  diffObject<T>(data1: T, data2: T): DeepPartial<T> {
    const diff: DeepPartial<T> = Array.isArray(data1) && Array.isArray(data2)
      ? new Array(Math.max(data1.length, data2.length))
      : {};

    if (data1 === data2) {
      return diff;
    }

    const keys = new Set([...getKeys(data1), ...getKeys(data2)]);
    for (const key of keys) {
      const childResult = DataDiff.diff(data1[key], data2[key]);
      if (childResult !== NO_CHANGE && !isEmptyObject(childResult)) {
        diff[key] = childResult;
      }
    }

    return diff;
  }
}

function isEmptyObject(x: unknown) {
  return isObject(x) && isEmpty(x);
}

function isEmpty<T extends {} | unknown[]>(x: T): boolean {
  return Array.isArray(x) ? x.length === 0 : Object.keys(x).length === 0;
}

describe('Challenge 6 - Compare versions of data', () => {
  test('diff returns empty array for equal objects', () => {
    const diff = DataDiff.diff(libraryData, libraryData)
    expect(diff).toEqual({});
  });
});