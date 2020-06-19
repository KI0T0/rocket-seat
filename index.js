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

/*

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

*/


/* ====================================================
    OPERADORES LÓGICOS

    && "E"  As duas condições devem ser verdadeiras
            para que a condição final seja verdadeira.
    
    || "OU" Uma das condições deve ser verdadeira
            para que a condição final seja verdadeira.

    !  "NÃO"    Nega uma condição.

===================================================== */


/*console.log(5 == 5 && 6 == 6) //true
console.log(5 == 5 && 6 != 6) //false 

console.log(5 == 5 || 6 == 6) //true
console.log(5 == 5 || 6 != 6) //true

console.log(!(5 > 6)) //true
console.log(!(5 < 6)) //false*/

/*
Desafios para fortalecer alguns 
conceitos, entre eles:

Variáveis;
Condicionais;
Operadores.
-------------------------------------------
Cálculo de IMC
Crie um programa para calcular o IMC 
e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o 
nome, peso, altura e sexo de uma 
pessoa, por exemplo:

const nome = "Carlos";
const peso = 84;
const altura = 1.88;

A partir desses dados armazene 
em uma constante chamada imc 
o cálculo do índice de massa corporal 
definido pela fórmula abaixo:

peso / (altura * altura);

Baseado no valor obtido através 
desse cálculo exiba as seguintes mensagens:

SE o IMC maior ou igual a 30: 
Carlos você está acima do peso;

SE o IMC menor que 29.9: 
Carlos você não está acima do peso;

*/

/*const nome = "Carlos";
const peso = 84;
const altura = 1.88;



const imc = peso / (altura * altura);

if(imc >= 30){
    console.log("Carlos você está acima do peso")
}else{
    console.log("Carlos, você não está acima do peso")
}*/

/*
----------------------------------------------------

Cálculo de aposentadoria
Crie um programa para calcular 
a aposentadoria de uma pessoa.

Obs.: Esse cálculo é fictício, 
dentro da aposentadoria existem 
muitos outros fatores para serem 
levados em conta :)

Comece criando constantes para armazenar nome, 
sexo, idade e contribuicao(em anos), por exemplo:

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
Baseado nos valores acima utilize as fórmulas 
a seguir para calcular se a pessoa está apta 
ou não para se aposentar e no fim imprima uma 
mensagem em tela.

O tempo de contribuição mínimo para homens é de 35 
anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a soma da idade com o 
tempo de contribuição do homem precisa ser de no 
mínimo 95 anos, enquanto a mulher precisa ter no 
mínimo 85 anos na soma;
Com base nas regras acima imprima na tela as 
mensagens:

SE a pessoa estiver aposentada: 
Silvana, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: 
Silvana, você ainda não pode se aposentar!;
Dica: Você pode unir duas condições, veja o 
exemplo abaixo

if (condicao1) {
  if (condicao2) {
    // Condição 1 e 2 passaram
  } else {
    // Condição 1 passou, porém condição 2 não passou
  }
} else {
  // Condição 1 não passou
}
*/

/*
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

if(sexo=='F'){
    if(idade+contribuicao>=85){
        console.log("Parabéns, você está aposentada!")
    }
    else{
        console.log("Que pena, você ainda não pode se aposentar!")
    }
}else{
    if(idade+contribuicao>=95){
        console.log("Parabéns, você está aposentado!")
    }
    else{
        console.log("Que pena, você ainda não pode se aposentar!")
    }
}

*/


//OBJETOS

/*const aluno01 = {
    nome: "Mayk",
    nota: 9.8
}

const aluno02 = {
    nome:"Diego",
    nota: 10
}

const aluno03 = {
    nome: "Fulano",
    nota: 2
}

console.log(aluno01.nota)
*/

//VETOR ou ARRAY

/*const alunos = [
    {
        nome: "Mayk",
        nota: 9.8
    },
    {
        nome: "Diego",
        nota: 10

    },
    {
        nome: "Fulano",
        nota: 2
    }
]

const nomesDeAlunos = ["Mayk", "Diego", "Fulano"]
console.log(alunos[2])
console.log(nomesDeAlunos[2],nomesDeAlunos[1])
*/


//---------------------------------------------


//FUNÇÃO

//Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média

/*
const alunosDaTurmaA = 
    [
        {
            nome:"Mayk",
            nota:1.8
        },
        {
            nome:"Diego",
            nota:0
        },
        {
            nome:"Fulano",
            nota:2
        }
    ]

const alunosDaTurmaB = 
    [
        {
            nome:"Cleiton",
            nota:10
        },
        {
            nome:"Robson",
            nota:10
        },
        {
            nome:"Siclano",
            nota:0
        }
    ]

function calculaMedia(alunos){
    return(alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')


function enviaMensagem(media, turma){
    if(media > 5){
        console.log(`A media da ${turma} foi de ${media}. Parabéns!`)
    }else{
        console.log(`A média da ${turma} é menor que 5`)
    }
}
*/


//DESAFIO 1-2

/*Desafios para fortalecer alguns conceitos, 
entre eles:

Objetos;
Vetores.

---------------------------------------------------
Construção e impressão de objetos
Crie um programa que armazena dados da empresa 
Rocketseat dentro de um objeto chamado empresa. 
Os dados a serem armazenados são:

Nome: Rocketseat

Cor: Roxo

Foco: Programação

Endereço:

Rua: Rua Guilherme Gembala
Número: 260
Obs.: Para armazenar os dados de endereço da 
empresa você pode criar objetos intercalados, 
por exemplo:

const usuario = {
  nome: "Diego",
  empresa: {
    nome: "Rocketseat"
  }
};
Imprima em tela utilizando console.log o nome 
da empresa e seu endereço no seguinte formato:

A empresa Rocketseat está localizada em 
Rua Guilherme Gembala, 260
Obs. Para imprimir em tela utilize o formato de 
template strings, por exemplo

console.log(`O nome do usuário é ${usuario.nome}`);
*/

const usuario = {
    nome: 'Diego',
    empresa: {
      nome: 'Rocketseat',
      cor: 'Roxo',
      foco: 'Programação',
      End: {
        rua: 'Rua Guilherme Gembala',
        num: 260
      }
    }
  };

  console.log(`A empresa ${usuario.empresa.nome} está 
  localizada em ${usuario.empresa.End.rua},
  ${usuario.empresa.End.num}`)


 //----------------------------------------------------
/*
Vetores e objetos
Crie um programa com um objeto para armazenar dados 
de um programador como nome, idade e tecnologias que 
trabalha.

Um programador pode trabalhar com várias tecnologias, 
por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome 
e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
Por exemplo:

const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};
Imprima em tela o nome e especialidade da primeira 
tecnologia que o usuário utiliza no seguinte formato:

O usuário Carlos tem 32 anos e usa a tecnologia C++ 
com especialidade em Desktop

*/

const programador = {
    nome:'Felipe',
    idade: 29,
}

const tecnologias = {
    propriedade: [
        {nome:'C++', especialidade: 'Desktop'},
        {nome:'Java', especialidade: 'Mobile'},
        {nome: 'C#', especialidade: 'Desktop'},
        {nome: 'JavaScript', 
        especialidade: 'Desktop/Mobile'}
    ]
}

console.log(`O usuário ${programador.nome} tem 
${programador.idade} anos e usa a tecnologia 
${tecnologias.propriedade[3].nome} com especialidade 
em ${tecnologias.propriedade[3].especialidade}`)

