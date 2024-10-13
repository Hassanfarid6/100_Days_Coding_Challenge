/*Question 88:* Rounding to the Nearest Integer: Write a function that takes a decimal number as input and
returnsthe number rounded to the nearest integer.

*Explain & TIP:* The Math.round() function is perfect for rounding decimals to the closest whole number.
It looks at the decimal part and decides whether to round up or down.*/
// function nuber(num: number){
//     return Math.round(num)
// }
// console.log(nuber(4.49));
// This function rounds a decimal number to the nearest whole number
function roundToNearestInteger(num) {
    return Math.round(num); // Rounds the number
}
// Example: Rounding a decimal
console.log(roundToNearestInteger(4.7)); // Outputs: 5
console.log(roundToNearestInteger(4.4)); // Outputs: 4
// This shows how the function rounds numbers either up or down.
/*Question 89:* Converting Strings to Numbers: Create a function that takes a string representing a number
 (like "123") and converts it into an actual number type.

*Explain & TIP:* parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like
 strings into real numbers, allowing you to perform mathematical operations on them.*/
//  function nubr(str: string){
//     return parseInt(str)
//     // return parseFloat(str)
//  }
// console.log(nubr("78.03"));
// This function changes a string into a number
function convertStringToNumber(str) {
    return parseFloat(str); // Converts the string to a number
}
// Example: Turning a numeric string into a real number
console.log(convertStringToNumber("123.45")); // Outputs: 123.45
console.log(convertStringToNumber("98")); // Outputs: 98
// We're taking strings that look like numbers and turning them into actual numbers.
/*Question 90:* Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN
(Not a Number) and return a boolean result.

*Explain & TIP:* isNaN() helps you figure out if something that's supposed to be a number didn't turn out
 to be a number. It's useful for validating inputs or results of calculations.*/
function vali(value) {
    return isNaN(value);
}
console.log(vali("22"));
