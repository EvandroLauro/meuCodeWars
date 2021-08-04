/*
const passInputIsbnInObj = (array) => { // tentar colocar isso num map
    const result = {}
    for (let i = 0; i < array.length; i++) {
        let obj = {
            [i] : array[i]
        }
        Object.assign(result, obj)
    }
    return result
}
*/

const passInputIsbnInObj = (array) => {
    let i = 0
    return array.reduce((acc ,val) => {
        const obj = {...acc , [i] : val};
        i++
        return obj;
    },{});
}

module.exports = { 
    passInputIsbnInObj
}