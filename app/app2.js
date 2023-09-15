window.onload = function () {
    const CEP = document.querySelector("#cep");
    cep.addEventListener("blur", buscaCep);
};

function buscaCep() {
    const txtCEP = document.querySelector("#cep").value;
    const URL = `https://viacep.com.br/ws/${txtCEP}/json/`;
    fetch(URL)
    .catch((error) => console.log(error))
    .then((ret) => ret.json())
    .then((jsonData) => {
        console.log(jsonData);
        preencheCampo("#logradouro", jsonData.logradouro);
        preencheCampo("#bairro", jsonData.bairro);
        preencheCampo("#localidade", jsonData.localidade);
        preencheCampo("#uf", jsonData.uf);
        document.querySelector("#numero").focus();
    });
}

function preencheCampo(campo, valor) {
    document.querySelector(campo).value = valor;
}