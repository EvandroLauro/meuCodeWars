function toUnderscore(string) {
    var str
    if (typeof(string) == 'number') {
        str = string
    } else {
        str = string.split('').map((elem, index) => elem == elem.toUpperCase() && index != 0 && isNaN(elem) != false ? "_".concat(elem.toLowerCase()) : elem.toLowerCase()).toString().replace(/(,)/gm, "")
    }
    return str
}
module.exports = {toUnderscore}
