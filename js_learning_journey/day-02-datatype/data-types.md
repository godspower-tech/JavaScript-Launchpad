# Data Types in JavaScript

## Introduction
In JavaScript, data types are a fundamental concept that defines the type of data a variable can hold. Understanding data types is crucial for effective programming, as it influences how data is manipulated and stored.

## Primitive Data Types
Primitive data types are the most basic data types in JavaScript. They include:

### Strings
Strings are sequences of characters used to represent text. They are immutable, meaning they cannot be changed directly.

```javascript
let greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!
```

### Numbers
Numbers represent both integer and floating-point values. JavaScript uses a double-precision 64-bit binary format for all numbers.

```javascript
let age = 30;
let pi = 3.14;
console.log(age, pi); // Output: 30 3.14
```

### Booleans
Booleans represent a logical entity and can have two values: `true` or `false`.

```javascript
let isJavaScriptFun = true;
console.log(isJavaScriptFun); // Output: true
```

## Non-Primitive Data Types
Non-primitive data types are more complex and include:

### Arrays
Arrays are ordered collections of values. They can hold multiple values in a single variable.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // Output: Banana
```

### Objects
Objects are collections of key-value pairs. They can store multiple values and more complex entities.

```javascript
let person = {
  name: "John",
  age: 25,
  country: "USA"
};
console.log(person.name); // Output: John
```

## Math Object
The Math object provides mathematical constants and functions. It is a built-in object in JavaScript.

### Common Methods:
- `Math.PI`: Represents the value of π.
- `Math.round(x)`: Rounds `x` to the nearest integer.
- `Math.random()`: Returns a pseudo-random number between 0 and 1.

```javascript
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.round(4.7)); // Output: 5
console.log(Math.random()); // Output: A random number between 0 and 1
```

## Conclusion
Understanding data types in JavaScript is essential for writing efficient and effective code. It helps developers manage data and perform operations accurately.
