const Person = require("./Person");

class Crew extends Person{
    constructor(name, position, securityLevel){
        super(name);
        this.position = position;
        this.securityLevel = securityLevel;
    }
}

module.exports = Crew;