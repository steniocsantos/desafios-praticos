function criaCasa() {
    const tabuleiro = document.getElementById("tabuleiro");

    const dados = [1, 2, 3, 4, 9, 6, 7, 7, 2];

    let conteudo = "";
    
    dados.forEach((e, i) => {conteudo += `<div class="casa ${retornaCor(i)}">Elemento ${e} (Posição ${i})</div>` });

    tabuleiro.innerHTML = conteudo;
    }

criaCasa();

function retornaCor(numero) {
    let retorno = "";

    for(let index = 1; index <= 8; index++) {
        
        if (numero % 2 == 0){
            retorno = "branca";
        }
        
        

    }return retorno;

    /*switch (numero) {
        case 1:
        case 4:
            retorno = "branca";
            break;
    } return retorno;*/
}