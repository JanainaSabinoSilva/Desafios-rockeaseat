// CRIAR PROGRAMA PARA CÁLCULO DE IMC
// USAR CONSTANTES PARA NOME, PESO, ALTURA E IMC
// IMC DEFINIDO POR PESO / ALTURA * ALTURA
// SE O IMC >= 30 A PESSOA ESTÁ ACIMA DO PESO
// SE O IMC < 29.9 A PESSOA NÃO ESTÁ ACIMA DO PESO

const nome = 'Daniel'
const peso = 62
const altura = 1.69

const imc = (peso / (altura*altura))

if (imc >= 30) {
    console.log (`${nome}, você está acima do peso`)
} else (imc < 29.9) ;{
    console.log (`${nome}, você não está acima do peso`)
}


