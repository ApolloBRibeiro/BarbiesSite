function Toca (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < lista.length) {
        lista[Contador].onclick = function () {
            Toca ('#som_tecla_toim');
        }
    const classe = lista[Contador].classList[1];
    console.log(classe);
    Contador = Contador + 1;
    console.log(Contador);
}

// if (Contador = 9) {
   // Contador = 0;
    //console.log(Contador);
//}