let listaAmigos = [];

function agregarAmigo() {
    let elementoInput = document.getElementById('amigo');
    let amigo = elementoInput.value.trim();
    if (!amigo) {
        alert("Por favor, inserte un nombre.");
    } else {
        listaAmigos.push(amigo);
        elementoInput.value = '';
        actualizarAmigos(listaAmigos);
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
    if (listaAmigos.length != 0) {
        // obtengo el indice aleatorio que corresponde al indice del amigo sorteado
        let randomIndex = Math.floor(Math.random() * listaAmigos.length);
        // obtengo el elemento html
        let resultado = document.getElementById('resultado');
        // limpio la entrada
        resultado.innerHTML = "";
        // asigno el elemento de la lista en la posicion del indice aleatorio, y lo inyecto al elemento html
        resultado.innerHTML = `Amigo sorteado: ${listaAmigos[randomIndex]}`;
    } else {
        alert("No hay amigos para sortear. Por favor, agregue amigos primero.");
        return;
    }
}