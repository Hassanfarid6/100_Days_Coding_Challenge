/*Question 103:* Write a function that returns a random boolean value, true or false.

*Explain & TIP:* Generating a random boolean is a simple but useful trick. You can use Math.random() and
check if it's above or below 0.5 to decide between true or false.*/
function guess() {
    return Math.random();
}
if (guess() > 0.5) {
    console.log(true);
}
else {
    console.log(false);
}
//  console.log(guess());
// This function returns a random boolean value
function getRandomBoolean() {
    return Math.random() > 0.5; // Returns true if the random number is greater than 0.5
}
// console.log(getRandomBoolean()); // Outputs either true or false randomly
// By comparing a random number to 0.5, we effectively get a true or false value randomly.
/*Question 104:* Create a function that generates a random hexadecimal color code.

*Explain & TIP:* Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits.
 You can generate each digit randomly and concatenate them into a full color code.*/
// This function generates a random hexadecimal color code
function getRandomHexColor() {
    var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "u");
    return color; // Returns the random color code
}
console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.
