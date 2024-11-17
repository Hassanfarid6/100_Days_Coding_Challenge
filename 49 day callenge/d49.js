/*Question 145:** Create a function that accepts a callback and invokes it with some arguments.

**Explain & TIP:** Callbacks are functions passed as arguments to another function. This design pattern is
very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a
function with custom actions.*/
// This function accepts a callback function and invokes it with given arguments
function executeCallback(callback, arg3, arg4) {
    callback(arg3, arg4); // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
var add = function (a, b) {
    console.log(a + b); // Outputs the sum of a and b
};
//   executeCallback(add, 5, 3); // Outputs: 8
// Demonstrates invoking a callback function with arguments to perform an addition.
/********************************************************************************************************** */
/*Question 146:** Show an example of a callback function used to filter an array of numbers.

Explain & TIP:** The `.filter()` method creates a new array with all elements that pass the test implemented by
the provided function. This method is commonly used to search through an array and create a subset of it based
on certain criteria.*/
// This array of numbers will be filtered
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a callback function to filter out numbers greater than 5
var filteredNumbers = numbers.filter(function (number) { return number > 5; });
console.log(filteredNumbers); // Outputs: [6, 7, 8, 9, 10]
// The callback function here checks each number, and .filter() creates a new array with numbers that meet 
// the criteria.
/********************************************************************************************************** */
/*Question 147:** Explain how to handle errors in a callback pattern.

**Explain & TIP:** Handling errors in a callback pattern often involves passing an error as the first argument to the callback. This convention allows the callback function to check for errors before proceeding with its execution.

*/
