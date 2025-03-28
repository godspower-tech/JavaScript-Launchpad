// String Concatenation: Combining strings.

// Declaring variables of different data types.
let space = ' ';
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
let country = 'Finland';
let city = 'Helsinki';
let language = 'JavaScript';
let job = 'teacher';
let age = 25; // added age variable to match the example.

// Concatenating strings using the addition operator (+).
let fullName = firstName + space + lastName; // Merging two strings together.
console.log(fullName); // Output: Asabeneh Yetayeh

// Concatenating strings using the addition operator (ES5 style).
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country;
console.log(personInfoOne); // Output: Asabeneh Yetayeh. I am 25. I live in Finland

// Concatenation: Template Literals (Template Strings) (ES6 style).
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; // String interpolation.
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`; // String interpolation.

console.log(personInfoTwo); // Output: I am Asabeneh Yetayeh. I am 25. I live in Finland.
console.log(personInfoThree); // Output: I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.