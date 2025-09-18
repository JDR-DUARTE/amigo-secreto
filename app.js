// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){
        let nombre='';
        nombre = document.getElementById('amigo').value.trim();
        console.log(nombre);
        if(nombre===''){
            alert('Espacio vacio , escribir un nombre');
            document.getElementById('amigo').value="";
        }else if(/\d/.test(nombre)){
            alert('El nombre no debe tener digitos , solo letras');
            document.getElementById('amigo').value="";
        }else{
            document.getElementById("resultado").innerHTML = "";
            amigos.push(nombre);
            console.log(amigos);
            document.getElementById('amigo').value="";
            actualizarLista();
        }
}
function actualizarLista(){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML="";
    for(let i=0;i<amigos.length;i++){
        let list =document.createElement('li');
        list.textContent=amigos[i];
        lista.appendChild(list);
    }
}

function sortearAmigo(){

    if(amigos.length>0){
        document.getElementById("listaAmigos").innerHTML = "";
        let indice =  Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[indice];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML="";
        let li = document.createElement('li');
        li.textContent='El amigo secreto sorteado es '+ amigoSorteado;
        resultado.appendChild(li);

    }else{
        alert('No tienes amigos en tu lista, Agrega algunos');
    }
}

function limpiar(){
    amigos=[];
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").innerHTML = "";
}