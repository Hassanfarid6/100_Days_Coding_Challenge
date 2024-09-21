/*Question 49:* Function with Rest Parameters: Write a function that takes a rest parameter representing
 multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

*Explain & TIP:* Rest parameters allow a function to accept an indefinite number of arguments as an array,
 providing a way to handle multiple inputs gracefully.*/
// Defines a function that accepts multiple hobbies as arguments
/* function loghobbies(...hobbies:string[]){
    // Loops through each hobby in the array
    hobbies.forEach(hobby =>{
                      
        // Logs a statement for each hobby

        console.log(`I enjoy "This hobby ${hobby}"`);
    })
}

// Calls the function with three hobbies

loghobbies('coding', 'Writing', 'searching')*/
/*Question 50:* Multiline Template Literals: Use template literals to create a multiline string that describes
 your ideal day. Include at least three different activities.

*Explain & TIP:* Template literals support multiline strings, making it easier to create readable text blocks
that incorporate variables and expressions.*/
var idealDay = "\nMy idral day involve:  1)  I wake up early in the morning, I offer namz.\n                       2)  I start coding at 8am.\n                       3)  At the end of the day i read a artile at Discord.";
console.log(idealDay);
/*Question 51:* Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle
and refactor it into an arrow function.

*Explain & TIP:* Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript,
making your code cleaner and more readable.*/
// Original function for calculating the area of a rectangle
function calculateArea(width, height) {
    return width * height;
}
// Refactored into an arrow function
var calculateAreaArrow = function (width, height) { return width * height; };
// Example usage of the arrow function
console.log(calculateAreaArrow(5, 7)); // Logs the area of the rectangle
