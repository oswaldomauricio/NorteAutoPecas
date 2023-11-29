let btnHeaderLojas = document.querySelector(".btnHeaderLojas");
let body = document.querySelector('body', '.swiper-slide')

body.addEventListener('click', cliqueFora)
btnHeaderLojas.addEventListener('click', function (event) {
    buscarIp(event);
});

function buscarIp(event) {
    var containerDeLojas = document.getElementById("containerDeLojas");

    if (containerDeLojas.children.length > 0) {
        event.preventDefault();

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

var lojasEndpoint = 'estados.json';

function criarCartaoLoja(lojas) {
    lojas.forEach(function (loja) {
        var divCardLojas = document.createElement("div");
        divCardLojas.className = "cardLojas";

        var divCardLojasCampo = document.createElement("div");
        divCardLojasCampo.className = "cardLojasCampo";

        var containerDeLojas = document.getElementById("containerDeLojas");
        containerDeLojas.appendChild(divCardLojas);

        divCardLojas.addEventListener("click", function () {
            redirecionarParaWhatsApp(loja.whatsapp);
        });

        var imagem = document.createElement("img");
        imagem.src = loja.imgLoja;
        imagem.alt = "";

        var divCardLojasInformacao = document.createElement("div");
        divCardLojasInformacao.className = "cardLojasInformacao";

        var h1 = document.createElement("h1");
        h1.textContent = loja.nomeLoja;

        var spanEndereco = document.createElement("div");
        spanEndereco.className = "spanEndereco";
        spanEndereco.textContent = loja.enderecoLoja;

        var email = document.createElement("div");
        email.className = "email"
        email.textContent = loja.email;

        var divCardLojasContatos = document.createElement("div");
        divCardLojasContatos.className = "cardlojasContatos";


        var telefone = document.createElement("i");
        telefone.className = "fa-solid fa-phone";

        var spanTelefone1 = document.createElement("span");
        spanTelefone1.textContent = loja.telefone;

        var iWhatsapp2 = document.createElement("i");
        iWhatsapp2.className = "fa-brands fa-whatsapp";

        var spanTelefone2 = document.createElement("span");
        spanTelefone2.textContent = loja.whatsapp;

        divCardLojasContatos.appendChild(telefone);
        divCardLojasContatos.appendChild(spanTelefone1);
        divCardLojasContatos.appendChild(iWhatsapp2);
        divCardLojasContatos.appendChild(spanTelefone2);

        divCardLojasInformacao.appendChild(h1);
        divCardLojasInformacao.appendChild(spanEndereco);
        divCardLojasInformacao.appendChild(email);
        divCardLojasInformacao.appendChild(divCardLojasContatos);

        divCardLojasCampo.appendChild(imagem);
        divCardLojasCampo.appendChild(divCardLojasInformacao);

        divCardLojas.appendChild(divCardLojasCampo);

        var containerDeLojas = document.getElementById("containerDeLojas");
        containerDeLojas.appendChild(divCardLojas);
    });
}
function redirecionarParaWhatsApp(numero) {
    var mensagem = encodeURIComponent("Olá, vim pelo site da Norte Auto Peças e gostaria de fazer uma cotação com vocês.");
    var linkWhatsApp = `https://api.whatsapp.com/send/?phone=+55${numero}&text=${mensagem}&type=phone_number&app_absent=0`;
    window.open(linkWhatsApp, '_blank');
}

const localizacaoAtual = () => {
    fetch("https://ipinfo.io/?token=5aa4443825f4df")
        .then(response => response.json())
        .then(localizacao => {
            var atualoc = localizacao.region;

            fetch(lojasEndpoint)
                .then(response => response.json())
                .then(lojasData => {
                    // Adiciona os cartões de loja ao elemento desejado no DOM
                    var lojasEncontradas = lojasData.find(item => item.nome === atualoc);

                    if (lojasEncontradas) {
                        criarCartaoLoja(lojasEncontradas.lojas);
                    } else {
                        exibirCartoesDaLoja101();
                    }
                });
        });
};

function exibirCartoesDaLoja101() {
    var dadosLoja101 = {
        nomeLoja: "Clique aqui e veja nossas lojas:",
    };

    var textoLoja = document.createElement("p");
    textoLoja.className = "textoSemLoja";
    textoLoja.textContent = dadosLoja101.nomeLoja;

    var containerDeLojas = document.getElementById("containerDeLojas");
    if (containerDeLojas) {
        containerDeLojas.innerHTML = "";

        containerDeLojas.appendChild(textoLoja);

        containerDeLojas.addEventListener('click', function () {
            window.location.href = '../map.html';
        });
    } else {
        console.error("Elemento 'containerDeLojas' não encontrado.");
    }
}