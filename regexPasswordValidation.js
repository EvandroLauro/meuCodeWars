/*
function validate(password) {
    let regex = password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
    let result = ''
    if (regex == null) {
        result = password + ' - Expected false'
    } else {
        result = password + ' - Expected true'
    }
    console.log(result)
    return result
}
*/



function validate(password) {
    const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/
    return password + ' - Expected ' + re.test(password);
}

module.exports = {validate}