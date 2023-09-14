function Toca () {
    document.querySelector('#som_tecla_pom').play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < 9) {
    lista[0].onclick = Toca;
    Contador = Contador + 1;
}


