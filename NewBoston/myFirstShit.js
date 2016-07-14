var person = {firstName: "kleiton",
	     lastName: "kledir",
	     age: 28};

console.log(person);

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(2, 3));

function worthless() {
}

// Returns undefined for function w/o return statement
console.log(worthless());

var printBacon = function() {
    console.log("Bacon is healthy, don't believe the doctors!")
};

printBacon();

// Class #4 - Handling multiple requests

function placeAnOrder(orderNumber) {
    // Tipo um neguinho tentando conectar no meu site XD
    console.log("Customer order: ", orderNumber);
    cookAndDeliverFood(function () {
	console.log("Delivered food order: ", orderNumber);
    });
}

function cookAndDeliverFood(callback) {
    // Simulates a 5sec operation
    // a callback would be the "the eggs are ready"
    // example
    setTimeout(callback, 5000);
}

// Simulate users requests
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
placeAnOrder(7);
// That shows us that we don't need to freeze the server
// to deal with multiple different requests!

