// charCodeAt(): Retrieves the Unicode (UTF-16) character code (ASCII equivalent for basic characters)
// of the character at a specified index within a string.
// Syntax: string.charCodeAt(index)

let string = '30 Days Of JavaScript';

// Get the character code of the character at index 3 ('D').
console.log(string.charCodeAt(3)); // Output: 68 (ASCII/UTF-16 code for 'D')

let lastIndex = string.length - 1;

// Get the character code of the character at the last index ('t').
console.log(string.charCodeAt(lastIndex)); // Output: 116 (ASCII/UTF-16 code for 't')