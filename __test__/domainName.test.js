const {domain} = require('../domainName.js')

describe("Domain", () => {
    test("Select Domain", () => {
        expect(domain("http://google.com")).toEqual("google")
        expect(domain("http://google.co.jp")).toEqual("google")
        expect(domain("www.xakep.ru")).toEqual("xakep")
        expect(domain("https://youtube.com")).toEqual("youtube")
    })
})