function Toca(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < lista.length) {

    const tecla = lista[Contador];
    const classe = lista[Contador].classList[1];
   // console.log(classe);

    const idAudio = `#som_${classe}`;
    console.log(idAudio);

    lista[Contador].onclick = function () {
        Toca(idAudio);
    }
   

    Contador = Contador + 1;

    tecla.onkeydown = function (evento) {
    tecla.classList.add('ativa')
    console.log(evento.code);
    }

    

    tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
    }
   
    // console.log(Contador);
    
 

}


// if (Contador = 9) {
// Contador = 0;
//console.log(Contador);
//}