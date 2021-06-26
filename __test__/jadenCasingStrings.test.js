const {toJadeCase} = require('../jadenCasingStrings.js')
describe("Jaden Cased", () => {
    test("Seleciona cada palavra da frase e transforma a letra inicial em maiúscula", () => {
        const jadenCased = "How can mirrors be real if our eyes aren't real"
        expect(toJadeCase(jadenCased)).toEqual("How Can Mirrors Be Real If Our Eyes Aren't Real")
    })
})