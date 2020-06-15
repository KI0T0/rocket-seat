/*const nome = 'KI0T0 Bootcamp'
console.log(nome)*/


//Criar um programa que calcula a média
//das notas entre os alunos e envia
//mensagem do cálculo da média.

/*const aluno01 = 'Mayk'
const notaAluno01 = 9.8
const aluno02 = 'Diego'
const notaAluno02 = 10
const aluno03 = 'Fulano'
const notaAluno03 = 2



const media = (notaAluno01 + notaAluno02 + notaAluno03)/3


//Se a média for maior que 5, parabenizar a turma


if (media > 5){
    console.log(`A média da turma foi de ${media}... Parabéns!`)


}else{
    console.log('A média da turma foi menor que 5')

}
*/


/*
================================================

OPERADORES DE COMPARAÇÃO

>           Maior
<           Menor
>=          Maior ou igual a
<=          Menor ou igual a
==          Igual a
===         Igual e do mesmo tipo
!=          Diferente de
!==         Diferente, inclusive do tipo

=================================================*/

console.log(5 > 4) //true
console.log(5 < 4) //false
console.log(5 >= 4) //true
console.log(4 <= 4) //true

console.log(4 == '4') //true
console.log(4 === '4') //false
console.log(4 != '5') //true
console.log(4 !== '5') //true


//DESAFIO 1

const idade = 17

//verificar se a pessoa é maior ou igual a 18 anos
//se sim, deixar a pessoa entrar, se não, bloquear a entrada
if (idade>=18){
    console.log('Deixar entrar')
}else{
    console.log('Bloquear a entrada')
}

//se a pessoa tiver 17 anos
//avisar para voltar quando fizer 18 anos

if (idade === 17){
    console.log('Volte quando tiver 18 anos.')
}

