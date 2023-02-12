function criaCasa() {
    const conteudo = document.getElementById("tabuleiro");

    let casas = "";
    let cor = "branca";
   

    for (let index = 1; index <= 64; index++) {
        casas += `<div class='casa ${cor}'></div>`;

        cor = alteraCor(cor);

        if (index % 8 == 0) {
            cor = alteraCor(cor);

        }
    }

    conteudo.innerHTML = casas;
}

function alteraCor (corAtual) {
    return corAtual == "branca" ? "" : "branca";
  } 
    

criaCasa ();
