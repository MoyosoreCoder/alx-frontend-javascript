export default function cleanSet(set, startString) {
  let result = '';

  // Iterate over each value in the set
  set.forEach(value => {
    // Check if the value starts with startString
    if (value.startsWith(startString)) {
      // Append the substring after startString to the result with a '-'
      result += value.slice(startString.length) + '-';
    }
  });

  // Remove the trailing '-' and return the result
  return result.slice(0, -1);
}
