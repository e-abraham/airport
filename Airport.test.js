const Airport = require("./Airport");
const Plane = require("./Plane");

describe("Airport object", () => {
    const testAirport = new Airport("DFW");

    test("airport has name", () => {
        expect(testAirport.name).toBe("DFW");
    })

    test("airport has planes array", () => {
        expect(Array.isArray(testAirport.planes)).toBe(true);
    })

    test("airport can add plane", () => {
        const testPlane = new Plane("B1R2");
        testAirport.addPlane(testPlane);
        expect(testAirport.planes.length).toBe(1);
    })

    // test("can access weight of specific bag", () => {
    //     testWeight = testAirport.bagWeight(testPlane, testPassenger, testBag);
    // })


})