/*Question 76:* Function Parameters and Return Values: Create a function that takes two numbers as parameters,
adds them together, and returns the result. Show how you can call this function and log the result.

*Explain & TIP:* Functions can take inputs (parameters) and give back an output (return value). They're like
personal assistants that do a specific task for you and report back with the results.*/
function add(a, b) {
    return a + b;
}
var result = add(2, 3);
console.log(result);
// This function adds two numbers and returns the result
function addNumbers(num1, num2) {
    // Calculates the sum of num1 and num2
    return num1 + num2;
}
// Calling the function with two numbers and logging the result
console.log(addNumbers(5, 7)); // Outputs 12
// Here, we ask our function to add 5 and 7, and it tells us the answer is 12.
/*Question 77:* Default Parameters: Write a function that greets a user. It should take the user's name as a
 parameter and say hello. If no name is given, it should greet an anonymous user.

*Explain & TIP:* Default parameters allow your functions to have preset values for their parameters. These
values are used if no other value is provided, making functions more flexible.*/
function gret(name) {
    if (name === void 0) { name = "anonymous!"; }
    console.log("Hello " + name);
}
gret("ali");
gret();
// This function greets a user by name, or greets an anonymous user if no name is provided
function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    // Says hello to the given name or to an anonymous user
    console.log("Hello, ".concat(name, "!"));
}
// Trying the function with a name and without
greetUser("Alice"); // Outputs: Hello, Alice!
greetUser(); // Outputs: Hello, anonymous!
// We see how our function can say hello to someone by name, or just say hello if we don't know the name.
