function criaCasa() {
    const conteudo = document.getElementById("tabuleiro");

    let casas = "";
    let cor = "branca";

    for (let index = 1; index <= 64; index++) {
        casas += `<div class="casa" ${cor}>${index}</div>`;

        console.log(cor);

        if (cor % 8 == 0) {
            cor = corAtual(outraCor );
        }
    }

    conteudo.innerHTML = casas;
}



criaCasa ();
