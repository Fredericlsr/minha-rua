const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputComplemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");

const BASE_URL = "https://brasilapi.com.br/api"

inputCep.onkeyup = async (evento) => {
    //verificando se o cep foi digitado completo
    if( inputCep.value.length < 8){
        return;
    }
//fazendo uma requisição a api para buscar as informações do cep digitado
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
        method: "GET",
    });

    //extraindo o json da resposta
    const conteudoResposta = await resposta.json();

    //atribuindo o dados da resposta nos inputs do HTML
    inputRua.value = conteudoResposta.street;
    inputComplemento.value = conteudoResposta.city;
    inputBairro.value = conteudoResposta.neighborhood;
    inputUF.value = conteudoResposta.state;



    console.log(conteudoResposta);
    //alert("cep completo: " + inputCep.value);
};