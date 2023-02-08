function criaCasa() {
    const conteudo = document.getElementById("tabuleiro");

    let casas = "";

    for (let index = 1; index <= 64; index++) {
        casas += '<div class="casa"></div>';
    }


    conteudo.innerHTML = casas;

}

criaCasa ();
