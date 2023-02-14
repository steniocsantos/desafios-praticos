function calcula () {
    const conteudo = document.getElementById("calculadora");

    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    let resultado = document.getElementById("resultado")
    let imc = (peso / (altura * altura));

    resultado = `Seu IMC é ${imc}`;
    conteudo.innerHTML = resultado;
} 

