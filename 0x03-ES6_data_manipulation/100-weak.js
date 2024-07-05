// Create and export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Initialize the count for the endpoint if it's not already tracked
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the query count for the endpoint
  let count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the count has reached or exceeded 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Return the updated count (optional, as per example usage)
  return count;
}
