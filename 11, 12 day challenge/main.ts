/*Question 31:* No Users: Ensure your user list isn’t empty.

*Explain & TIP:* Before greeting users, check if there are any. This teaches you to handle empty arrays.

let userName: string[] = []

if (userName.length == 0){
    console.log('We need to find some users!')
}
else {

}*/
//____________________________________________________________________________________________
/*Question 32:* Checking Usernames: Ensure uniqueness in usernames.

*Explain & TIP:* Checking for uniqueness is crucial in user management.
 Use loops and conditionals to handle case-insensitive comparisons.

 let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
 let new_users: string[] = ["user1", "User6", "user7", "Admin", "User9"];
 
  new_users.forEach(new_user => {
    if(current_users.some(current_user => current_user.toLocaleLowerCase() === new_user.toLocaleLowerCase()) ){
        console.log(`${new_user}, This user name already ageist.`)
    }else{
        console.log(`${new_user}, is Available`);   
    }
  });*/
//_______________________________________________________________________________________________
/*Question 33:* Ordinal Numbers: Display numbers with their ordinal suffixes.

*Explain & TIP:* Use a loop and an if-else chain to append the correct ordinal suffix to numbers.
                 This introduces you to combining loops with conditional logic for formatting.
                

                  for ( let number = 1; number < 11; number++){
                    let suffix = 'th'
                    if(number === 1){
                        suffix = 'st'
                    }
                    else if (number === 2){
                        suffix = 'nd'
                    }
                    
                    else if (number === 3){
                        suffix = 'rd'
                    }
                    console.log(`${number}${suffix}`);
                  }*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                            /*Day 12 Challenge: Start Coding!*
                 
   *Question 34:* Pizzas: Share your favorite pizzas and express your love for them.

*Explain & TIP:* Use a for loop to iterate over your pizza list, allowing you to express your preference 
for each type. This demonstrates looping through an array and appending custom messages to each item.

let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!")*/


/*Question 35:* Animals: Highlight animals with a common trait.

*Explain & TIP:* Looping through an array of animals allows you to comment on each one 
individually. This teaches you how to personalize messages within a loop based on array items. 

let animals: string[] = ["dog", "cat", "rabbit"];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");*/


/*Question 36:* T-Shirt: Create a function for customizing t-shirts.

*Explain & TIP:* Writing a function that accepts parameters allows you to reuse code efficiently.
 This introduces you to function parameters and printing dynamic content based on those parameters. */

 function make_shirt(size: string, message: string){
     console.log(`Dear Hassan ${size} of T-Shirt is good for you and ${message} I will apply on it`);
    }
    
    
    make_shirt('medium size', 'code with Hassan_Ali');





                 


