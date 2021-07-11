
const abcdario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
function findMissingLetter(arr) {
    let array = arr.map(ar => ar.toLowerCase())
    let letter = ''
    if (ultimaLetra(arr) === ultimaLetra(array)) {
        letter = findLetter(array)
    } else {
        letter = findLetter(array).toUpperCase() 
    }
    return letter
}

function ultimaLetra(array) {
    let len = array.length
    return array[len - 1] 
}

function findLetter(array) { 
    let lista = lenArr(array)
    let result = ""
    if (lista.length === array.length) {
        result = abcdario[lista.length]
    } else {
        for (let i = 0; i < lista.length; i++) {
            if (array[i] != abcdario[lista[i]]) {
                result = abcdario[lista[i]]
                break
            }
        }
    }
    return result
}

function lenArr(array) {
    let inicio = abcdario.indexOf(array[0])
    let final = abcdario.indexOf(ultimaLetra(array))
    let result = []
    while (inicio <= final) {
        result.push(inicio)
        inicio++
    }
    return result
}

module.exports = {findMissingLetter}
