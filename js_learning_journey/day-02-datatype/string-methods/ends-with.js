// endsWith(): Checks if a string ends with a specified substring.
// Syntax: string.endsWith(substring)
// Returns: A boolean (true or false) indicating whether the string ends with the substring.

let string = 'Love is the best to in this world';

// Check if the string ends with 'world'.
console.log(string.endsWith('world')); // Output: true

// Check if the string ends with 'love'.
console.log(string.endsWith('love')); // Output: false

// Check if the string ends with 'in this world'.
console.log(string.endsWith('in this world')); // Output: true

let country = 'Finland';

// Check if the string ends with 'land'.
console.log(country.endsWith('land')); // Output: true

// Check if the string ends with 'fin'.
console.log(country.endsWith('fin')); // Output: false

// Check if the string ends with 'Fin'.
console.log(country.endsWith('Fin')); // Output: false