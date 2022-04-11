function valueInArray(number, array) {
  return new Set(array).has(number);
}
export default function hasValuesFromArray(setArray, array) {
  return array.every((number) => valueInArray(number, [...setArray]));
}
