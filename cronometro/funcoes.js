window.onload = function () {

    let segundos = 00;
    let decimos = 00;

    let acrescentaSegundos = document.getElementById("segundos");
    let acrescentaDecimos = document.getElementById("decimos");

    let botaoIniciar = document.getElementById('botao-iniciar');
    let botaoParar = document.getElementById('botao-parar');
    let botaoZerar = document.getElementById('botao-zerar');

    let Interval;

    botaoIniciar.onclick = function () {
        clearInterval (Interval);
        Interval = setInterval (iniciaContador, 10);
    }

    botaoParar.onclick = function () {
        clearInterval (Interval);
    }

    botaoZerar.onclick  = function () {
        clearInterval (Interval);
        decimos = "00";
        segundos = "00";
        acrescentaDecimos.innerHTML = decimos;
        acrescentaSegundos.innerHTML = segundos;
    }

    function iniciaContador () {
        decimos++;

        if (decimos <= 9 ) {
            acrescentaDecimos.innerHTML = "0" + decimos;
        }

        if (decimos > 9) {
            acrescentaDecimos.innerHTML = decimos;
    
        }

        if (decimos > 99) {
            console.log ("segundos");
            segundos++;
            acrescentaSegundos.innerHTML  = "0" + segundos;
            decimos = 0;
            acrescentaDecimos.innerHTML = "0" + 0;
        }

        if (segundos > 9) {
            acrescentaSegundos.innerHTML = segundos;
        }
    }
}