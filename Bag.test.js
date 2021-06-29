const Bag = require("./Bag");

describe("Bag objects", () => {
    test("bags have waight", () => {
        const testBag = new Bag(25);
        expect(testBag.weight).toBe(25);
    })

    test("no weight throws error", () => {
        expect(() => new Bag()).toThrowError("bag must have a weight");
    })
})