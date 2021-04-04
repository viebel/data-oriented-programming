export function getKeys<T>(object: T): Array<keyof T> {
  return Object.keys(object) as Array<keyof T>;
}

export function isObject(object: unknown): object is {} | unknown[] {
  return typeof object === 'object';
}