const Passenger = require("./Passenger");
const Person = require("./Person");

describe("Passenger objects", () => {
    const testPassenger = new Passenger("Macy");
    test("Passenger has a name", () => {
        expect(testPassenger.name).toBe("Macy");
    })

    test("Passenger can call attendance", () => {
        testPassenger.callAttendent();
        expect(testPassenger.callAttendent()).toBe("Excuse me, I have a question.");
    })

    test("object is an instance of Passenger", () => {
        expect(testPassenger instanceof Passenger).toBeTruthy();
    })

    test("Passenger object extends Person class", () => {
        expect(testPassenger instanceof Person).toBeTruthy();
    })
})