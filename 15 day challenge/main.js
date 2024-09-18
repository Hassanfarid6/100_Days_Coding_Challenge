/*Question 43:* Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

*Explain & TIP:* Creating a copy of an array before modifying it allows you to maintain the original data.
 This exercise demonstrates array copying and manipulation.*/
// let magicians_name: string[] = ['hassam', 'Ahmed ali', 'shashu']
// function show_magician(Magicians: string[]){
//       Magicians.forEach(MagiciansName => {
//         console.log(MagiciansName);
//       });
// }
// function great_magician(magicians: string[]){
//       return magicians.map(magician => `The Great  ${magician}`)
// }
// show_magician(magicians_name) // Original magician 
// //for new list copy an array with the help of slice()
// let copy_magician = magicians_name.slice()
// let magician_Apply = great_magician(copy_magician)
// show_magician(magician_Apply);  //magician with done
/*Question 44:* Sandwiches: Summarize sandwich orders with varying ingredients.

*Explain & TIP:* Utilizing rest parameters allows functions to accept an indefinite number of arguments,
 useful for handling lists of data like sandwich ingredients.


 function making_sandWiches(...item: string[]){
          console.log(`Making a sandwich with ingredient: ${item.join(' , ')}.`)
 }


 making_sandWiches('cheese', 'chicken_spread')
 making_sandWiches('Egg fry', 'chicken_brost', 'mayo_garlic')
 making_sandWiches('cheese', 'tomato_catch_up')*/
/*Question 45:* Cars: Create detailed car objects with flexible properties.

*Explain & TIP:* Functions accepting a mix of fixed and arbitrary parameters let you create detailed
and flexible objects. This is ideal for data with a few required fields and many optional fields.*/
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = [value];
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
