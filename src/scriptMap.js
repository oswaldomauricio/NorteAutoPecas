const estados = [];



const fetchSvg = (image) => {
  fetch(image.src)
    .then((response) => response.text())
    .then((response) => {



      const span = document.createElement('span');
      span.innerHTML = response;
      getActions();
      // Add a click event listener to the new SVG after loading
      document.getElementById('svg-map').addEventListener('click', handleSvgClick);
      return true;
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .catch((error) => {
      console.error('Error fetching or processing SVG:', error);
    });

};


const getActions = () => {
  const states = document.getElementsByClassName('estado');
  for (let i = 0; i < states.length; i++) {
    states[i].onclick = () => {
      stateClicked(states[i]);
    };
  }
  getEstados();
};


const handleSvgClick = (event) => {
  // Verifica se o clique foi em um estado
  const estadoElement = event.target.closest('.estado');
  if (estadoElement) {
    stateClicked(estadoElement);
  }
};


const getEstados = () => {
  fetch('estados.json')
    .then((response) => response.json())
    .then((response) => {
      estados.push(...response);
    });
};

const stateClicked = (state) => {
  const code = state.getAttribute('code');
  const uf = estados.find((estado) => estado.code === code);
  if (!uf) return;
  fillContent(uf);
};




const fillContent = ({ nome, sigla, lojas, code }) => {
  const name = document.getElementById('stateName');
  const haveLoja = document.getElementById('stateDesc');
  const cardMapa = document.querySelector('.cardMapa');
  const mapaFull = document.querySelector('.mapaFull');
  const cardTemplate = document.querySelector('.cardTemplate');

  name.innerHTML = `${nome} - ${sigla}`;
  if (lojas && lojas.length > 0) {
    cardMapa.style.display = "flex";
    console.log(code);
    console.log(lojas);

    lojas.forEach(loja => {
      mapaFull.innerHTML = ""
      const linkEmail = `=mailto:${loja.email}`;
      let estrutura = `<div class="cardTemplate">
        <div class="cardMapa">
                            <img class="imgCard" src="${loja.imgLoja}" alt="">
                            <div class="cardLojasInformacao">
                              <h2 class="nomeLoja">${loja.nomeLoja}</h2>
                              <a class="linkEndereco" href="${loja.enderecoLoja}"><span class="enderecoLoja">${loja.enderecoLoja}</span></a>
                              <a class="linkEmail" href=mailto:${linkEmail}?subject=Assunto do Email&body=Olá, vim pelo site da Norte Auto Peças e gostaria de fazer uma cotação com vocês."><span class="email">${loja.email}</span></a>
                              <div class="cardLojasContatos">
                                <a class="linkWpp" href=""><i class="fa-brands fa-whatsapp"><span class="whatsapp">${loja.whatsapp}</span></i></a>
                                <a class="linkTel" href="" ><i class="fa-solid fa-phone"><span class="telefone">${loja.telefone}</span></i></a>
                              </div>
                            </div>
                          </div>
      </div>`;

      let div = document.createElement('div');
      div.innerHTML = estrutura;
      mapaFull.appendChild(div);
      mapaFull.style.display = "flex";
    });

    // Use cloneNode para criar cópias do cardTemplate
    lojas.forEach(loja => {
      let cardClone = cardTemplate.cloneNode(true);
      cardClone.querySelector('.imgCard').src = loja.imgLoja;
      cardClone.querySelector('.nomeLoja').innerText = loja.nomeLoja;
      cardClone.querySelector('.enderecoLoja').innerText = loja.enderecoLoja;
      cardClone.querySelector('.linkEndereco').href = `https://maps.google.ch/maps?saddr=${loja.enderecoLoja}`;
      cardClone.querySelector('.linkEndereco').target = "_blank";
      cardClone.querySelector('.email').innerText = loja.email;
      cardClone.querySelector('.linkEmail').href = `mailto:${loja.email}?subject=Assunto do Email&body=Olá, vim pelo site da Norte Auto Peças e gostaria de fazer uma cotação com vocês.`;
      cardClone.querySelector('.linkWpp').href = `https://api.whatsapp.com/send/?phone=+55${loja.whatsapp}&text=Olá, vim pelo site da Norte Auto Peças e gostaria de fazer uma cotação com vocês.&type=phone_number&app_absent=0`;
      cardClone.querySelector('.linkWpp').target = "_blank"
      cardClone.querySelector('.linkTel').href = `tel:+55:${loja.telefone}`;
      cardClone.querySelector('.linkTel').target = "_self"
      cardClone.querySelector('.whatsapp').innerText = loja.whatsapp;
      cardClone.querySelector('.telefone').innerText = loja.telefone;

      mapaFull.appendChild(cardClone);
    });

    haveLoja.innerHTML = "Selecione um estado:";
  } else {
    mapaFull.style.display = "none";
    haveLoja.innerHTML = "Nenhuma loja disponível:";
  }
};



getEstados();