let listaAmigos = [];

function agregarAmigo() {
    let elementoInput = document.getElementById('amigo');
    let amigo = elementoInput.value;
    if (amigo) {
        listaAmigos.push(amigo);
        elementoInput.value = '';
        actualizarAmigos(listaAmigos);
    } else {
        alert("Por favor, inserte un nombre.")
    }
}

function actualizarAmigos(array) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    array.forEach(element => {
        let amigo = document.createElement('li');
        amigo.innerHTML = element;
        lista.appendChild(amigo);
    });
}


function sortearAmigo() {
    if (listaAmigos != 0) {
        // obtengo el indice aleatorio que corresponde al indice del amigo sorteado
        let randomIndex = Math.floor(Math.random() * listaAmigos.length);
        // obtengo el elemento html
        let resultado = document.getElementById('resultado');
        // limpio la entrada
        resultado.innerHTML = "";
        // asigno el elemento de la lista en la posicion del indice aleatorio, y lo inyecto al elemento html
        resultado.innerHTML = listaAmigos[randomIndex];
    }
}