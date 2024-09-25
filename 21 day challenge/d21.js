/*Question 61:* Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks,
and motorcycles using enums, and show one example.

*Explain & TIP:* Enums are like special lists in your code that help you categorize things. They
 make your code cleaner and easier to understand.
  
 // Making a list (enum) for different types of vehicles
 enum vehicles{
    car,
    motorcycles,
    trucks,
}
 // It shows 0 because enums start counting from 0
 console.log(vehicles.motorcycles); */ // Here, we're just checking what number the Car category got in our list. 
// Describing a circle using our Shape type
var circle = {
    kind: "circle",
    radius: 5
};
// Describing a rectangle using our Shape type
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.
