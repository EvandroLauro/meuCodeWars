// Should return a string representing the ranges
function toRange(arr) {
    let dentro = []
    let fora = []
    for (let i = 0; i < arr.length; ++i) {
        arr[0] + i == arr[i] ? dentro.push(arr[i]) : fora.push(arr[i])
    }
    return dentro[0] + '_' + dentro[dentro.length - 1] + ',' + fora.toString()
}


// Should return an array
function toArray(str) {
}

module.exports = {toRange, toArray}