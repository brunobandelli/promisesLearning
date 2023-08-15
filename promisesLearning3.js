/*ESTE EXEMPLO AINDA VAMOS CHAMAR A PROMISE POR UMA FUNÇÃO.
POREM FAREMOS DE UMA MANEIRA QUE TEM COMO REAPROVEITAR A PROMISE EM OUTROS MOMENTOS */

const numero = document.getElementById("numero")
const btn_promessa=document.getElementById("btn_promessa")

btn_promessa.addEventListener('click',(evt)=>{
    numero.innerHTML="Processando..."  
    console.log(promessa())                     // NO CONSOLE LOG DO INSPECIONAR, PODEMOS VER EM TEMPO REAL A PROMISSE SENDO EXECUTADA,
                                                //ENQUANTO NÃO PASSAR OS 3 SEGUNDOS, FICARA COM STATUS DE PENDING, 
                                                //APÓS ISSO DE ACORDO COM O RETORONO, IRÁ MOSTRAR FULLFILEED SE DER CERTO 
                                                //E REJECT SE DER ERRADO.

    promessa()                                  // DESSA FORMA O THEN E O CATCH FICAM DIRETAMENTE ASSOCIADOS A FUNÇÃO PROMESSA 
                                                //NO QUAL RECEBERA O RETORNO DA FUNÇÃO, ABAIXO.
        .then((retorno)=>{
            numero.innerHTML=retorno
            numero.classList.remove("erro")
            numero.classList.add("ok")
        })
        
        .catch((retorno)=>{
            numero.innerHTML=retorno
            numero.classList.add("erro")
            numero.classList.remove("ok")
        })
})

const promessa=()=>{
    let p = new Promise((resolve,reject)=>{
        let resultado= true
        let tempo= 3000
        setTimeout(()=>{
            if(resultado){
                resolve("Deu tudo certo")
            }else{
                reject("Deu tudo errado")
            }
        },tempo)
    })
    return p                                //RETORNO DA PROMESSA.
}




numero.innerHTML="Esperando..."  