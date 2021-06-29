class Plane{
    constructor(name){
        this.name = name;
        this.passengers = [];
        this.airport;
        this.landedAt;
        this.destination;
    }

    addPassenger(passenger){
        this.passengers.push(passenger);
    }

    setLandedAt(airport){
        this.landedAt = airport;
    }
    setDestination(airport){
        this.destination = airport;
    }
}



module.exports = Plane;