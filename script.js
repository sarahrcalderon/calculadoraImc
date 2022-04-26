const calculate = document.getElementById("calculate");
var input = document.getElementById("name");
input.focus();

function imc() {
  const name = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if (name !== "" && height !== "" && weight !== "") {
    const valorIMC = (weight / (height * height)).toFixed(2);

    let classificacao = "";
    if (valorIMC < 18.5) {
      classificacao = "você está abaixo do peso!";
    } else if (valorIMC < 24.9) {
      classificacao = "você está com o peso ideal!";
    } else if (valorIMC < 25) {
      classificacao = "você está levemente acima do peso!";
    } else if (valorIMC < 29.9) {
      classificacao = "você está com obesidade grau 1!";
    } else if (valorIMC < 40) {
      classificacao = "você está com obesidade grau 2";
    } else {
      classificacao = "você está com obesidade grau 3, cuidado!";
    }

    result.textContent = `${name}, seu IMC é ${valorIMC} e ${classificacao}`;
  } else {
    result.textContent = "Por favor, preencha todos os campos!";
  }
}

calculate.addEventListener("click", imc);
