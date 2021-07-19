const Airport = require("./Airport");
const Plane = require("./Plane");


describe("Airport object", () => {
    const DFW = new Airport("DFW");

    test("airport has name", () => {
        expect(DFW.name).toBe("DFW");
    })

    test("airport has planes array", () => {
        expect(Array.isArray(DFW.planes)).toBe(true);
    })

    test("airport can add plane", () => {
        const testPlane = new Plane("B1R2");
        DFW.addPlane(testPlane);
        expect(DFW.planes.length).toBe(1);
    })


    test("callback: airports have a country", (done) => {
        const CDG = new Airport("CDG");
        //when
        CDG.getInfoCallback((err,info) => {
            //then
            console.log(info);
            expect(err).toBeNull();
            expect(info.country).toEqual("FR");
            done()
        })
    })


    test("promise: airports have a city", () => {
        // const DFW = new Airport("DFW")
        //when
        return DFW.getInfoPromise()
        .then((data) => {
            //then
            expect(data.city).toEqual("Dallas-Fort Worth");
        })
        .catch((err) => {
            expect(err).toBeNull();
        })
    })

    test("async/await: airports have a state", async () => {
        // const DFW = new Airport("DFW")
        const airport = await DFW.getInfoAwait()
        console.log(airport);
        expect(airport.state).toEqual("Texas");

    })

    test("async/await: list of airports in same city", async () => {
        const DAL = new Airport("DAL")
        const list = await DAL.getSameCity()
        console.log(list);
        expect(list.length).toBe(8);
    })


})