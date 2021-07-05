var string = "aba"
function count(string) {  
    let array = [...string]
    let arrayLetra = [...new Set(array)]
    let obj = {}
    for (let i = 0; i < arrayLetra.length; i++) {
        let total = [...string].filter(letra => letra === arrayLetra[i]).length;
        let result = {[arrayLetra[i]] : total}
        Object.assign(obj, result); 
    }
    return obj
}
module.exports = {count}