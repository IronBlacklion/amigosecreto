const listaAmigos= [];
const inputAmigo = document.getElementById("amigo"); 
const ulListaAmigos = document.getElementById("listaAmigos"); 
const ulResultado = document.getElementById("resultado");


function agregarAmigo() {
     if (inputAmigo.value  === ""){
            alert("Por favor, ingrese un nombre valido"); 
            return;
        }
        
     listaAmigos.push(inputAmigo.value);
     ulListaAmigos.innerHTML = ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
     inputAmigo.value = "";
     inputAmigo.focus();

};

function sortearAmigo() {
    const random = Math.floor((Math.random() * listaAmigos.length));
    const amigoSecreto= listaAmigos[random];
    ulResultado.innerHTML = `<li>🎊El amigo secreto es🎉: ${amigoSecreto}</li;`
};


