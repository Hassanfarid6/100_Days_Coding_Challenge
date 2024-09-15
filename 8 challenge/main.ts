/*Question 22:* Intentional Error: Try to produce an array index error in one of your programs.
    Correct the error before finishing.

    *Explain & TIP:* Array index errors happen when you try to access a position in the array that
    doesn’t exist. Experimenting with this helps you understand array boundaries.*/

    let friends: string[] = ["AHmed_Ali", "Abdullah", "Ahmed_Nawaz"]
//     console.log(friends[0])    // output Ahmed_ALi
//     console.log(friends[1])    // output Abdullah
//     console.log(friends[2])   // output Ahmed_ Namwaz
//     console.log(friends[3])   // Error
                                    // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
    friends[2] = "Ahmed_Nawaz";     // Correcting the error by accessing a valid index.

//__________________________________________________________________________________________________________
/*Question 23:* Conditional Tests: Write a series of conditional tests.
     Predict the results of each test.

     *Explain & TIP:* Conditional tests check if something is true or false. Writing different tests
      helps you understand how conditions work in programming.*/

       let car = "mira"
       console.log("Is car == 'mira'? I predi ct ture.")
       console.log(car == 'mira');
       console.log("Is car == 'toyota'? I predict false.");
       console.log(car == 'toyota'); 

//____________________________________________________________________________________________________________
/*Question 24:* More Conditional Tests: Expand your conditional tests to cover
     a wider range of comparisons.

    *Explain & TIP:* Experiment with different types of conditions to see how they work.
     This builds a deeper understanding of logic in programming.*/

// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
// console.log("apple" == "Apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
