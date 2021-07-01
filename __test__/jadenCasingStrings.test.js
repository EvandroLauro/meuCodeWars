const {toJadeCase} = require('../jadenCasingStrings.js')
describe("Jaden Cased", () => {
    test("Seleciona cada palavra da frase e transforma a letra inicial em maiúscula", () => {
        const primeiroCaso = "How can mirrors be real if our eyes aren't real"
        expect(toJadeCase(primeiroCaso)).toEqual("How Can Mirrors Be Real If Our Eyes Aren't Real")
        const segundoCaso = "Three men, six options, don\'t choose."
        expect(toJadeCase(segundoCaso)).toEqual("Three Men, Six Options, Don\'t Choose.")
    })
})