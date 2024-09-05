// /* Question 2: Store a person’s name in a variable and print a message to them, 
//             like “Hello Asharib, would you like to learn some TypeScript today?”
// *Explain & TIP:* First, make a variable to save a name. Then, use this name to say hello.
//                   Variables keep data you can use later


let name1: string = "hassan ali"
console.log(`Hello ${name1}, Would you like to learn some typeSript today?`) // This shows the message;
  

/*Question 3:* Name Cases: Store a person’s name in a variable, and then print that person’s
             name in lowercase, uppercase, and titlecase.

*Explain & TIP:* Save a name in a variable. Show it in all small letters,
             ALL BIG LETTERS, and First Letter Big for each word. This helps learn how to change text style.*/

    let name: string = "Muhammad Ahmed"
    
    console.log(name.toLowerCase());
    console.log(name.toUpperCase());
    console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

    
    
    