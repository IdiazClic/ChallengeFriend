// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let ganadores = JSON.parse(localStorage.getItem("ganadores")) || []; // Cargar lista de ganadores guardada

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let mensajeError = document.getElementById("mensajeError");
    let nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        mensajeError.textContent = "⚠️ Debes ingresar un nombre.";
        mensajeError.style.color = "red";
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        mensajeError.textContent = "⚠️ Este amigo ya está en la lista.";
        mensajeError.style.color = "red";
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    mensajeError.textContent = ""; 
    renderizarAmigos();
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function renderizarGanadores() {
    let listaGanadores = document.getElementById("listaGanadores");
    listaGanadores.innerHTML = ""; 

    ganadores.forEach((ganador) => {
        let item = document.createElement("li");
        item.textContent = ganador;
        listaGanadores.appendChild(item);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "⚠️ No hay amigos para sortear.";
        resultado.style.color = "red";
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    if (!ganadores.includes(amigoSorteado)) {
        ganadores.push(amigoSorteado);
        localStorage.setItem("ganadores", JSON.stringify(ganadores));
    }

    resultado.innerHTML = `🎊 El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
    resultado.style.color = "green";
    renderizarGanadores();
}

function reiniciarLista() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("mensajeError").innerHTML = "";
}
