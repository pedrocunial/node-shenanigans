var Bucky = {
    favFood: "Bacon",
    favMovie: "Chappie"
};

var Person = Bucky;

Person.favFood = "salad";

// EVERYTHING IS A OBJECT!
console.log(Bucky.favFood);
    
console.log(19 == "19"); // prints true (only compares value)
console.log(19 === "19"); // prints false (compares values and types!)
