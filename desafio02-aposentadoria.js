//CRIAR UM PROGRAMA PARA CÁLCULO DE APOSENTADORIA
//CRIAR CONTESTANTES PARA ARMAZENAR NOME, SEXO, 
//IDADE E CONTRIBUIÇÃO (EM ANOS)
//UTILIZAR FÓRMULAS PARA CALCULAR SE A PESSOA ESTÁ
//APTA OU NÃO PARA SE APOSENTAR E NO FIM IMPRIMIR
//UMA MENSAGEM NA TELA COM: VOCÊ PODE SE APOSENTAR E
//VOCÊ AINDA NÃO PODE SE APOSENTAR.
//O TEMPO DE CONTRIBUIÇÃO MÍNIMO PARA MASC. É DE 35A
//E O TEMPO PARA FEMIN. É DE 30.
//UTILIZANDO A REGRA DE 85-95 A SOMA DA IDADE COM O
//TEMPO DE CONTRIBUIÇÃO DO MASCULINO PRECISA SER NO
//MINIMO DE 95 ANOS E FEMININO 85 NA SOMA.

const nome = 'Daniel';
const sexo = 'M';
const idade = 27;
const contribuição = 10;
const aposentadoria = (idade + contribuição);

const aposentadoriaHomem = sexo == 'M' && contribuição >= 35 && aposentadoria >= 95;
const aposentadoriaMulher = sexo == 'F' && contribuição >= 30 && aposentadoria >= 85;

if (aposentadoriaHomem || aposentadoriaMulher) {
    console.log (`${nome}, você pode se aposentar!`)
} else {
    console.log (`${nome}, você ainda não pode se aposentar!`)
}