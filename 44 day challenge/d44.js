/*Question 130:** Explain how to export a function from one JavaScript file and import it into another file.

**Explain & TIP:** In modern JavaScript development, modules
allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.
*/
// console.log(add(52,5));
// In another file where you want to use the add function:
// console.log(add(2, 3)); // Outputs: 5
// Demonstrates importing the add function from mathFunctions.ts and using it.
/*********************************************************************************** */
/*Question 131:** Create two modules; one that exports a class, and another that imports the class and
  creates an instance.

**Explain & TIP:** Classes can be modularized in the same way as functions. This encapsulation and reusability
 is a cornerstone of modern JavaScript application structure.*/
import { Person } from "./person.js";
let person1 = new Person("Ahmed");
person1.greet();
/*Question 132:** Discuss the difference between default and named exports in JavaScript modules.

**Explain & TIP:** JavaScript provides two main types of exports: default and named. A module can have only
one default export, but multiple named exports. This flexibility supports various use cases in module design.
*/ 
