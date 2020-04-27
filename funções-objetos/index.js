const usuarios = [
    {nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    {nome: "Jasmine", tecnologias:["JavaScript", "CSS" ]},
    {nome: "Tuane", tecnologias: ["HTML", "Node.js"]}
];

function checarSeusuarioUsaCSS(usuarios) {

    for (let usuario of usuarios) {
        console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
    }
}


    function checarSeusuarioUsaCSS(usuario) {
        for (let tecnologia of usuario.tecnologias)
            if (tecnologia =='CSS') return true 
    

     return false
    }

for ( let i=0; i < usuarios.length; i++) {
    const usuarioTrabalhacomCSS = checarSeusuarioUsaCSS (usuarios[i])

    if(usuarioTrabalhacomCSS) {
         console.log(`O usuário ${usuarios [i].nome} trabalha com CSS`)
    }
}



const usuario = [
    {
        nome:"Salvio", 
        receitas:[115.3,48.7,98.3, 14.5],
        despesas:[85.3, 13.5 ,120.0] 

    },
    {
        nome:"Marcio", 
        receitas:[24.6,241.3,45.3],
        despesas:[185.3, 12.1,120.0] 

    },
    {
        nome:"Lucia", 
        receitas:[9.8, 120.3, 340.2, 45.3],
        despesas:[450.2, 29.9] 

    }
]; 

function calculaSaldo(receitas,despesas){
    const somaDeReceitas = somaNumeros(receitas);
    const somaDeDespesas = somaNumeros(despesas);
    return somaDeReceitas-somaDeDespesas;
}

function somaNumeros(numeros){

    let resultado = 0;
    for(let numero of numeros){
        resultado += numero;
    }
    return resultado;
}

function calculareceitasedespesas(usuarios){
    for (let usuario of usuarios) {
        const saldo = calculaSaldo(usuario.receitas,usuario.despesas)
        if ( saldo >=0 ) {
            console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo}`)
        } else { 
            console.log(`${usuario.nome} possui saldo negativo de ${saldo}`)
        }
    }
}     
    calculareceitasedespesas(usuario)

   

const user = {
    name: "Mariana",
    transactions: [],
    balance:0,
};
    function createTransaction (transaction){
        user.transactions.push(transaction)
    

    if(transaction.type ==='credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type) {
    let getHigherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if( transaction.type == type && transaction.value> higherValue) {
        higherValue = transaction.value
        getHigherTransaction = transaction
        }
}
    return getHigherTransaction
   
}
function getAverageTransactionValue(){
    let sum = 0

    for (let transaction of user.transactions){
        sum += transaction.value
    }
     return sum / user.transactions.length
}


    function getHigherTransactionsCount(){
        let count = {
            credit: 0,
            debit: 0
        }
    }

    for (let transaction of user.transactions) {
        if (transaction.type === 'credit'){
            count.credit++
    } else {
            count.debit++
    }
     return count
}

createTransaction({type:'credit', value:50})
createTransaction({type:'credit', value:120})
createTransaction({type:'debit', value:80})
createTransaction({type:'debit', value:30})

console.log(user.balance) // 60

console.log(getHigherTransactionByType ('credit'))

console.log(getHigherTransactionByType ('credit'))


console.log(getAverageTransactionValue())


console.log(getHigherTransactionsCount())

