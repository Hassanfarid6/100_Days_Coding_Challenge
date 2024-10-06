/*Question 82:* Find the Length of a String: Write a function that takes a string as an argument and returns
 the number of characters in the string.

*Explain & TIP:* The .length property of a string gives you the total number of characters it contains,
 helping you understand more about the data you're working with.*/
 
function noCharacters(name: string ){
    return(name.length)
}

console.log(noCharacters("ali"));

// This function counts how many characters are in a string
function stringLength(str: string): number {
    return str.length; // Returns the number of characters in the string
}

// Example: Measuring the length of a name
console.log(stringLength("Alice")); // Outputs: 5
// We're simply asking how long the string "Alice" is, and it tells us there are 5 characters.


/*Question 83:* Converting to Upper and Lower Case: Create a function that takes a string, converts it 
to uppercase, then to lowercase, and logs both.

*Explain & TIP:* The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters
 in a string, useful for formatting or comparing strings.*/

function toUper( name: string){
    let uppercase = name.toUpperCase();
    let lowercase = name.toLowerCase()

    console.log("Upper case:", uppercase, "Lower case:", lowercase);
    
}
toUper("hasssan Ali");




/*/ This function changes a string to uppercase and then to lowercase
function convertCase(str: string) {
    let upperStr = str.toUpperCase(); // Converts to uppercase
    let lowerStr = str.toLowerCase(); // Converts to lowercase

    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}

// Example: Changing the case of "Hello World"
convertCase("Hello World"); // Outputs: "Uppercase: HELLO WORLD Lowercase: hello world"
// We're showing the same text in all uppercase and then all lowercase.*/



/*Question 84:* Replacing Text in a String: Write a function that takes a sentence and replaces all instances
 of the word "JavaScript" with "TypeScript".

*Explain & TIP:* The .replace() method can search for a specific text pattern in a string and replace it with
something else. By default, it only replaces the first occurrence, but you can use a global regex for multiple
replacements.*/


function convert(str: string){
    return str.replace(/javascript/g, "TypeScript");
}
console.log(convert(`javascript is best language in the world "javascript"`));



/*/ This function swaps "JavaScript" with "TypeScript" in a sentence
function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
    // Uses a regular expression with the 'g' flag for a global replacement
}

// Example: Changing a programming language name in a sentence
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
// Outputs: "I love TypeScript and TypeScript is awesome!"
*/// Every "JavaScript" in the sentence is changed to "TypeScript".



