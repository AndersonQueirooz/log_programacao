function tipoAtaque(heroi) {
    let tipo;
    if (heroi.tipo === "Mago") {
        tipo = "usando magia";
    } else if (heroi.tipo === "Guerreiro") {
        tipo = "usando espada";
    } else if (heroi.tipo === "Monge") {
        tipo = "usando artes marciais";
    } else {
        tipo = "usando shuriken";
    }

    console.log(`O ${heroi.tipo} ${heroi.nome} atacou ${tipo}`);
}

class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
}

let meuHeroi = new heroi("Anderson Queiroz", 21, "Ninja");

tipoAtaque(meuHeroi);
