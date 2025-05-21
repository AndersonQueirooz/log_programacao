function saldo(vitorias, derrotas){
    let subtrair = vitorias - derrotas
    return subtrair
}

let resultado = saldo (70, 25)

function classificacaoHeroi(result){
    let classificacao;
    if (result <= 10){
        classificacao = "Ferro"
    } else if (result >= 11 && result <= 20){
        classificacao = "Bronze"
    } else if (result >= 21 && result <= 50){
        classificacao = "Prata"
    } else if (result >= 51 && result <= 80){
        classificacao = "Ouro"
    } else if (result >= 81 && result <= 90){
        classificacao = "Diamante"
    } else if (result >= 91 && result <= 100){
        classificacao = "Lendário"
    } else {
        classificacao = "Imortal"
    }

    console.log (`O Herói tem saldo de ${resultado} vitórias e está no nível ${classificacao}`)
}

classificacaoHeroi(resultado);