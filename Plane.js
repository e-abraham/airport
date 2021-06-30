class Plane{
    constructor(name){
        this.name = name;
        this.passengers = [];
        this.crew = [];
        this.airport;
        this.landedAt;
        this.destination;
    }

    addPassenger(passenger){
        this.passengers.push(passenger);
    }

    addCrew(crew){
        this.crew.push(crew);
    }

    setLandedAt(airport){
        this.landedAt = airport;
    }
    setDestination(airport){
        this.destination = airport;
    }
}



module.exports = Plane;