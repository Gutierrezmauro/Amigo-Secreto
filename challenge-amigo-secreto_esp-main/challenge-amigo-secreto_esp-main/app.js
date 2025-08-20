// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let ListaDeAmigoSecreto = [];
let valorAmigo = "";


function agregarAmigo() {
      valorAmigo = document.querySelector("#valorDelAmigo").value;
     console.log(valorAmigo);
   if (valorAmigo == ""){
    alert("Por favor, inserte un nombre"); 
   } else{
     ListaDeAmigoSecreto.push(valorAmigo);

   }console.log(ListaDeAmigoSecreto);
   valorAmigo = document.querySelector("#valorDelAmigo").value = "";
}


