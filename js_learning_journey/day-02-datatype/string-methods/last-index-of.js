// lastIndexOf(): Finds the index of the last occurrence of a substring within a string.
// Syntax: string.lastIndexOf(substring)
// Returns: The index of the last occurrence of the substring, or -1 if not found.

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.';

// Find the last index of 'love'.
console.log(string.lastIndexOf('love')); // Output: 67

// Find the last index of 'you'.
console.log(string.lastIndexOf('you')); // Output: 63

// Find the last index of 'JavaScript'.
console.log(string.lastIndexOf('JavaScript')); // Output: 38