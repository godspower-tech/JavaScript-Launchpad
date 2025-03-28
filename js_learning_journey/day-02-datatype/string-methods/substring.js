// substring(): Extracts a substring from a string, using starting and ending indices (ending index is exclusive).
// Syntax: string.substring(startIndex, endIndex)
// Returns: The extracted substring.

let string = 'JavaScript';

// Extract characters from index 0 up to (but not including) index 4.
console.log(string.substring(0, 4)); // Output: Java

// Extract characters from index 4 up to (but not including) index 10.
console.log(string.substring(4, 10)); // Output: Script

// Extract characters from index 4 to the end of the string.
console.log(string.substring(4)); // Output: Script

let country = 'Finland';

// Extract characters from index 0 up to (but not including) index 3.
console.log(country.substring(0, 3)); // Output: Fin

// Extract characters from index 3 up to (but not including) index 7.
console.log(country.substring(3, 7)); // Output: land

// Extract characters from index 3 to the end of the string.
console.log(country.substring(3)); // Output: land