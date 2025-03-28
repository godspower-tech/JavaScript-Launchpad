// Math Object: Provides mathematical constants and functions.

// Math.PI: Represents the mathematical constant PI.
const PI = Math.PI;
console.log(PI); // Output: 3.141592653589793

// Math.round(x): Rounds x to the nearest integer.
console.log(Math.round(PI)); // Output: 3
console.log(Math.round(9.81)); // Output: 10

// Math.floor(x): Rounds x down to the nearest integer.
console.log(Math.floor(PI)); // Output: 3

// Math.ceil(x): Rounds x up to the nearest integer.
console.log(Math.ceil(PI)); // Output: 4

// Math.min(x1, x2, ..., xn): Returns the smallest of zero or more numbers.
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // Output: -5

// Math.max(x1, x2, ..., xn): Returns the largest of zero or more numbers.
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // Output: 20

// Math.random(): Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
const randNum = Math.random();
console.log(randNum);

// Generate a random integer between 0 and 10 (inclusive).
const num = Math.floor(Math.random() * 11);
console.log(num);

// Math.abs(x): Returns the absolute value of x.
console.log(Math.abs(-10)); // Output: 10

// Math.sqrt(x): Returns the square root of x.
console.log(Math.sqrt(100)); // Output: 10
console.log(Math.sqrt(2)); // Output: 1.4142135623730951

// Math.pow(x, y): Returns x to the power of y.
console.log(Math.pow(3, 2)); // Output: 9

// Math.E: Represents Euler's number (approximately 2.718).
console.log(Math.E); // Output: 2.718281828459045

// Math.log(x): Returns the natural logarithm (base E) of x.
console.log(Math.log(2)); // Output: 0.6931471805599453
console.log(Math.log(10)); // Output: 2.302585092994046

// Trigonometric Functions:

// Math.sin(x): Returns the sine of x (x in radians).
console.log(Math.sin(0)); // Output: 0
console.log(Math.sin(60)); // Output: -0.3048106211022167

// Math.cos(x): Returns the cosine of x (x in radians).
console.log(Math.cos(0)); // Output: 1
console.log(Math.cos(60)); // Output: -0.9524129804151563