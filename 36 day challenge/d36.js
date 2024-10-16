/*Question 106:* Determine if a given year is a leap year using comparison operators.

*Explain & TIP:* A leap year is divisible by 4 but not by 100 unless it's also divisible by 400.
 This rule helps align our calendar years with the Earth's orbital period.*/
// A leap is a year that has 366 days, as oppsed t0 the usual 365 days.
// This function checks if a year is a leap year
function isLeapYear(year) {
    // Checks the conditions for a leap year
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
// console.log(isLeapYear(2020)); // Outputs: true
// console.log(isLeapYear(1900)); // Outputs: false
// console.log(isLeapYear(2002)); // Outputs: false
// By using comparison operators, we can easily determine if a year is a leap year or not.
/*Question 107:* Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

*Explain & TIP:* Checking for divisibility involves using the modulo operator (%) to see if there's any remainder.
 A number divisible by both 2 and 3 without a remainder is also divisible by 6.*/
function divisible(num) {
    return (num % 2 === 0 && num % 3 === 0);
}
// console.log(divisible(12));
// console.log(divisible(14))
// console.log(divisible(6))
// This function checks if a number is divisible by both 2 and 3
function isDivisibleByTwoAndThree(number) {
    // Uses the modulo operator to check for no remainder
    return number % 2 === 0 && number % 3 === 0;
}
// console.log(isDivisibleByTwoAndThree(12)); // Outputs: true
// console.log(isDivisibleByTwoAndThree(14)); // Outputs: false
// Logical operators help us verify the number's divisibility by both 2 and 3.
/*Question 108:* Compare two strings to check if they are identical, ignoring case sensitivity.

*Explain & TIP:* To compare strings without considering their case (uppercase/lowercase),
you can convert both strings to the same case before comparing.*/
function lowerCase(str1, str2) {
    return str1.toLocaleLowerCase() === str2.toLocaleLowerCase();
}
console.log(lowerCase("ahmed", "Ahmed")); // true 
console.log(lowerCase("yasir", "Yasr")); // false
// This function compares two strings, ignoring case sensitivity
function areStringsEqualIgnoreCase(str1, str2) {
    // Converts both strings to lowercase before comparison
    return str1.toLowerCase() === str2.toLowerCase();
}
// console.log(areStringsEqualIgnoreCase("hello", "Hello")); // Outputs: true
// console.log(areStringsEqualIgnoreCase("world", "Word")); // Outputs: false
// We make both strings lowercase to ensure the comparison ignores case differences.
