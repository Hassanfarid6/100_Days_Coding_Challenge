/*Question 46:* Enhanced Laptop Object: Construct an object for a laptop including properties make,
model, year, and a method describe() that logs a sentence about the laptop.

*Explain & TIP:* Objects can also contain functions (methods) that can perform actions using the
object's properties. This introduces method definition within objects.*/
/*
 let laptop = {
     model: 'XPS 7200',
     make: 'Dell',
     year: '2019',
     describe: function(){
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
        
    }
 }
 
            laptop.describe();*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*Question 47:* Advanced Array Destructuring: Given an array of objects representing different laptops,
each with properties make, model, and year, use array destructuring to assign the first and second laptops
 to variables. Then, log these variables.

 *Explain & TIP:* Destructuring can also be used to quickly extract elements from arrays of objects,
 simplifying access to complex data structures.*/
var laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 },
];
var laptop1 = laptops[0], laptop2 = laptops[1], laptop3 = laptops[2];
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
/*Question 48:* Combining Arrays with Spread Operator: Suppose you're comparing prices of two different
sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending
 order, then log the result.

*Explain & TIP:* The spread operator can be used in conjunction with array methods like sort() to combine
 and manipulate arrays efficiently.*/
var priceSet1 = [70000, 10000, 40000];
var priceset2 = [30000, 40000, 60000];
var combinePrice = __spreadArray(__spreadArray([], priceSet1, true), priceset2, true).sort(function (a, b) { return a - b; });
console.log(combinePrice);
