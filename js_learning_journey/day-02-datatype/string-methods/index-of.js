// indexOf(): Finds the index of the first occurrence of a substring within a string.
// Syntax: string.indexOf(substring)
// Returns: The index of the first occurrence of the substring, or -1 if not found.

let string = 'Js Learning Journey';

// Find the index of 'L'.
console.log(string.indexOf('L')); // Output: 3

// Find the index of 'Learning'.
console.log(string.indexOf('Learning')); // Output: 3

// Find the index of 'learning' (not found).
console.log(string.indexOf('learning')); // Output: -1

// Find the index of 'a'.
console.log(string.indexOf('a')); // Output: 5

// Find the index of 'Journey'.
console.log(string.indexOf('Journey')); // Output: 12

// Find the index of 'ney'.
console.log(string.indexOf('ney')); // Output: 16

// Find the index of 'Ney' (not found).
console.log(string.indexOf('Ney')); // Output: -1