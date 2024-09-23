/*Question 55:* Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list
where each number is twice its original value.

*Explain & TIP:* We can use a special tool to go through each number in our list and make a new list with
 each number doubled.

 let numbers = [1, 2, 3, 4, 5, 6]
let doubled = numbers.map(num => num * 2)
  
console.log(doubled);*/
/*Question 56:* Keep Only Strings: Given a mix of different types of items, make a new list that has only
 the words.

*Explain & TIP:* We can pick out just the words from a mixed bag of items, creating a list that includes only
those words.


// A mixed bag of items
let mixArray = [1, 2, "apple", 4, "banana", 6, "orange"]

// Picks out only the words
let StringArray = mixArray.filter(item => typeof item === "string")


// Shows the list of just words
console.log(StringArray);
// This line checks each item: if it's a word, it goes into the new list.*/
/*Question 57:* Find the Average Grade: Given a list of grades, calculate the average grade.

*Explain & TIP:* We can sum up all the grades and divide by the number of grades to find the average,
giving us an idea of how well someone did overall.*/
var grades = [70, 69, 63, 54, 81, 48];
var average = grades.reduce(function (a, b) { return a + b; }, 0) / grades.length;
console.log(average);
