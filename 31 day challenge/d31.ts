                                /*Day 31 Challenge: Start Coding!* 

*Question 91:* Create an array of your three favorite fruits and add a new fruit to the end of the array.

*Explain & TIP:* Adding elements to an array can be easily done using the .push() method. It allows you to add
 new items to the end of an array.*/

// let fruits = ["banana", "orenge", "cheqoo"]
// fruits.push("apple")

// console.log(fruits);


// Defines an array with three favorite fruits
// let favoriteFruits: string[] = ["Apple", "Banana", "Cherry"];
// favoriteFruits.push("Mango"); // Adds "Mango" to the end of the array

// console.log(favoriteFruits); // Outputs: ['Apple', 'Banana', 'Cherry', 'Mango']
// This line adds a new fruit to our list of favorites.


/*Question 92:* Write a function to remove the last element from an array and return the removed element.

*Explain & TIP:* The .pop() method removes the last element from an array and returns that element. This can
 be useful when you need to work with the removed item.*/


//  let array= ["ali", "hassan", "majid"]

//  array.pop()
//  console.log(array);
 
// This function removes the last element from an array and returns it
function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop(); // Removes and returns the last element of the array
}

// Example: Removing the last fruit from the array
const fruit: string[] = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruit)); // Outputs: 'Cherry'
// console.log(fruit); // Outputs: ['Apple', 'Banana']
// Here, we take out the last fruit and show the updated list.



/*Question 93:* Find the index of "Banana" in an array of fruits and replace it with "Mango".

*Explain & TIP:* To replace an item in an array, find its index using .indexOf(), then use that index to set a
 new value with array bracket notation.*/


// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf("banana"); // Finds the index of "Banana"
    if (index !== -1) fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}

// Example: Replacing "Banana" in the array
const fruits: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ['Apple', 'Mango', 'Cherry']
// We're swapping "Banana" for "Mango" in our fruit list.


