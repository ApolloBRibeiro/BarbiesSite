function Toca () {
    document.querySelector('#som_tecla_pom').play();
}
const lista = document.querySelectorAll('.tecla');

document.querySelector('.tecla_pom').onclick = Toca;
