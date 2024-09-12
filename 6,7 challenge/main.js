"use strict";
// Question 16:* More Guests: You've found a bigger dinner table, so there's room for more guests.
// *Explain & TIP:* When you have more space, you can add more guests to your list. 
// You can add guests at the beginning, middle, and end of an array.
//Answer of Q16:
let guest1 = ["Hassaan_Farid", "Yaqoob_Qadir", "Faisal_Qadir"];
// console.log(`Good News!! I found a bigger Dinner table!`);
guest1.unshift("Muhammad Ahmed");
guest1.splice(guest1.length / 2, 0, "Abdulullah");
guest1.push("Ali baloch");
for (let guesst of guest1) {
    // console.log(`Dear ${guesst}, "Would you like to join with me for Dinner?"`);
}
// Both are working same
guest1.forEach((guest) => {
    // console.log(`Dear ${guest}, "Would you like to join with me for Dinner?"`);
});
//___________________________________________________________________________________________________________
/*Question 17:* Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
 and you can only invite two guests.

*Explain & TIP:* Sometimes plans change, and you'll need to adjust your guest list.
Removing guests from your list is straightforward but should be done thoughtfully.*/
let guests = ["Ahmed_Ali", "Muhammad_Ali", "Arif_Basheer"];
// console.log("Great News! I would Arrange the Bigger Dinner party! ");
guests.splice(guests.length / 2, 0, "Sameer_baloch");
guests.unshift("Farhan_ALi");
guests.push("Hussain_Baloch");
guests.forEach(guest => {
    // console.log(`Dear ${guest}, "Would you like to join with me for Big Dinner Party?"`);
});
//  console.log("Unfortunatelly, I can Only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    //  console.log(`Sorry ${removedGuest} I can't invite you for Dinner`);
}
guests.forEach(guest => {
    //  console.log(`Dear ${guest}, "you are still invited for Dinner."`);
});
guests.splice(0, guests.length);
// console.log(guests);
//___________________________________________________________________________________________________
// Question 18:* Seeing the World: Think of at least five places you’d like to visit.
// *Explain & TIP:* Arrays can be ordered and reordered in various ways without altering
//  the original list, useful for planning and organizing information.
let places = ["Isalamabad", "Quetta", "Peshawar", "Turbat", "Thatta", "Haiderabad"];
// console.log("Original Order:", places);
// console.log("Alphabetical Order", [places].sort());
// console.log("Original Order:", places);
// console.log("Reverse Alphabetical order", [...places].sort().reverse());
// places.reverse();
// console.log("Reversed order:", places);
// places.reverse();
// console.log("Original order:", places);
// places.sort();
// console.log("Alphabetical order:", places);
// places.reverse();
// console.log("Reverse alphabetical order:", places);
//__________________________________________________________________________________________________________
/*Day 7 Challenge: Start Coding!*

*Question 19:* Dinner Guests: Use one of your programs from Exercises 14 through 18 to print
a message indicating the number of people you are inviting to dinner.

*Explain & TIP:* Arrays have a length property that tells you how many items are in the list.
Use this to inform your guests how big the party will be.*/
let guets = ["Hassan_Ali", "Fahan_Ahmed", "Muhammad_Yaqoob", "Usama_Ashraf", "Usman_Baloch",
    "Akram_jameel"];
console.log(`I am inviting ${guets.length}, people to Dinner`);
//______________________________________________________________________________________________________________
/*Question 20:* Think of something you could store in an array. For example, you could make a list
 of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program
  that creates a list containing these items.

*Explain & TIP:* Arrays are perfect for keeping a collection of similar items. Choose a theme you
 like and list several examples.


let cities: string[] = ["Karachi", "lahore", "islamkot", "metti"]
console.log("cities I'd like to visit", cities);*/
//_____________________________________________________________________________________________________
/*Question 21:* Think of something you could store in a TypeScript Object. Write a program that
   creates Objects containing these items.

*Explain & TIP:* Objects in TypeScript can store various related data about a single entity.
Think of an object as a container for characteristics of something, like a book or a car.

let book: { title: string , author: string , YearPublish: number} = {

                  title: "The_Hobby",
                  author: "Hassan_Farid",
                  YearPublish: 1965
}
console.log(`Book info: ${book.title} made by ${book.author}, published in ${book.YearPublish}`);*/
