// Should return a string representing the ranges
function toRange(arr) {
    let dentro = []
    let fora = []
    for (let i = 0; i < arr.length; ++i) {
        if (i == 0) {
            dentro.push(arr[i])
        } else {
            if ((arr[i] - arr[i - 1]) == 1) {
                dentro.push(arr[i])
            } else {
                fora.push(arr[i])
                if (i < (arr.length - 1)) {
                    dentro.push(arr[i])
                }
            }
        } 
    }

    let result = []
    for (let i = 0; i < fora.length; ++i) {
        let index = dentro.indexOf(fora[i])
        if (dentro[index] != undefined) {
            result.push(dentro[0] + '_' + dentro[index - 1] + ',' + dentro[index])
        } else {
            if (fora.length == 1) {
                result.push(dentro[0] + '_' +  + dentro[dentro.length - 1] + ',' + fora[i])
            } else {
                let r = result
                result = []
                result.push(r + '_' + dentro[dentro.length - 1] + ',' + fora[i])
            }
        }
    }
    return result.toString()
}

function toArray(str) {
}

module.exports = {toRange, toArray}