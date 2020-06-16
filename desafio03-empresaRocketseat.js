const usuario = {
    nome: 'Janaina',
    empresa: {
        nome2: "Rocketseat",
        cor: "Roxo",
        foco: "Programação",
        endereço: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }
    }
}

console.log(`A empresa ${usuario.empresa.nome2} tem foco na área de ${usuario.empresa.foco}, e está localizada na ${usuario.empresa.endereço.rua}, nº ${usuario.empresa.endereço.numero}.`)