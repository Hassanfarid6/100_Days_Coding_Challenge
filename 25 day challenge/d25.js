/*Question 73:* Assigning and Updating Variables: Create a function where you declare a variable using let
 and assign an initial value. Then, update its value within the same function and log both the initial and
 updated values.

*Explain & TIP:* In JavaScript, you can assign a value to a variable with = and later update it as needed.
This is fundamental for keeping track of changing data within your programs.*/
function num() {
    var num1 = 5;
    num1 = 10;
    console.log(num1);
}
num();
/// This function shows how to assign and update variable values
function updateVariable() {
    var number = 10; // Initially assigns the value 10
    console.log("Initial value:", number); // Logs the initial value
    number = 20; // Updates the value to 20
    console.log("Updated value:", number); // Logs the updated value
}
updateVariable();
// We assign a value to a variable and then update it, showing how values can change.
/*Question 74:* Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables
 a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

*Explain & TIP:* Swapping variables is a common task. You can use a temporary variable to hold one value while
 you swap them around. It's like juggling where you temporarily place one ball in a basket to free up your hand.*/
function valueswap() {
    var a = 4, b = 7;
    console.log('Before swap: a = ', a, 'b =', b);
    var tep = a;
    a = b;
    b = tep;
    console.log('After swap: a =', a, 'b =', b);
}
valueswap();
// This function swaps the values of two variables
// function swapValues() {
//     let a = 5, b = 10; // Initially, a is 5 and b is 10
//     console.log("Before swap: a =", a, "b =", b);
//     let temp = a; // Temporarily stores the value of a
//     a = b; // Sets a to b's value
//     b = temp; // Sets b to a's original value stored in temp
//     console.log("After swap: a =", a, "b =", b); // Logs the swapped values
// }
// swapValues();
// We use a temporary variable to hold one value while we swap them, like a magic trick!
/*Question 75:* Compound Assignment Operators: Use compound assignment operators to simplify arithmetic
operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division)
 on x using compound operators.

*Explain & TIP:* Compound assignment operators combine an arithmetic operation with assignment, making your
code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.*/
function num1() {
    var x = 2;
    console.log('before update: x =', x);
    x += 3;
    console.log('After  Addition: x =', x);
    x -= 2;
    console.log('After  Subtraction: x =', x);
    x *= 2;
    console.log('After  Multiplication: x =', x);
    x /= 2;
    console.log('After  Division: x =', x);
}
num1();
// This function uses compound assignment operators for different operations
// function useC           
// We simplify arithmetic operations on x using compound assignment operators, like a shortcut.
