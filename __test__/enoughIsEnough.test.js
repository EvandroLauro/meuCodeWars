const {limitaRepetidos} = require('../enoughIsEnough.js')
describe("Album", () => {
    test("Seleciona as fotos", () => {
        expect(limitaRepetidos([20, 37, 20, 21, 20, 40, 21, 10], 0)).toEqual([])
        expect(limitaRepetidos([20, 37, 20, 21, 20, 40, 21, 10], 1)).toEqual([20, 37, 21, 40, 10])
        expect(limitaRepetidos([20, 37, 20, 21, 20, 40, 21, 10], 2)).toEqual([20, 37, 20, 21, 40, 21, 10])
    })
})