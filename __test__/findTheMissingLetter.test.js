const {findMissingLetter} = require("../findTheMissingLetter.js")

describe("KataTests", () => {
    test("Basic Test", () => {
        expect(findMissingLetter(['a','b','c','d','e'])).toEqual('f')
        expect(findMissingLetter(['O','Q','R','S'])).toEqual('P')
    })
})