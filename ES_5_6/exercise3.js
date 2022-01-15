// change everything below to the newer Javascript!

// task #1 let + const:
let a = 'test';
const b = true;
const c = 789;
a = 'test2';

// task #2 Destructuring:
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

// my updates for #2:

const {firstName, lastName, age, eyeColor} = person;

// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = { a, b, c};


// #3 Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// my updates for #3
const message = `Hello ${firstName}! Have I met you before? I think we met in ${city} last summer, no?`;

// #4:
// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// my upates for #4:

const isValidAge = (age = 10) => age;

// #5 Arrow functions:
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// my updates for #5:

const whereAmI = (username, location) => {
    if (username && location){
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}