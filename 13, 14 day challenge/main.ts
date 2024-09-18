                                      /*Day 13 Challenge: Start Coding!* 
  
  *Question 37:* Large Shirts: Default values in make_shirt().
     
  *Explain & TIP:* Modify functions to have default parameters, simplifying calls for common
   use cases. This introduces default function parameters. 

   function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
*/
  

                   /*Question 38:* Cities: Describing cities with a function.

*Explain & TIP:* Use functions with default parameters to handle cases where certain data might 
not change often. This helps in making your code more flexible.


function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");*/

                    /*Question 39:* City Names: Formatting city-country pairs.

*Explain & TIP:* Returning formatted strings from functions can simplify data presentation.
 This exercise practices string formatting and returning values from functions. 

 function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));*/

                                       /*Day 14 Challenge: Start Coding!* 
    
                                    

/*Question 40:* Album: Create objects for music albums.

*Explain & TIP:* Use functions to return objects. This exercise practices creating and manipulating 
objects, and introducing optional function parameters. 


function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title, tracks };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));*/


                    /*Question 41:* Magicians: Display magician names from an array.

*Explain & TIP:* Passing arrays to functions allows for the manipulation or display of their contents
 in a centralized manner. This is useful for handling lists of data. 

 let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);*/

              /*Question 42:* Great Magicians: Add "the Great" to magician names.

*Explain & TIP:* Modifying array contents within a function demonstrates how functions can change data.
 This shows the impact of passing arrays by reference.*/

 let magicians_name: string[] = [ 'Hassan_Ali', 'ahmed', 'Muhammad']
 function make_great(magicians : string[]){
    magicians.forEach(magician => {
        console.log(magician)
    })};
     
 function show_magicians(magicians:string[]){
            return magicians.map(magician => `The great ${magician}`)
 }
 
 let magicians_great = show_magicians(magicians_name) // Shows modified names
  make_great(magicians_great); // Modifies the original array

 
 