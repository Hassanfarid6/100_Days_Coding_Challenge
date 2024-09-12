/*Question 10:* Adding Comments: Choose two of the programs you’ve written,
and add at least one comment to each. If the programs are straightforward at this point,
just add your name and the current date at the top of each program file. Then,
write one sentence describing what the program does.

*Explain & TIP:* Comments are notes in your code that the computer ignores.
They help people understand what your code does.
It's like leaving a note for yourself or someone else who might read your code later.*/
// name: Hassan_Farid      DAte : 4/4/2024
// This program print a message.  DAte : 4/4/2024
let name = "hassan_Farid";
// console.log(`Hello ${name}, Do you want to learn some typescript with me?`);
/*Question 11:* Names: Store the names of a few of your friends in an array called names.
Print each person’s name by accessing each element in the list, one at a time.

*Explain & TIP:* An array is like a list of items. You can store multiple items,
like your friends' names, in one variable and access them one by one.*/
let names = ["Muhammad Ali", "yaqoob Qadir", "Sumeer Ahmed"];
for (let i = 0; i < names.length; i++) {
    // console.log(`${names[i]}`)
}
;
for (let name of names) {
    // console.log(name);       // working same 
}
/*   Question 12:* Greetings: Use the array from Exercise 11. Instead of just printing each person’s name,
     print a message to them. The message should be the same for each person, but personalized with their name.

    *Explain & TIP:* This builds on the previous exercise. Now, you’re not just listing names,
     you’re using them in a sentence to make a personalized message for each friend.*/
let names1 = ["Hassan_Ali", "Abdul_Basit", "Ahmed_Mushtaq"];
for (let name of names1) { // (let name in names1) 'in' show index
    //  console.log(`Hello ${name},Would you like to learn some typescript today?`)   
}
;
names1.forEach(n => {
    //  console.log(`Hello ${n},Would you like to learn some typescript today?`)   //correct way
});
/*                                     Day 5 challenge
    Question 13:* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a series of statements about these items,
 such as “I would like to own a Honda motorcycle.”

*Explain & TIP:* Arrays help you group related items, like types of transportation.
 This way, you can talk about each one using a loop.*/
let transports = ["Honda motorcycle", "Tisla Car", "Metro Bus"];
for (let transport of transports) {
    // console.log(`would i like to own a ${transport}`)
}
// Both have same Output
transports.forEach(transport => {
    // console.log(`would i like to own a ${transport}`);
});
/*Question 14:* Guest List: If you could invite anyone, living or deceased, to dinner, who would
you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.

  *Explain & TIP:* Just like with transportation, you can use an array to manage a list of guests.
  Loop through the list to send each one a personal invitation.*/
let guests = ["Ahmed_Ali", "Sheero_Baloch", "Chacha Hameed"];
for (let guest of guests) {
    // console.log(` MR ${guest}, Would you like to join me for dinner?`) 
}
// Both working same
guests.forEach(guest => {
    // console.log(` MR ${guest}, Would you like to join me for dinner?`);
});
/*Question 15:* Changing Guest List: One of your guests can't make it to the dinner,
        so you need to send out a new set of invitations with a replacement guest.

*Explain & TIP:* Arrays are flexible. You can replace an item if someone can't make it,
 then loop through the list again for new invitations.*/
let guests1 = ["Ahmed_Ali", "Sharo_Baloch", "Abdul Hameed"];
let unableToAttend = "Sharo_Baloch";
// console.log(`${unableToAttend} can't make it dinner`); // unable TO Attend the Dinner party
let newGuest = "Hassan_Ali";
guests1[guests1.indexOf(unableToAttend)] = newGuest; // New Guest inivited
guests1.forEach((guest) => {
    console.log(`Dear ${guest}, Would you like to join me with dinner.`);
});
export {};
