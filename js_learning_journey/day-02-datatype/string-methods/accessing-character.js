// Accessing characters in the 'JavaScript' string.

let string = 'JavaScript';

// Access the first character using bracket notation (index 0).
let firstLetter = string[0];
console.log(firstLetter); // Output: J

// Access the second character (index 1).
let secondLetter = string[1]; // Output: a

// Access the third character (index 2).
let thirdLetter = string[2];

// Access the last character using its index (9).
let lastLetter = string[9];
console.log(lastLetter); // Output: t

// Calculate the index of the last character using string length.
let lastIndex = string.length - 1;
console.log(lastIndex); // Output: 9

// Access the last character using the calculated last index.
console.log(string[lastIndex]); // Output: t

// Alternate way to access the last character.
console.log(string[string.length - 1]); // Output: t