let btnHeaderLojas = document.querySelector(".btnHeaderLojas");
let body = document.querySelector('body', '.swiper-slide')

body.addEventListener('click', cliqueFora )
btnHeaderLojas.addEventListener('click', function (event) {
    ip(event);
});

function ip(event) {
    var containerDeLojas = document.getElementById("containerDeLojas");

    // Verifica se o contêinerDeLojas está vazio
    if (containerDeLojas.children.length > 0) {
        event.preventDefault();

        // Limpa os cartões existentes antes de adicionar novos
        containerDeLojas.innerHTML = "";

        
    } else {
        localizacaoAtual();
    }
}

function cliqueFora(event) {
    var containerDeLojas = document.getElementById("containerDeLojas");

    if (
        containerDeLojas.children.length > 0 &&
        !event.target.closest(".btnHeaderLojas") &&
        !event.target.closest("#containerDeLojas")
    ) {
        containerDeLojas.innerHTML = "";
    }
}

// Dados de várias lojas
var lojasEndpoint = 'estados.json';

// Função para criar cartões de loja
function criarCartaoLoja(lojas) {
    // Assuming lojas is an array of store objects
    lojas.forEach(function (loja) {
        // Criação dos elementos HTML
        var divCardLojas = document.createElement("div");
        divCardLojas.className = "cardLojas";

        var divCardLojasCampo = document.createElement("div");
        divCardLojasCampo.className = "cardLojasCampo";

        // Uncomment this if you have an "imgLoja" property in your JSON data
        var imagem = document.createElement("img");
        imagem.src = loja.imgLoja;
        imagem.alt = "";

        var divCardLojasInformacao = document.createElement("div");
        divCardLojasInformacao.className = "cardLojasInformacao";

        var h1 = document.createElement("h1");
        h1.textContent = loja.nomeLoja;

        var spanEndereco = document.createElement("span");
        spanEndereco.textContent = loja.enderecoLoja;

        var email = document.createElement("div");
        email.textContent = loja.email;

        var divCardLojasContatos = document.createElement("div");
        divCardLojasContatos.className = "cardlojasContatos";

        var iWhatsapp1 = document.createElement("i");
        iWhatsapp1.className = "fa-brands fa-whatsapp";

        var spanTelefone1 = document.createElement("span");
        spanTelefone1.textContent = loja.telefone;

        var iWhatsapp2 = document.createElement("i");
        iWhatsapp2.className = "fa-brands fa-whatsapp";

        var spanTelefone2 = document.createElement("span");
        spanTelefone2.textContent = loja.whatsapp;

        // Adiciona os elementos ao DOM na ordem desejada
        divCardLojasContatos.appendChild(iWhatsapp1);
        divCardLojasContatos.appendChild(spanTelefone1);
        divCardLojasContatos.appendChild(iWhatsapp2);
        divCardLojasContatos.appendChild(spanTelefone2);

        divCardLojasInformacao.appendChild(h1);
        divCardLojasInformacao.appendChild(spanEndereco);
        divCardLojasInformacao.appendChild(email);
        divCardLojasInformacao.appendChild(divCardLojasContatos);

        // Uncomment this if you have an "imgLoja" property in your JSON data
        divCardLojasCampo.appendChild(imagem);
        divCardLojasCampo.appendChild(divCardLojasInformacao);

        divCardLojas.appendChild(divCardLojasCampo);

        // Adiciona o cartão de loja ao elemento desejado no DOM
        var containerDeLojas = document.getElementById("containerDeLojas");
        containerDeLojas.appendChild(divCardLojas);
    });
}

const localizacaoAtual = () => {
    fetch("https://ipinfo.io/?token=5aa4443825f4df")
        .then(response => response.json())
        .then(localizacao => {
            var atualoc = localizacao.region;

            // Fetch data from the endpoint
            fetch(lojasEndpoint)
                .then(response => response.json())
                .then(lojasData => {
                    // Adiciona os cartões de loja ao elemento desejado no DOM
                    lojasData.forEach(function (item) {
                        // Check if the region matches the current location
                        if (item.nome == atualoc) {
                            // Assuming 'lojas' is the property containing the array of stores
                            criarCartaoLoja(item.lojas);
                        }
                    });
                });
        });
};
