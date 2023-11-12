function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

document.addEventListener("DOMContentLoaded", function () {
    const forms = document.forms;
    const buttons = document.querySelectorAll(".buttons input");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        handleButtonClick(button.value);
      });
    });
  
    document.addEventListener("keydown", function (event) {
      const keyPressed = event.key;
  
      // Verifica se a tecla pressionada corresponde a uma tecla da calculadora
      if (keyPressed.match(/[0-9+\-*/.=]/)) {
        event.preventDefault();
        handleButtonClick(keyPressed);
      } else if (keyPressed === "Backspace") {
        event.preventDefault();
        handleButtonClick("DEL");
      } else if (keyPressed === "Enter") {
        event.preventDefault();
        handleButtonClick("=");
      }
    });
  
    function handleButtonClick(value) {
      if (value === "AC") {
        forms.answer.value = "";
      } else if (value === "DEL") {
        forms.answer.value = forms.answer.value.slice(0, -1);
      } else if (value === "=") {
        forms.answer.value = eval(forms.answer.value);
      } else {
        forms.answer.value += value;
      }
    }
  });
  
  

