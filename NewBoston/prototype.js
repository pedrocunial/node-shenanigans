// We can have a bunch of different users now!
function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
	targetPlayer.life += 1;
	console.log(this.name + " gave 1 life to "
		    + targetPlayer.name);
    }; 
}

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);

console.log("Bucky: ", Bucky.life);
console.log("Wendy: ", Wendy.life);

// Prototypes!
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted "
		+ targetPlayer.name);
};


Wendy.uppercut(Bucky);
console.log("Bucky: ", Bucky.life);
console.log("Wendy: ", Wendy.life);

// You can add attributes!
User.prototype.magic = 60;

console.log(Bucky.magic);
console.log(Wendy.magic);
