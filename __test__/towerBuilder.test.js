const {torre, numPedrasPorAndar, criandoPedras, posicionandoAsPedras} = require('../towerBuilder.js')
describe("Torre", () => {
    test("Torre criada", () => {
        expect(torre(1)).toEqual(["*"])
        expect(torre(2)).toEqual([" * ","***"])
        expect(torre(3)).toEqual(["  *  "," *** ","*****"])
    })
    test("Numero de pedras por andar", () => {
        expect(numPedrasPorAndar(1)).toEqual([1])
        expect(numPedrasPorAndar(2)).toEqual([1, 3])
        expect(numPedrasPorAndar(3)).toEqual([1, 3, 5])
    })
    test("Criando pedras", () => {
        expect(criandoPedras([1])).toEqual(["*"])
        expect(criandoPedras([1, 3])).toEqual(["*", "***"])
        expect(criandoPedras([1, 3, 5])).toEqual(["*", "***", "*****"])
    })
    test("Posicionando as pedras", () => {
        expect(posicionandoAsPedras(["*"], [1])).toEqual(["*"])
        expect(posicionandoAsPedras(["*", "***"], [1, 3])).toEqual([" * ","***"])
        expect(posicionandoAsPedras(["*", "***", "*****"], [1, 3, 5] )).toEqual(["  *  "," *** ","*****"])
    })
})
