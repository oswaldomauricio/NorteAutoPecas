const estados = [];

const fetchSvg = (image) => {
  fetch(image.src)
    .then((response) => response.text())
    .then((response) => {
      const span = document.createElement('span');
      span.innerHTML = response;
      const inlineSvg = span.getElementsByTagName('svg')[0];
      image.parentNode.replaceChild(inlineSvg, image);
      return true;
    })
    .then(() => {
      getActions();
      // Adiciona um evento de clique no SVG após carregar
      document.getElementById('svg-map').addEventListener('click', handleSvgClick);
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
      let estrutura = `<div class="cardMapa">
                          <img class="imgCard" src="${loja.imgLoja}" alt="">
                          <div class="cardLojasInformacao">
                            <h2 class="nomeLoja">${loja.nomeLoja}</h2>
                            <span class="enderecoLoja">${loja.enderecoLoja}</span>
                            <span class="email">${loja.email}</span>
                            <div class="cardLojasContatos">
                              <div><i class="fa-brands fa-whatsapp"><span class="whatsapp">${loja.whatsapp}</span></i></div>
                              
                              <div><i class="fa-solid fa-phone"><span class="telefone">${loja.telefone}</span></i></div>
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
      cardClone.querySelector('.email').innerText = loja.email;
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