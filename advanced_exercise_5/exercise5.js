// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const newArray = [];

array.forEach( user => {
  let {username} = user;
  username = username + "!";
  newArray.push(username);
  
})

console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map(user => {
  let {username} = user;
  return username + "?";
});

console.log(mapArray);

//Filter the array to only include users who are on team: red

const filteredArray = array.filter(user => {
  return user.team === "red";
});

console.log(filteredArray);

//Find out the total score of all users using reduce

const reducedArray = array.reduce((acc, user) => {
  return acc + user.score;
}, 0);

console.log(reducedArray);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const updatedArray = array.map(user => {
  user.items = user.items.map(item => {
    item = item + "!";
    return item;
  })
  return user;
});