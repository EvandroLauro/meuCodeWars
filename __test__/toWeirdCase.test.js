const {toWeirdCase} = require('../toWeirdCase.js')

describe("Test", () => {
    test("test", () => {
        expect(toWeirdCase("String")).toEqual("StRiNg")
        expect(toWeirdCase("Weird string case")).toEqual("WeIrD StRiNg CaSe")
    })
})



