// startsWith(): Checks if a string begins with a specified substring.
// Syntax: string.startsWith(substring)
// Returns: A boolean (true or false) indicating whether the string starts with the substring.

let string = 'Love is the best in this world';

// Check if the string starts with 'Love'.
console.log(string.startsWith('Love')); // Output: true

// Check if the string starts with 'love'.
console.log(string.startsWith('love')); // Output: false

// Check if the string starts with 'world'.
console.log(string.startsWith('world')); // Output: false

let country = 'Finland';

// Check if the string starts with 'Fin'.
console.log(country.startsWith('Fin')); // Output: true

// Check if the string starts with 'fin'.
console.log(country.startsWith('fin')); // Output: false

// Check if the string starts with 'land'.
console.log(country.startsWith('land')); // Output: false