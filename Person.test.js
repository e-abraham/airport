const Person = require("./Person");
const Bag = require("./Bag");

describe("Person objects", () => {
    const testPerson = new Person("Stacy");
    const testBag = new Bag(15);
    test("person has name", () => {
        expect(testPerson.name).toBe("Stacy");
    })

    test("person has bags", () => {
        expect(Array.isArray(testPerson.bags)).toBe(true);
    })

    test("person can add bags", () => {
        testPerson.addBag(testBag);
        expect(testPerson.bags.length).toBe(1);
    })
})