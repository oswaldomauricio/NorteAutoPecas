// let btnHeaderLojas = document.querySelector(".btnHeaderLojas");
// let cardLojas = document.querySelector(".cardLojas");

// btnHeaderLojas.addEventListener('click', ip)
// function ip() {
//   fetch("https://ipinfo.io/?token=5aa4443825f4df")
//     .then(response => response.json())
//     .then(localizacao => {
//       var atualoc = localizacao["region"];

//       if (atualoc === "Amazonas") {
//         var containerDeLojas = document.querySelector("#containerDeLojas");
//         if (containerDeLojas.classList.contains('close')) {
//           containerDeLojas.classList.remove("close");

//         } else {
//           containerDeLojas.classList.add("close");
//         }
//       }
//     })
//     .catch(error => {
//       var containerDeLojas = document.getElementById("containerDeLojas");

//       if (containerDeLojas.classList.contains('close')) {
//         containerDeLojas.classList.add("close");
//       } else {
//         console.error("Error: Unable to close containerDeLojas", error);
//       }
//     });
// }






// // Dados de várias lojas
// var lojas = [
//   {
//     nome: "Norte - Torquato Tapajos",
//     endereco: "Av. Torquato Tapajós, 923, Bairro da Paz, Manaus/AM",
//     telefone1: "(92) 2129-1515",
//     telefone2: "(92) 2129-1515",
//     imagemSrc: "style/public/img/FotoLoja/101/101.jpg"
//   },
//   {
//     nome: "Outra Loja",
//     endereco: "Endereço da Outra Loja, Cidade, Estado",
//     telefone1: "(92) 1234-5678",
//     telefone2: "(92) 9876-5432",
//     imagemSrc: "style/public/img/FotoLoja/102/102.jpeg"
//   },
//   {
//     nome: "Outra Loja",
//     endereco: "Endereço da Outra Loja, Cidade, Estado",
//     telefone1: "(92) 1234-5678",
//     telefone2: "(92) 9876-5432",
//     imagemSrc: "style/public/img/FotoLoja/104/104.jpeg"
//   },
//   {
//     nome: "Outra Loja",
//     endereco: "Endereço da Outra Loja, Cidade, Estado",
//     telefone1: "(92) 1234-5678",
//     telefone2: "(92) 9876-5432",
//     imagemSrc: "style/public/img/FotoLoja/108/108.jpeg"
//   },
//   {
//     nome: "Outra Loja",
//     endereco: "Endereço da Outra Loja, Cidade, Estado",
//     telefone1: "(92) 1234-5678",
//     telefone2: "(92) 9876-5432",
//     imagemSrc: "style/public/img/FotoLoja/110/110.jpeg"
//   }
// ];

// // Função para criar cartões de loja

// function criarCartaoLoja(nome, endereco, telefone1, telefone2, imagemSrc) {
//   // Criação dos elementos HTML
//   var divCardLojas = document.createElement("div");
//   divCardLojas.className = "cardLojas";

//   var divCardLojasCampo = document.createElement("div");
//   divCardLojasCampo.className = "cardLojasCampo";

//   var imagem = document.createElement("img");
//   imagem.src = imagemSrc;
//   imagem.alt = "";

//   var divCardLojasInformacao = document.createElement("div");
//   divCardLojasInformacao.className = "cardLojasInformacao";

//   var h1 = document.createElement("h1");
//   h1.textContent = nome;

//   var spanEndereco = document.createElement("span");
//   spanEndereco.textContent = endereco;

//   var divCardLojasContatos = document.createElement("div");
//   divCardLojasContatos.className = "cardlojasContatos";

//   var iWhatsapp1 = document.createElement("i");
//   iWhatsapp1.className = "fa-brands fa-whatsapp";

//   var spanTelefone1 = document.createElement("span");
//   spanTelefone1.textContent = telefone1;

//   var iWhatsapp2 = document.createElement("i");
//   iWhatsapp2.className = "fa-brands fa-whatsapp";

//   var spanTelefone2 = document.createElement("span");
//   spanTelefone2.textContent = telefone2;

//   // Adiciona os elementos ao DOM na ordem desejada
//   divCardLojasContatos.appendChild(iWhatsapp1);
//   divCardLojasContatos.appendChild(spanTelefone1);
//   divCardLojasContatos.appendChild(iWhatsapp2);
//   divCardLojasContatos.appendChild(spanTelefone2);

//   divCardLojasInformacao.appendChild(h1);
//   divCardLojasInformacao.appendChild(spanEndereco);
//   divCardLojasInformacao.appendChild(divCardLojasContatos);

//   divCardLojasCampo.appendChild(imagem);
//   divCardLojasCampo.appendChild(divCardLojasInformacao);

//   divCardLojas.appendChild(divCardLojasCampo);

//   // Adiciona o cartão de loja ao elemento desejado no DOM
//   var containerDeLojas = document.getElementById("containerDeLojas");
//   containerDeLojas.appendChild(divCardLojas);
// }

// // Adiciona os cartões de loja ao elemento desejado no DOM
// var containerDeLojas = document.getElementById("containerDeLojas");

// lojas.forEach(function (loja) {
//   criarCartaoLoja(
//     loja.nome,
//     loja.endereco,
//     loja.telefone1,
//     loja.telefone2,
//     loja.imagemSrc
//   );
// });
