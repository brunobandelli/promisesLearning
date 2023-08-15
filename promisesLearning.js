/*PROMISES*/

/*
 São recursos que permitem lidar com operações assincronas de maneira mais limpa e estruturadas.
 Como fazer solicitações de rede, acessar banco de dados e realizar outras operações que podem levar
algum tempo para serem concluidadas.
 Uma promessa representa um valor que pode estar disponivel agora, no futuro, ou nunca.
Ela possui 3 estados principais:

-PENDING(Pendente): O estado inicial quando a promessa é criada e está aguardando o resultado.
    new Promise

-FULLFILLED(Cumprida): A promesssa foi cumprida com sucesso e o resultado é disponibilizado.
    .then   OU  .try

-REJECTED(Rejeitada): A promessa foi rejeitada, indicando que ocorreu  um erro ou falha no processo.
    .catch
*/

/*
SINTAXE PADRÃO:

new Promise((resolve, reject)=>{
//Operação assincrona
if(//Condição para sucesso){
    resolve('Valor bem sucedido')
}else{
    reject('Erro ou motivo de rejeição')
}
})
.then(resultado=>{
 //Manipula o resultado cumprido
})
.catch(resultado=>{
 //Manipula o erro ou motivo de rejeição.
})

*/

/*
SINTAXE DENTRO DE UMA VARIAVEL:

const promise = new Promise((resolve, reject)=>{
//Operação assincrona
if(//Condição para sucesso){
    resolve('Valor bem sucedido')
}else{
    reject('Erro ou motivo de rejeição')
}
})
promise.then(resultado=>{
 //Manipula o resultado cumprido
})
promise.catch(resultado=>{
 //Manipula o erro ou motivo de rejeição.
})
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*EXEMPLOS*/


/*Perceba os problemas que ocorrem nesse código. SEM A UTILIZAÇÃO DA PROMISE*/

// const numero = document.getElementById("numero")

// let resultado= false
// let tempo= 3000

// // numero.innerHTML="Processando..."    // Neste momento, numero ja assume o valor de "Processando..." e logo após na condição else,   
//                                         //como resultado é false, numero assume o valor de "Deu tudo errado", 
//                                         //porem tudo isso acontece muito rapido e não da para ver.
// setTimeout(()=>{
//     resultado = true
// },tempo)

// if(resultado){
//     numero.innerHTML="Deu tudo certo"
//     numero.classList.remove("erro")
//     numero.classList.add("ok")
// }else{
//     numero.innerHTML="Deu tudo errado"
//     numero.classList.add("erro")
//     numero.classList.remove("ok")
// }

// // numero.innerHTML="Processando..."    // Neste caso, primeiramente numero assume o valor de "Deu tudo errado" na condição,
//                                         //e saindo dela, ele assume o valor de "Processando...",
//                                         //de maneira tudo muito rapida, que não da para ver.





/*---------------------------------------------------------------------------------------------------------------------------------------- */

/*AGORA VEJA DA MANEIRA CORRETA, UTILIZANDO A PROMISE*/

// const numero = document.getElementById("numero")

// let promise = new Promise((resolve,reject)=>{
//     let resultado= false
//     let tempo= 3000
//     setTimeout(()=>{
//         if(resultado){
//             resolve("Deu tudo certo")
//         }else{
//             reject("Deu tudo errado")
//         }
//     },tempo)
// })

// promise.then((retorno)=>{
//     numero.innerHTML=retorno
//     numero.classList.remove("erro")
//     numero.classList.add("ok")
// })

// promise.catch((retorno)=>{
//     numero.innerHTML=retorno
//     numero.classList.add("erro")
//     numero.classList.remove("ok")
// })


// numero.innerHTML="Processando..."  

/*Neste código, a Promise é usada para realizar uma ação assíncrona. 
Inicialmente, o elemento "numero" exibe "Processando...". 
A Promise é executada em segundo plano, prometendo um resultado futuro.
Após 3 segundos (definidos pelo setTimeout), a Promise determina se foi bem-sucedida (resolve) 
ou falhou (reject) com base em uma condição (no caso, o valor de resultado). Dependendo disso, 
os manipuladores then ou catch são acionados. Isso resulta na atualização do conteúdo e 
das classes do elemento "numero" para refletir o resultado da Promise. */