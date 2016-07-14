// This is the default value when we dont classify the module exports
module.exports = {};

function printAvatar() {
    console.log("Avatar: PG13");
};

function printDog() {
    console.log("dog");
};

module.exports.avatar = printAvatar;
module.exports.dog    = printDog;
