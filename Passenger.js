const Person = require("./Person");

class Passenger extends Person {
    constructor(name){
        super(name);
    }

    callAttendent(){
        return "Excuse me, I have a question.";
    }
}

module.exports = Passenger;