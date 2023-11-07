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

// Definindo os botões da calculadora
const buttons = document.querySelectorAll(".calculator-button");
const inputOperation = document.querySelector(".calculator-operation");
const inputResult = document.querySelector(".calculator-operation-result");

// Adicionando manipuladores de eventos para os botões da calculadora
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText === "C") {
      // Limpar a entrada
      inputOperation.textContent = "";
      inputResult.textContent = "";
    } else if (buttonText === "=") {
      try {
        // Calcular o resultado da operação
        const result = eval(inputOperation.textContent);
        inputResult.textContent = result;
      } catch (error) {
        // Exibir erro se a entrada for inválida
        inputResult.textContent = "Erro";
      }
    } else {
      // Adicionar o texto do botão à entrada
      inputOperation.textContent += buttonText;
    }
  });
});

// Adicionando manipulador de evento para o botão de tema escuro/claro
const toggler = document.getElementById("toggler");
toggler.addEventListener("click", () => {
  const calculator = document.querySelector(".calculator");
  calculator.classList.toggle("dark");
});
