// The keyword this
var Bucky = {
    printFirstName: function() {
	console.log("My name is Bucky");
	console.log(this === Bucky);
    }
};

Bucky.printFirstName();

function doSmthWorthless() {
    console.log("\nI'm worthless :(");
    console.log(this === Bucky);
    // this is a reference to whoever is calling it!
    console.log(this === global);
};

doSmthWorthless();
