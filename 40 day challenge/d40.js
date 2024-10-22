/*Question 118:* Write a loop that logs numbers from 1 to 10 to the console.

*Explain & TIP:* A for loop is a concise way to run a block of code a specific number of times.
 It's perfect for when you know exactly how many iterations you need.

||https://github.com/AsharibAli/discord-100-days-coding-challenge/tree/main/day-40/q118||*/
for (var i = 1; i <= 10; i++) {
    //   console.log(i);
}
/*Question 119:* Create a while loop that logs "Hello, World!" 5 times.

*Explain & TIP:* A while loop continues to run as long as its condition remains true. It’s ideal for when
 you want to repeat something until a certain condition changes.


||https://github.com/AsharibAli/discord-100-days-coding-challenge/tree/main/day-40/q119||*/
var count = 0;
while (count < 5) {
    // console.log("Hello, World!");
    count++;
}
// Initializes a counter
var counts = 0;
// This while loop runs until count is 5
while (counts < 5) {
    //   console.log("Hello, World!"); // Logs "Hello, World!"
    counts++; // Increments count by 1
}
// Repeats logging "Hello, World!" 5 times, once per loop iteration.
/*Question 120:* Use a for...of loop to iterate through an array of your favorite movies and log each one.

*Explain & TIP:* The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects
like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.

*Answer: Please try to do it yourself first!*

||https://github.com/AsharibAli/discord-100-days-coding-challenge/tree/main/day-40/q120||

🌟 Star GitHub Repository & take help from ChatGPT to understand the code, or elsewhere:
https://github.com/AsharibAli/discord-100-days-coding-challege*/
var newnameOfMovies = ["Ali baba", "Body Guard", "Singam"];
newnameOfMovies.forEach(function (movies) {
    // console.log(`Would like to see these Movie ${movies}`);    
});
// Defines an array of favorite movies
var favoriteMovies = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Prestige",
];
// Uses a for...of loop to iterate through favoriteMovies
for (var _i = 0, favoriteMovies_1 = favoriteMovies; _i < favoriteMovies_1.length; _i++) {
    var movie = favoriteMovies_1[_i];
    console.log(movie); // Logs each movie name
}
// Each movie in the array is logged to the console, one at a time.
