//Funções e Metodo 
//criar um programa que calcula a média 
//das turmas de alunos e envia 
//mensagem do cálculo da média

//const alunosTurmaA = [
//  {
//      nome:"Mike",
//      nota:9.8
//    },
//    {
//        nome:"Diego",
//        nota:10

//    },
  //  {
  //      nome:"Fulano",
 //       nota:0
   // }
//]

 //const alunosTurmaB = [
  //  { 
   //     nome:"Claiton",
   //     nota:10
  //  },
   // {
      //  nome:"Robson",
      //  nota:10
   // },
   // {
     //   nome:"Siclano",
   //     nota:10
  //  }
//]
    
// funções na programação serva para eu fazer varias 
//vezes uma mesma coisa sem precisar reescrever

 //   function calculaMedia(alunos) {
      //  return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
   // }
   // const media1 = calculaMedia(alunosTurmaA)
  //  const media2 = calculaMedia(alunosTurmaB)

//estruturar um processo lógico de montagem de funçao
//como o modelo acima

    //function enivaMensagem(media,turma) {
        //se a média for maior que 5, parabenizar a turma
     //   if(media > 5 ) {
      //     console.log ( `A média foi de ${turma} foi de ${media}, Parabéns`)
      //  }else 
           // console.log(`A média da turma ${turma}é menor que 5`)
  //  }

  //  enivaMensagem(media1, 'TurmaA')
   // enivaMensagem(media2, 'TurmaB')




    

// Estrutura de repetição 
//forma de repetir um bloco de código
//estrutura de repetição FOR 




const alunosTurmaA = [
    {

        nome:"Mike",
        nota:9.8
    },
    {
        nome:"Diego",
        nota:10

    },
    {
        nome:"Fulano",
        nota:0
    }
]

const alunosTurmaB = [
    { 
        nome: "Claiton",
        nota: 10
    },
    {
        nome:"Robson",
        nota:10
    },
    {
        nome:"Siclano",
        nota:10
    },
    {
        nome:'Novo aluno',
        nota:5
    }
]

    
//LET,variavel que me permite mudar o valor da variavel i 
//length percorre até o final da lista
//i++ variável que incrementa mais um 


function calculaMedia(alunos) {  
    let soma = 0;
    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
       }
        const media = soma /alunos.length
        return media
}
        
const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)

function enivaMensagem(media,turma) {
    //se a média for maior que 5, parabenizar a turma
    if(media > 5 ) {
        console.log ( `A média da ${turma} foi de ${media}, Parabéns`)
    }else 
        console.log(`A média da turma ${turma}é menor que 5`)
}

enivaMensagem(media1, 'TurmaA')
enivaMensagem(media2,'Turma')

