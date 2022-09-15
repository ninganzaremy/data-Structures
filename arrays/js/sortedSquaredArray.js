//Write a function that takes in a non-empty array of integers and returns new array with the squares of the original integers sorted in ascending order
const sortedSquaredArray = (array) => array.map((val) => val * val).sort((b, a) => a - b);

let array = [-4, 1, 6, 2, -5];
console.log(sortedSquaredArray(array));
