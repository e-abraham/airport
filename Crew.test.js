const Crew = require("./Crew");

describe("Crew class", () => {
    const testCrew = new Crew("Mark", "attendent", 6);

    test("Crew has a name", () => {
        expect(testCrew.name).toBe("Mark");
    })

    test("Crew has a security level", () => {
        expect(testCrew.securityLevel).toBe(6);
    })

})