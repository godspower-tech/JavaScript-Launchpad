// Arrays: Modifying array elements.

// Modifying an element in an array.
let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums); // Output: [10, 2, 3]

// Comparing arrays: Arrays are compared by reference, not by value.
let nums1 = [1, 2, 3];
let numbers = [1, 2, 3];
console.log(nums1 == numbers); // Output: false

// Objects: Comparing objects. Objects are also compared by reference.

// Comparing objects: Objects with the same properties and values are not considered equal.
let userOne = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
};
let userTwo = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
};
console.log(userOne == userTwo); // Output: false

// Assigning arrays: Assigning an array to another variable creates a reference.

// Assigning an array variable to another variable makes them point to the same array.
let numbersRef = nums; // numbersRef now references the same array as nums.
console.log(nums == numbersRef); // Output: true

// Assigning objects: Assigning an object to another variable creates a reference.

// Assigning an object variable to another variable makes them point to the same object.
let userThree = userOne; // userThree now references the same object as userOne.
console.log(userOne == userThree); // Output: true