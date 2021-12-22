const qs = q => document.querySelector(q);

const $ = id => document.getElementById(id);

window.onload = () => {
let main = qs('main');
let h2 = document.querySelector('h2');
let a = qs('a');
let p = qs('p');

let nombre = prompt('Decime tu nombre');

if(nombre){
    h2.innerText += " " + nombre
}else{
    h2.innerText += " Invitado"
}

       h2.style.textTransform = "uppercase";
       a.style.color = "#E51B3E";

let response = confirm("¿Desea colocar un fondo de pantalla?");

if(response){
    document.body.classList.add('fondo')
}

for (let i = 0; i < parrafos.lenght; i++){
    
    if(i%2==0){
        parrafos[i].classList.add('destacadoPar')
    }else{
        parrafos[i].classList.add('destacadoImpar')
    }
}
}