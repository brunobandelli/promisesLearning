/*ESTE EXEMPLO VAMOS CHAMAR A PROMISE POR UMA FUNÇÃO. */

const numero = document.getElementById("numero")
const btn_promessa=document.getElementById("btn_promessa")

btn_promessa.addEventListener('click',(evt)=>{                                  //O BOTÃO QUE ESTÁ CHAMANDO A PROMISSE.
    numero.innerHTML="Processando..."  
    let promise = new Promise((resolve,reject)=>{
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
    
    promise.then((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    
    promise.catch((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })

} )




numero.innerHTML="Esperando..."  

//VEJA O PROXIMO EXEMPLO.