const {longestSlideDown} = require('../pyramidSlideDown.js')

describe('Test', () => {
    test('test', () => {
        expect(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]])).toEqual(23)
    })
})