// @flow

export default function upsertArray<T>({
  itemToUpsert,
  indexToUpdate,
  array,
}: {
  itemToUpsert: T,
  array: Array<T>,
  indexToUpdate: number,
}): Array<T> {
  return indexToUpdate > -1
    ? // $FlowFixMe - Does not like Object.assign to be used on array.
      Object.assign([], array, {
        [indexToUpdate]: itemToUpsert,
      })
    : [...array, itemToUpsert];
}
