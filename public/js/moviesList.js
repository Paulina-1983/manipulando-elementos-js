const qs = q => document.querySelector(q);

const $ = id => document.getElementById(id);

window.onload = () => {
let body = qs('body');
let h1 = qs('h1');

let modo = prompt('¿Desea modo oscuro?');

if(modo){
    body.style.backgroundColor = "#7f7f7f​";
    document.body.classList.add("fondoMoviesList");
}
     h1.innerText = "LISTADO DE PELICULAS";
     h1.style.color = "white";
     h1.style.backgroundColor = "teal";
     h1.style.padding = "20px";
}