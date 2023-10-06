function Toca(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

for ( let Contador < lista.length) {

    const tecla = lista[tecla];
    const classe = lista[tecla].classList[1];
   // console.log(classe);

    const idAudio = `#som_${classe}`;
    console.log(idAudio);

    }
   

    Contador = Contador + 1;

    tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code ==='Enter') {
    tecla.classList.add('ativa');
   // console.log(evento.code === 'Space' || evento.code ==='Enter');
    }

    

    tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
    }
   
    // console.log(Contador);
    
}
}

// if (Contador = 9) {
// Contador = 0;
//console.log(Contador);
//}