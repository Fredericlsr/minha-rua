const inputCep = document.querySelector("#cep");
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

    console.log(resposta);
    alert("cep completo: " + inputCep.value);
};