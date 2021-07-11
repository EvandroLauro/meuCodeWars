
const abcdario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

function findMissingLetter(arr) {
   return findLetter(arr)
}

function findLetter(arr) { 
    let array = arr.map(ar => ar.toLowerCase())
    return toCaseString(letter(array), arr, array)
}

function letter(array) {
    let len = lenArray(array)
    return len.length == array.length ? abcdario[len.length] : abcdario[len.find((elem, indice) => abcdario[elem] != array[indice])]
}

function lenArray(array) {
    let inicio = abcdario.indexOf(array[0])
    let final = abcdario.indexOf(ultLetra(array))
    let result = []
    while (inicio <= final) {
        result.push(inicio)
        inicio++
    }
    return result
}

function toCaseString(letter, arr, array) {
    return ultLetra(arr) === ultLetra(array) ? letter.toLowerCase() : letter.toUpperCase() 
}

function ultLetra(array) { 
    return array[array.length - 1] 
}

module.exports = {findMissingLetter}
