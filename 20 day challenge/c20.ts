/*Question 58:* Average Score Calculator: Write a simple program that can take lots of scores and find their 
average.

*Explain & TIP:* This program can handle any number of scores you give it, and it tells you the average score.
 Handy for seeing how well you did overall!.


// This program calculates the average of all scores given
function averageScore(...scores: number[]): number {
    // Adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

// Example: finding the average of four scores
console.log(averageScore(80, 90, 100, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.*/


/*Question 59:* Add a Special Number: Make a program that creates custom adders. These adders can add a 
specific number to any other number you give them later.

*Explain & TIP:* Imagine you have a magic box that can add a specific number to any number you put in it.
 This program makes that magic box for you!*/


// This program creates a custom adder that adds a specific number to any other number
 
function add(num: number): (otherNum: number) => number {
    // This is the magic box. It takes a number and adds your special number to it
    return (otherNum: number) => num + otherNum;
}
// Example: creating a custom adder that adds 5 to any number
 

// Making a magic box that adds 5
let addIT = add(5);
console.log(addIT(80)); // If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.


/*Question 60:* Self-Running User Profile: Create a quick, self-setup profile for a user that can tell
 you the user's name and age.

*Explain & TIP:* This is like a self-building lego set. Once you start it, it builds a user profile by 
itself and can tell you about the user.*/


// This profile sets itself up and can share info about the user
let userProfile = (function() {
    // The user's details are kept inside
    let name = "John";
    let age = 30;

    // This part shares the user's details
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
