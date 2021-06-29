const {spinWords} = require('../spinWords.js')

describe("Frase", () => {
    test("Reverse maior que 4", () => {
        expect(spinWords("Hey fellow warriors")).toEqual("Hey wollef sroirraw")
        expect(spinWords("This is a test")).toEqual("This is a test")
        expect(spinWords( "This is another test")).toEqual("This is rehtona test")
    })
})
