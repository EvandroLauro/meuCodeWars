function toWeirdCase(string) {
    let str = string.split(' ')
    let result = []
    for (let i = 0; i < str.length; ++i) {
        let s = str[i]
        for (let j = 0; j < s.length; ++j) {
            j%2 == 0 ? result.push(s[j].toUpperCase()) : result.push(s[j].toLowerCase())
        }
        if ( i <= (str.length - 2)) {result.push(' ')}
    }
    return result.toString().replace(/,/g, '')
}
module.exports = {toWeirdCase}

