/*Question 67:* Arithmetic with Mixed Types: Write a function that takes two parameters: a number and
 a string that represents a number (e.g., "5"). Return their sum as a number.

*Explain & TIP:* JavaScript allows arithmetic operations between mixed types. When you add a number to
 a string that looks like a number, JavaScript converts the string to a number for the operation.


function add(num: number, str: string) {
  return num + Number(str);
}
console.log(add(3, "10"));
*/
/*Question 68:* Multiplying Decimals: Create a function that accepts two decimal numbers and returns their
 product. Round the result to two decimal places.

*Explain & TIP:* When working with decimals in JavaScript, results can be unexpectedly long. Rounding can
help keep numbers manageable.
function multiply(num1: number, num2: number) {
  return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiply(2.4, 4.5));*/
/*Question 69:* Dividing and Finding the Remainder: Write a function that divides two numbers and returns both
 the quotient and the remainder. Use an object to return both values.

*Explain & TIP:* Division can give you a whole part (quotient) and a leftover part (remainder). Returning both
 in an object is a neat way to keep them together.*/
function divide(num1, num2) {
    return {
        quotient: Math.floor(num1 / num2),
        remainder: num1 % num2
    };
}
console.log(divide(43, 6));
