const {newObj} = require('../criandoObjsApartirDeLoops.js')

describe('Criando objetos apartir de loops', () => {
    test('Testando', () => {
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
        let result = {
            invalido: { '64646464': 'Nenhum resultado para 64646464.' },
            valido: {
                '978-8575228050': '/Problemas-Cl%C3%A1ssicos-Ci%C3%AAncia-Computa%C3%A7%C3%A3o-Python/dp/8575228056',
                '978-8573076103': '/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100',
                '6586057043': '/Migrando-Sistemas-Monol%C3%ADticos-Para-Microsservi%C3%A7os/dp/6586057043'
            }
        }
        expect(newObj(isbns, links)).toEqual(result)
    })
})