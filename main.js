function Toca () {
    document.querySelector('#som_tecla_pom').play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < 9) {
    lista[Contador].onclick = Toca;
    const clase = lista[Contador].classList[1];
    Contador = Contador + 1;
    console.log(Contador);
}

if (Contador = 9) {
    Contador = 0;
    console.log(Contador);
}