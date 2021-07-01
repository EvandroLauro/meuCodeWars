function findShort(s) {
    let menor = s.split(" ").reduce(function(menor, array) {
         return menor.length <= array.length ? menor = menor : menor = array
    });
    return menor.length
}

module.exports = {findShort}
