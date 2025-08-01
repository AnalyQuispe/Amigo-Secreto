// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let nameAmigo = document.getElementById(`amigo`).value;
    //Verificar si el campo está vacío
    if (nameAmigo === "") {
        alert("Por favor inserte un nombre.");
        return;
    }
    //Agregar el nombre al array amigos
    amigos.push(nameAmigo);
    document.getElementById(`amigo`).value = "";
    actualizarAmigos();
    console.log(amigos);
    console.log(amigos.length);
}

function actualizarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let index = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[index];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
    console.log(amigoSorteado);
}
