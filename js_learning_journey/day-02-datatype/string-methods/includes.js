// includes(): Checks if a string contains a specified substring.
// Syntax: string.includes(substring)
// Returns: A boolean (true or false) indicating whether the substring is found.

let string = 'Js Learning Journey';

// Check if the string includes 'Js'.
console.log(string.includes('Js')); // Output: true

// Check if the string includes 'js'.
console.log(string.includes('js')); // Output: false

// Check if the string includes 'Journey'.
console.log(string.includes('Journey')); // Output: true

// Check if the string includes 'journey'.
console.log(string.includes('journey')); // Output: false

// Check if the string includes 'learning'.
console.log(string.includes('learning')); // Output: false

// Check if the string includes 'Learning'.
console.log(string.includes('Learning')); // Output: true

let country = 'Finland';

// Check if the string includes 'fin'.
console.log(country.includes('fin')); // Output: false

// Check if the string includes 'Fin'.
console.log(country.includes('Fin')); // Output: true

// Check if the string includes 'land'.
console.log(country.includes('land')); // Output: true

// Check if the string includes 'Land'.
console.log(country.includes('Land')); // Output: false