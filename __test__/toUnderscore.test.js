const {toUnderscore} = require('../toUnderscore')

describe("Test", () => {
    test("Testando", () => {
        expect(toUnderscore("TestController")).toEqual("test_controller")
        expect(toUnderscore("MoviesAndBooks")).toEqual("movies_and_books")
        expect(toUnderscore("App7Test")).toEqual("app7_test")
        expect(1).toEqual(1)
    })
})