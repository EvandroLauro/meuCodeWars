let isbns = {
    0 : '64646464',
    1 : '978-8575228050',
    2 : '978-8573076103',
    3 : '6586057043'
}
let links = ['Nenhum resultado para 64646464.',
    '/Problemas-Cl%C3%A1ssicos-Ci%C3%AAncia-Computa%C3%A7%C3%A3o-Python/dp/8575228056',
    '/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100',
    '/Migrando-Sistemas-Monol%C3%ADticos-Para-Microsservi%C3%A7os/dp/6586057043'
]

function newObj(isbns, links) {
    const valido = {}, invalido = {};
    let isbn = Object.values(isbns)
    for (let i = 0; i < links.length; i++) {
        const categoria = links[i] === `Nenhum resultado para ${isbn[i]}.` ? invalido : valido;
        categoria[isbn[i]] = links[i];
    }
    return {invalido, valido}
}

/*
const newObj = (isbns, links) => {
    let invalidos = {}, validos = {}
    return Object.values(isbns).reduce((obj, isbn, index) => {
        let result 
        if (links[index] == `Nenhum resultado para ${[isbn]}.`) {
            let invalido = Object.assign(invalidos, {[isbn] : links[index]})
            result = {...obj, invalido}
        } else {
            let valido = Object.assign(validos, {[isbn] : links[index]})
            result = {...obj, valido}
        }
        return result
    }, {})
}

const newObj = (chave, links) => { 
    chave = Object.values(chave)
    let invalidos = {}, validos = {}
    for (let i = 0; i < links.length; i++) { 
        if (links[i] == `Nenhum resultado para ${chave[i]}.`) { // tentar colocar esse if num ternario
            let invalido = {
                [chave[i]] : `${links[i]}`
            }
            Object.assign(invalidos, invalido)
        } else {
            let valido = {
                [chave[i]] : links[i]
            }
            Object.assign(validos, valido)
        }
    }
    return Object.assign({invalido : invalidos}, {valido : validos})
}
*/

module.exports = {newObj}