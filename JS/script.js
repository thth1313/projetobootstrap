//alert("Olá mundo")
/*console.error("Se voçe é front-ender, vai me encontrar!")*/

let nome = document.querySelector("#nome")
nome.addEventListener('keyup',validarCampo)

function validarCampo(){
    //console.log(nome.value)
    if(nome.value ==""){
        nome.classList.remove("border-success")
        nome.classList.add("border","border-danger")

    }
    else{
        nome.classList.remove("border-danger")
        nome.classList.add("border","border-success")

    }
}
/*INSERIR ENDEREÇO EM CAMPO E LEITURA*/
let endereco = document.querySelector("#endereco")
let leitura = document.querySelector("input[readonly]")

endereco.addEventListener("keyup",function(){
    leitura.value = endereco.value
})
