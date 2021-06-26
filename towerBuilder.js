/*
for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/
function toTowerBuilder(numFloors) {
    let folhasPorAndar = numFolhasPorAndar(numFloors)
    console.log(folhasPorAndar)

}

function numFolhasPorAndar(numFloors) {
    let altura = numFloors
    let folhas = 1
    let inicio = 0
    let listFolhas = []
    while (inicio < altura) {
        inicio++
        listFolhas.push(folhas)
        folhas = folhas + 2
    }
    return listFolhas
}
//toTowerBuilder(3)
module.exports = {numFolhasPorAndar, toTowerBuilder}

