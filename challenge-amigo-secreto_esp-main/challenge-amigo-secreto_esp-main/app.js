// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let ListaDeAmigoSecreto = [];
let valorAmigo = "";
let listaDeAmigo = "";
let numeroAleatorio = 0;
let resultadoAmigo = "";

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
 //console.log(listaDeAmigo);
        //ListaDeAmigoSecreto = ['Renault', 'Peugeot', 'Tesla'];
    for (let i = 0; i < ListaDeAmigoSecreto.length; i++) {
         let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = ListaDeAmigoSecreto[i];
        listaDeAmigo.appendChild(nuevoElemento);
       
  }
} 

function sortearAmigo(){
  numeroAleatorio = Math.floor(Math.random()*ListaDeAmigoSecreto.length);
  console.log(numeroAleatorio);
  if (ListaDeAmigoSecreto.length == 0 ){
    alert("Debe insertar un nombre para poder realizar el sorteo"); 
  } else {
    ListaDeAmigoSecreto[numeroAleatorio];
    resultadoAmigo = document.querySelector("#resultado");
    resultadoAmigo.innerHTML = "El ganador es " + ListaDeAmigoSecreto[numeroAleatorio];
  }

}






