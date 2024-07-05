export default function cleanSet(set, startString) {
  const emptyString = '';
  const array = [];
  if (startString && typeof startString === 'string') {
    for (const element of set) {
      if (element && element.startsWith(startString)) {
        array.push(element.slice(startString.length));
      }
    }
    return array.join('-');
  }
  return emptyString;
}
