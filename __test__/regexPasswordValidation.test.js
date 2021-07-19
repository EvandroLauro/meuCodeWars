const {validate} = require('../regexPasswordValidation.js')

describe("Test", () => {
    test("test", () => {
        expect(validate('djI38D55')).toEqual('djI38D55 - Expected true')
        expect(validate('a2.d412')).toEqual('a2.d412 - Expected false')
        expect(validate('JHD5FJ53')).toEqual('JHD5FJ53 - Expected false')
        expect(validate('!fdjn345')).toEqual('!fdjn345 - Expected false')
        expect(validate('jfkdfj3j')).toEqual('jfkdfj3j - Expected false')
        expect(validate('123')).toEqual('123 - Expected false')
        expect(validate('abc')).toEqual('abc - Expected false')
        expect(validate('Password123')).toEqual('Password123 - Expected true')  
    })
})


