/*
                     Enough is enough!
                     
Delete occurrences of an element if it occurs more than n times
Alice and Bob were on a holiday. Both of them took many pictures
of the places they've been, and now they want to show Charlie their
entire collection. However, Charlie doesn't like these
sessions, since the motive usually repeats. He isn't fond of
seeing the Eiffel tower 40 times. He tells them that he will
only sit during the session if they show the same motive at most N
times. Luckily, Alice and Bob are able to encode the motive as a 
number. Can you help them to remove numbers such that their list
contains each number only up to N times, without changing the order?

*/

var albumComRepetidos = [20, 37, 20, 21, 20, 40, 21, 10]
var maxDeRepetidos = 1
function limitaRepetidos(album, max) {
    let newAlbum = []
    for (let i = 0; i < album.length; i++) {
        let fotoContada = contaFoto(album[i], newAlbum)
        if (fotoContada < max) {
            newAlbum.push(album[i])
        }
    }
    return newAlbum
}

function contaFoto(foto, newAlbum){
    let conta = 0
    for (let i = 0; i <  newAlbum.length; i++) {
        if (newAlbum[i] == foto || newAlbum[i] == 0) {
            conta++
        }
    }
    return conta
}

module.exports = {limitaRepetidos}