const Plane = require("./Plane");
const Passenger = require("./Passenger");

describe("Plane objects", () => {
    const testPlane = new Plane("L1A4")
    
    test("Plane has name", () => {
        expect(testPlane.name).toBe("L1A4");
    })

    test("plane has passengers", () => {
        expect(Array.isArray(testPlane.passengers)).toBe(true);
    })

    test("plane can add passengers", () => {
        const testPassenger = new Passenger("Eric");
        testPlane.addPassenger(testPassenger);
        expect(testPlane.passengers.length).toBe(1);
    })

    test("can give plane landed location", () => {
        testPlane.setLandedAt("Miami");
        expect(testPlane.landedAt).toBe("Miami");
    })
    
    test("can give plane destination", () => {
        testPlane.setDestination("DFW");
        expect(testPlane.destination).toBe("DFW");
    })
})