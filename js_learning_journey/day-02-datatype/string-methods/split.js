// split(): Splits a string into an array of substrings based on a specified separator.
// Syntax: string.split(separator)
// Returns: An array of substrings.

let string = 'Js Learning Journey';

// Split the string into an array (no separator provided, entire string becomes one element).
console.log(string.split()); // Output: ["Js Learning Journey"]

// Split the string into an array using space as the separator.
console.log(string.split(' ')); // Output: ["Js", "Learning", "Journey"]

let firstName = 'Asabeneh';

// Split the string into an array (no separator provided).
console.log(firstName.split()); // Output: ["Asabeneh"]

// Split the string into an array of individual characters.
console.log(firstName.split('')); // Output: ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland';

// Split the string into an array using comma as the separator.
console.log(countries.split(',')); // Output: ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]

// Split the string into an array using comma followed by a space as the separator.
console.log(countries.split(', ')); // Output: ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]