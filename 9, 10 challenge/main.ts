/*Question 25:* Alien Colors #1: Imagine an alien was just shot down in a game.
 Assign 'green', 'yellow', or 'red' to a variable called alien_color.

*Explain & TIP:* Use an if statement to check the alien's color. 
  This introduces you to simple conditionals.*/

  let alien_color = "red"

  if (alien_color == "red") {
    console.log("you Answer is Ture,you have earn $54.");
    
  } else { 
    console.log("you lose the game Try again!!");
    
  } 
  //______________________________________________________________________________________________________
  /*Question 26:* Alien Colors #2: Choose a color for an alien, then write an if-else chain.

*Explain & TIP:* Expanding on the previous exercise, if-else chains allow you to handle
 multiple conditions.*/
 let alien_colorr = "Green"
 if (alien_colorr == "yellow") {
        console.log("you Answer is Ture,you have earn $54.");
           
 }else if (alien_colorr == "Green"){
        console.log("you Answer is Ture,you have earn $34.");
        
 }else {
    console.log("you lose the game ! try again.")}
//____________________________________________________________________________________________________________

/*Question 27:* Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

*Explain & TIP:* This exercise introduces you to handling multiple specific conditions in an if-else chain.
let alien_color = "Yellow"


if (alien_color == "Red") {
        console.log("you earned 8 points.");
            
} else if (alien_color == "Yellow"){
        console.log("you earned 15 points.");
            
}else if (alien_color == "Green"){
        console.log("you earned 6 points.");
        
}else {
        console.log("you lose the game,Try again!!!");
    
}*/
//_______________________________________________________________________________________________________________

 /*                          Day 10 Challenge: Start Coding!

*Question 28:* Stages of Life: Determine a person’s life stage with an if-else chain.

*Explain & TIP:* Use age to check the life stage. This practice shows how to handle 
multiple conditions with an if-else chain.

    let age: number = 18
    if (age < 14) {
            console.log("the person is kid.");
            
    } else if (age < 16){
            console.log("the person is becoming adult.")
    } else if (age < 20){
        console.log("the person is adult.");
    } else {
        console.log("the person is not showing this ID card.!");
        
    }*/
//_____________________________________________________________________________________________________________  

   /*Question 29:* Favorite Fruit: Create an array for your favorite fruits and check if certain 
   fruits are included.

    *Explain & TIP:* Arrays can store multiple items like fruit names. Use if statements to check 
    for specific fruits.

    let fruits: string[] = ["Orange", "Banana", "mango"]
    if (fruits.includes( "Orange") ){
        console.log("you really like Orange.!!!");
        
    }if(fruits.includes("Banana")){
        console.log("you really like Bananas.!!!");
        
    } if(fruits.includes("mango")){
        console.log("you really like mango.!!!")
    }*/

    //___________________________________________________________________________________________________________

    
    /*Question 30:* Hello Admin: Greet users differently, especially 'admin'.

    *Explain & TIP:* Loop through usernames to personalize greetings. This introduces
     looping and conditional logic together.*/

        let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"]
        usernames.forEach(username => {
            if (username === "admin"){
                console.log("Hello admin,Would you like to see the status report?");
                
            } else {
                console.log(`Hello ${username}, "Thank you for log in again."`);
                
            }
        });