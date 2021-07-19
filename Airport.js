const fs = require("fs");
const path = require("path");
const fsp = require("fs").promises;

class Airport {
    constructor(name){
        this.name = name;
        this.planes = [];
    }

    addPlane(plane){
        this.planes.push(plane);

    }

    getInfoCallback(callback){
        const airportName = this.name;
        const dbPath = path.join(__dirname, "airportsData.json");
        fs.readFile(dbPath, (err, data) => {
            const airports = JSON.parse(data)
            const airport = airports.find(airport => airport.iata === airportName)
            callback(err, airport)
        })
    }

    getInfoPromise(){
        const airportName = this.name;
        const dbPath = path.join(__dirname, "airportsData.json");

        return new Promise((resolve, reject) => {
            fs.readFile(dbPath, (err, data) => {
                if(err) {
                    return reject(err)
                }

                const airports = JSON.parse(data)
                const airport = airports.find(airport => airport.iata === airportName)
                
                resolve(airport)
            })
        })
    }

    async getInfoAwait(){
        const airportName = this.name;
        const dbPath = path.join(__dirname, "airportsData.json");

        try {
            const data = await fsp.readFile(dbPath);
            const allAirports = JSON.parse(data);
            const airport = allAirports.find(airport => airport.iata === airportName);
            return airport;
        } catch(err) {
            console.log(err);
        }

    }

    async getSameCity(){
        const airportName = this.name;
        const dbPath = path.join(__dirname, "airportsData.json");

        try {
            const data = await fsp.readFile(dbPath);
            const allAirports = JSON.parse(data);
            const airport = allAirports.find(airport => airport.iata === airportName);
            const airportCity = airport.city;
            const list = allAirports.filter(airport => airport.city === airportCity && airport.name != airportName)
            return list;
        } catch(err) {
            console.log(err);
        }
    }

}

module.exports = Airport;