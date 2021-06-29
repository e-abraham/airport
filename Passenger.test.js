const Passenger = require("./Passenger");
const Bag = require("./Bag");

describe("Passenger objects", () => {
    const testPassenger = new Passenger("Stacy");
    const testBag = new Bag(15);
    test("passenger has name", () => {
        expect(testPassenger.name).toBe("Stacy");
    })

    test("passenger has bags", () => {
        expect(Array.isArray(testPassenger.bags)).toBe(true);
    })

    test("passenger can add bags", () => {
        testPassenger.addBag(testBag);
        expect(testPassenger.bags.length).toBe(1);
    })
})