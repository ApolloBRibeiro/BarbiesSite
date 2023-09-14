function Toca () {
    document.querySelector('#som_tecla_pom').play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

document.querySelector('.tecla_pom').onclick = Toca;
