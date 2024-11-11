                                    /*Day 45 Challenge: Start Coding!** 🚀

**Question 133:** Write a JavaScript object and convert it into a JSON string.

**Explain & TIP:** JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for 
humans to read and write and for machines to parse and generate. Converting a JavaScript object into a JSON 
string can be done using `JSON.stringify()`.
*/


// Defines a JavaScript object
const person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
  };
  
  // Converts the object into a JSON string
  const jsonString = JSON.stringify(person);
  
//   console.log(jsonString); // Outputs: {"name":"Alice","age":30,"city":"Wonderland"}
  // Demonstrates converting an object to a JSON string, making it easy to store or transmit.


/******************************************************************************************* */

/*Question 134:** Take a JSON string and parse it into a JavaScript object.

**Explain & TIP:** `JSON.parse()` is used to convert a JSON string into a JavaScript object. This is 
particularly useful when dealing with data received as JSON from a web server or API.*/




// Defines a JSON string
const jsonString1 = '{"name":"Alice","age":30,"city":"Wonderland"}';

// Parses the JSON string back into a JavaScript object
const person1 = JSON.parse(jsonString1);

// console.log(person1); // Outputs the original object
// This snippet shows how to take a JSON string and convert it back into a JavaScript object.


/******************************************************************************************* */
 
/*Question 135:** Explain how you can format a JSON string with proper indentation for readability.

**Explain & TIP:** `JSON.stringify()` can take additional parameters to format the resulting JSON string. 
Adding an indent level as the third argument beautifies the output, making it more readable.*/




 // Reusing the person object from Question 133
const person2 = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
  };
  
  // Converts the object into a JSON string with indentation
  const jsonString2 = JSON.stringify(person2, null, 2); // The '2' specifies the number of spaces to use as white space
  
  console.log(jsonString2);
  /* Outputs:
  {
    "name": "Alice",
    "age": 30,
    "city": "Wonderland"
  }
  */
  // Shows how adding indentation to the JSON string makes it easier to read.















