/*Day 37 Challenge: Start Coding!*

*Question 109:* Write an if statement that logs "Good Morning" if the current time is before 12 PM.

*Explain & TIP:* You can get the current hour using the Date object and its getHours() method. Remember,
hours are in 24-hour format, so 12 PM is 12.*/
/*https://github.com/AsharibAli/discord-100-days-coding-challenge/tree/main/day-37/q109||*/
let curreentTime = new Date();
if (curreentTime.getHours() < 12 && curreentTime.getHours() > 5) {
    // console.log(" Good Morning ")
}
else if (curreentTime.getHours() > 13 && curreentTime.getHours() < 21) {
    // console.log(" Goood Evening ");
}
else if (curreentTime.getHours() > 22 && curreentTime.getHours() < 5) {
    // console.log(" Goood Night ");
}
// Checks the current hour and logs "Good Morning" if it's before 12 PM
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    //   console.log("Good Morning"); // It's morning if before 12 PM
}
// This simple check helps us greet users appropriately based on the time of day.
/*Question 110:* Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

*Explain & TIP:* A common grading system assigns letter grades based on score ranges. You can use an if-else-if
 chain to determine the grade.*/
/*https://github.com/AsharibAli/discord-100-days-coding-challenge/tree/main/day-37/q110||  */
import inquirer from "inquirer";
let imput = await inquirer.prompt({
    name: "enter",
    type: "number",
    message: "please Enter your percentage to see your Grade."
});
if (imput.enter > 90 && imput.enter < 100) {
    console.log(` According to your ${imput.enter} percentage your Grade is A+ .`);
}
else if (imput.enter > 80 && imput.enter < 90) {
    console.log(` According to your ${imput.enter} percentage your Grade is A1 .`);
}
else if (imput.enter > 70 && imput.enter < 80) {
    console.log(` According to your ${imput.enter} percentage your Grade is A .`);
}
else if (imput.enter > 60 && imput.enter < 70) {
    console.log(` According to your ${imput.enter} percentage your Grade is B .`);
}
else if (imput.enter > 50 && imput.enter < 60) {
    console.log(` According to your ${imput.enter} percentage your Grade is C .`);
}
else if (imput.enter > 40 && imput.enter < 50) {
    console.log(` According to your ${imput.enter} percentage your Grade is D .`);
}
else {
    console.log(` According to your ${imput.enter} percentage your are fail "F" .`);
}
/*Question 111:* Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

*Explain & TIP:* Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.

*Answer: Please try to do it yourself first!*

||https://github.com/AsharibAli/discord-100-days-coding-challenge/tree/main/day-37/q111||

🌟 Star GitHub Repository & take help from ChatGPT to understand the code, or elsewhere:
https://github.com/AsharibAli/discord-100-days-coding-challenge*/
