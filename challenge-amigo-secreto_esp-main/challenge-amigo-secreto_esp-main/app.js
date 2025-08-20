// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let ListaDeAmigoSecreto = [];
let valorAmigo = "";
let listaDeAmigo = "";


function agregarAmigo() {
      valorAmigo = document.querySelector("#valorDelAmigo").value;
     console.log(valorAmigo);
   if (valorAmigo == ""){
    alert("Por favor, inserte un nombre"); 
   } else{
     ListaDeAmigoSecreto.push(valorAmigo);

   }console.log(ListaDeAmigoSecreto);
   valorAmigo = document.querySelector("#valorDelAmigo").value = "";
   actualizarLista();
}

function actualizarLista() {
 listaDeAmigo = document.getElementById("listaAmigos");
 listaDeAmigo.innerHTML = "";

        //ListaDeAmigoSecreto = ['Renault', 'Peugeot', 'Tesla'];
    for (let i = 0; i < ListaDeAmigoSecreto.length; i++) {
         let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = ListaDeAmigoSecreto[i];
        listaDeAmigo.appendChild(nuevoElemento);
       //ListaDeAmigoSecreto[0] = "<li>" + ListaDeAmigoSecreto[i] + "</li>";
        //listaDeAmigoSecreto[0] va a ser igual a renault
        //console.log('Ma marque de voiture préférée est : ' + voiture[i]);
}
//listaDeAmigo.innerHTML = ListaDeAmigoSecreto
} 
//actualizarLista();




