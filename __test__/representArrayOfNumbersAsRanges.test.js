const {toRange, toArray} = require('../representArrayOfNumbersAsRanges.js')

describe("Convert an array to a range", () => {
    test("Test", () => {
        expect(toRange([3,4,5,6,9])).toEqual('3_6,9')
    })
})

describe("Converting a range back to an array", () => {
    test("Test", () => {
        expect(toArray('3_6,9')).toEqual([3,4,5,6,9])
    })
})

