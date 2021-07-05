const {count} = require('../countCharactersInYourString.js')

describe("Test", () => {
    test("test", () => {
        expect(count("aba")).toEqual({a: 2, b: 1})
    })
})

