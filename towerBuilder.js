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
function torre(tamanhoDaTorre) {
  let pedrasPorAndar = numPedrasPorAndar(tamanhoDaTorre)
  let pedrasCriada = criandoPedras(pedrasPorAndar)
  return posicionandoAsPedras(pedrasCriada, pedrasPorAndar)  
}

function numPedrasPorAndar(tamanhoDaTorre) {
  let inicio = 0
  let pedra = 1
  let listaPedras = []
  while (inicio < tamanhoDaTorre) {
    inicio++
    listaPedras.push(pedra)
    pedra = pedra + 2
  }
  return listaPedras
}

function criandoPedras(pedrasPorAndar) {
  let pedrasCriada = []
  for (let i = 0; i < pedrasPorAndar.length; i++) {
    let inicio = 0
    let pedra = "*"
    let pedraIncio = ""
    while (inicio < pedrasPorAndar[i]) {
      inicio++
      pedraIncio = pedraIncio + pedra
    }
    pedrasCriada.push(pedraIncio)
  }
  return pedrasCriada
}

function posicionandoAsPedras(pedrasCriada, pedrasPorAndar) {
  let primeiroAndar  = pedrasPorAndar[pedrasPorAndar.length -1]
  let listaPedrasPosicionada = []
  for (let i = 0; i < pedrasCriada.length; i++) {
    let espaço = " "
    let numeroDeEspaço = primeiroAndar - pedrasPorAndar[i]
    let espaçoDividido = numeroDeEspaço / 2
    let criaEspaço = espaço.repeat(espaçoDividido)
    let pedrasPosicionada = criaEspaço + pedrasCriada[i] + criaEspaço
    listaPedrasPosicionada.push(pedrasPosicionada)
  }
  return listaPedrasPosicionada
}

module.exports = {torre, numPedrasPorAndar, criandoPedras, posicionandoAsPedras}

