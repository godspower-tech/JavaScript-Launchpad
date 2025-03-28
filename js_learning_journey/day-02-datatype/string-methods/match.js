// match(): Searches a string for a match against a regular expression or substring.
// Syntax: string.match(substring) or string.match(regex)
// Returns: An array containing the matches, or null if no match is found.

let string = 'love';
let patternOne = /love/; // Matches "love" (case-sensitive).
let patternTwo = /love/gi; // Matches "love" globally (g) and case-insensitively (i).

let text = 'I love JavaScript. If you do not love JavaScript what else can you love.';

// Match the substring 'love' (first occurrence).
console.log(text.match('love'));
/*
Output:
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
*/

// Match the pattern /love/ globally and case-insensitively.
let pattern = /love/gi;
console.log(text.match(pattern)); // Output: ["love", "love", "love"]

// Extract numbers from text using regular expressions.
let txt = "In 2024, I run 30 Days of JavaScript. Now, in 2025 I'm super exited to start this challenge";
let regEx = /\d/g; // Matches any digit globally.
// \d: Matches any digit (0-9).
// g: Global search (finds all matches).
console.log(txt.match(regEx)); // Output: ["2", "0", "2", "4", "3", "0", "2", "0", "2", "5"]

// Extract sequences of one or more digits.
console.log(txt.match(/\d+/g)); // Output: ["2024", "30", "2025"]
// \d+: Matches one or more consecutive digits.
// g: Global search.