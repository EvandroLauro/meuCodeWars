const {toTowerBuilder} = require('../towerBuilder.js')
const {numFolhasPorAndar} = require('../towerBuilder.js')
describe("Tower Builder", () => {
    test("Numero de folhas por andar", () => {
        expect(numFolhasPorAndar(3)).toEqual([1, 3, 5])
    })
    test("Test", () => {
        expect(toTowerBuilder(1)).toEqual(["*"])
        expect(toTowerBuilder(2)).toEqual([" * ","***"])
        expect(toTowerBuilder(3)).toEqual(["  *  "," *** ","*****"])
    })
})
