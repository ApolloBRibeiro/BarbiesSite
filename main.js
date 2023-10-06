function Toca(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');


for ( let Contador = 0; Contador < lista.length; Contador++ ) {

    const tecla = lista[Contador];
    const classe = tecla.classList[1];
   // console.log(classe);

    const idAudio = `#som_${classe}`;
    console.log(idAudio);

    tecla.onclick = function () {
        Toca(idAudio);
    }
   

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