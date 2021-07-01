const {findShort} = require("../shortestWord.js")
describe("Find Short", () => {
    test("Retorna o tamanho da menor palavra da string", () => {
        expect(findShort("bitcoin take over the world maybe who knows perhaps")).toEqual(3)
        expect(findShort("turns out random test cases are easier than writing out basic ones")).toEqual(3)
        expect(findShort("Let's travel abroad shall we")).toEqual(2)
    })
})
