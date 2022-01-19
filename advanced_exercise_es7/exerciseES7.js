// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes("John"); // false

dragons.includes("Tim"); // true

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(names => names.includes("andy")); // ['Sandy']

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const power100 = num => num**100;

power100(2); // 1.2676506002282294e+30
