/*Question 79:* Creating and Accessing Object Properties: Construct an object representing a car with
properties for make, model, and year. Then, show how you can access the model property of the car.

*Explain & TIP:* Objects are collections of properties, kind of like a box for storing related
information. You can create an object to group related data and access its properties using either
 dot notation or bracket notation.*/
let car1 = {
    make: "toyota",
    model: "corola",
    year: 2017
};
console.log(`This car is made by ${car1.make}, Its model is ${car1.model} in the year ${car1.year}.`);
// This sets up an object for a car with specific details
let car2 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
// Accessing and showing the car's model
console.log(car2.model); // Outputs: Corolla
// We use dot notation (car.model) to get the model of the car from our object.
/*Question 80:* Updating Object Properties: Add a property named color to the existing car object, and
then update the year property to 2021. Show how to perform these operations.

*Explain & TIP:* You can add new properties to an object or change existing ones after the object is
created. This flexibility allows objects to be dynamically updated as needed.*/
let car3 = {
    make: "Toyota",
    model: "Corolla",
    color: "blue", // Adds a new property 'color'
    year: 2020
};
// Add a new property named color
// Adding a new property 'color' and updating 'year'
car3.year = 2021; // Updates the 'year' property
// Showing the updated car object
console.log(car3); // Outputs the car object with the new color and updated year
// Now our car is blue and its model year is updated to 2021.
/*Question 81:* Iterating Over Object Properties: Write a function that takes an object as an argument and
 logs all of its properties and values.

*Explain & TIP:* You can loop through each property of an object using a for...in loop. This is useful for
 when you need to examine or display all the information an object holds.*/
function logObjectPropertie(obj) {
    for (let prop in obj) {
        console.log(`${prop}: ${obj[prop]}`);
    }
}
logObjectPropertie({ make: "toyota", made: "corolla", color: "white", year: 2020 });
export {};
/* //This function shows every detail about an object
function logObjectProperties(obj: object) {
    for (let property in obj) {
        // Loops through each property in the object
        console.log(`${property}: ${obj[property]}`);
        // Shows the property name and its value
    }
}

// Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
// It tells us each piece of information stored about the car.*/ 
