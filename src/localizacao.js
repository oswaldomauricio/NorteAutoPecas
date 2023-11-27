function coordenadasParaEndereco(latitude, longitude, apiKey) {
  // URL da API OpenCage Geocoding
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

  console.log(url)
  // Faz a solicitação à API usando a Fetch API
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      // Verifica se a solicitação foi bem-sucedida
      if (data.status.code === 200) {
        // Obtém o primeiro resultado (o mais relevante)
        const primeiroResultado = data.results[0];
        // Extrai o endereço formatado
        const enderecoFormatado = primeiroResultado.formatted;
        return enderecoFormatado;
      } else {
        // Se a solicitação falhou, imprime o status da resposta
        console.error(`Falha na solicitação. Status: ${data.status.message}`);
        return null;
      }
    })
    .catch(error => {
      console.error('Erro na solicitação:', error);
      return null;
    });
}

// Substitua 'SUA_CHAVE_API' pela sua chave de API da OpenCage
const chaveApi = '8948ec5b3747440c8f7d5da4401a4144';

function obterCoordenadas() {
  if (navigator.geolocation) {
    // Obtém a localização do usuário
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // const latitude = -2.4576864; // teste
        // const longitude = -54.7285252; // teste

        // Atualiza o conteúdo da página com as coordenadas
        console.log(latitude, longitude);

        // Chama a função para transformar as coordenadas em endereço
        coordenadasParaEndereco(latitude, longitude, chaveApi)
          .then(endereco => {
            if (endereco) {
              console.log(`Coordenadas: (${latitude}, ${longitude})\nEndereço: ${endereco}`);
            } else {
              console.log('Não foi possível obter o endereço.');
            }
          });
      },
      function (error) {
        console.error(`Erro ao obter coordenadas: ${error.message}`);
      }
    );
  } else {
    console.error('Geolocalização não é suportada pelo seu navegador.');
  }
}

// Chama a função ao carregar a página
window.onload = obterCoordenadas;


function calcularDistancia(lat1, lon1, lat2, lon2) {
  const raioTerra = 6371; // Raio médio da Terra em quilômetros
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distancia = raioTerra * c; // Distância em quilômetros

  return distancia;
}

function toRadians(graus) {
  return graus * (Math.PI / 180);
}

function encontrarLojaMaisProxima(usuarioLatitude, usuarioLongitude, lojas) {
  let lojaMaisProxima = null;
  let menorDistancia = Infinity;

  lojas.forEach(loja => {
    const distancia = calcularDistancia(usuarioLatitude, usuarioLongitude, loja.latitude, loja.longitude);
    if (distancia < menorDistancia) {
      menorDistancia = distancia;
      lojaMaisProxima = loja;
    }
  });

  return lojaMaisProxima;
}


function exibirCardLojaMaisProxima(loja) {
  // Aqui você pode implementar a lógica para exibir as informações da loja no seu site.

   // Modifica o link do WhatsApp com base no número da loja mais próxima
   const whatsappButton = document.getElementById("whatsappButton");
   if (whatsappButton) {
     whatsappButton.href = `https://api.whatsapp.com/send/?phone=${loja.whatsapp}&text=Olá, vim pelo site da norte auto peças e gostaria de fazer uma cotação com vocês.&type=phone_number&app_absent=0`;
   }

   //fim

  console.log('Loja mais próxima:', loja);

  //modifica o email e o numero de telefone

//email
  let emailFooter = document.querySelector("#emailFooter")
  emailFooter.innerHTML = loja.telefone;

  let emailLink = document.querySelector("#emailLink");
  emailLink.href = "mailto:" + loja.email + "?subject=Assunto do Email&body=Olá, vim pelo site da norte auto peças e gostaria de fazer uma cotação com vocês.";

  emailLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = emailLink.href;
  });
  //contato
  let contatoFooter = document.querySelector("#contatoFooter")
  contatoFooter.innerHTML = loja.email;

  let contatoLink = document.querySelector("#contatoLink");
  contatoLink.href = "tel:+55:" + loja.telefone + "";

  contatoLink.addEventListener("click", function (event) {
    event.preventDefault();
    // Abre o cliente de e-mail padrão
    window.location.href = contatoLink.href;
  });

  //modifica os cards a partir da loja.

}
navigator.geolocation.getCurrentPosition(
  function (position) {
    const usuarioLatitude = position.coords.latitude;
    const usuarioLongitude = position.coords.longitude;

    // Lista de coordenadas das suas lojas
    const lojas = [
      {
        nome: '101',
        nomeLoja: "Norte - Torquato Tapajos",
        latitude: -3.063095,
        longitude: -60.0262701,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas101@norteautopeças.com.br`
      },
      {
        nome: '102',
        nomeLoja: "Norte - Autaz Mirim",
        latitude: -3.047333,
        longitude: -60.0106471,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas102@norteautopeças.com.br`
      },
      {
        nome: '103',
        nomeLoja: "Norte - Boa Vista",
        latitude: 2.7983872,
        longitude: -60.686336,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas103@norteautopeças.com.br`
      },
      {
        nome: '104',
        nomeLoja: "Norte - Camapuã",
        latitude: -3.0345189,
        longitude: -59.9495248,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas104@norteautopeças.com.br`
      },
      {
        nome: '105',
        nomeLoja: "Norte - Porto Velho",
        latitude: -8.7736326,
        longitude: -63.8729199,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas105@norteautopeças.com.br`
      },
      {
        nome: '106',
        nomeLoja: "Norte - Ariquemes",
        latitude: -9.9092968,
        longitude: -63.0549759,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas106@norteautopeças.com.br`
      },
      {
        nome: '107',
        nomeLoja: "Norte - Rio Branco 1",
        latitude: -9.9929193,
        longitude: -67.8079518,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas107@norteautopeças.com.br`
      },
      {
        nome: '108',
        nomeLoja: "Norte - Silves",
        latitude: -3.0469117,
        longitude: -60.0147795,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas108@norteautopeças.com.br`
      },
      {
        nome: '109',
        nomeLoja: "Norte - Jaru",
        latitude: -10.4377012,
        longitude: -62.4713272,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas109@norteautopeças.com.br`
      },
      {
        nome: '110',
        nomeLoja: "Norte - Piorini",
        latitude: -3.0604889,
        longitude: -60.0147343,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas110@norteautopeças.com.br`
      },
      {
        nome: '111',
        nomeLoja: "Norte - Rio Branco 2",
        latitude: -9.9581952,
        longitude: -67.8166528,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas111@norteautopeças.com.br`
      },
      {
        nome: '112',
        nomeLoja: "Norte - Santarém",
        latitude: -1.3631488,
        longitude: -48.4671488,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas112@norteautopeças.com.br`
      },
      {
        nome: '114',
        nomeLoja: "Norte - Itaituba",
        latitude: -4.2537166,
        longitude: -56.0035462,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas114@norteautopeças.com.br`
      },
      {
        nome: '115',
        nomeLoja: "Norte - Cacoal",
        latitude: -11.4392994,
        longitude: -61.4542333,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas115@norteautopeças.com.br`
      },
      {
        nome: '201',
        nomeLoja: "Sudeste - Santarém",
        latitude: -2.4543232,
        longitude: -54.7291136,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas201@norteautopeças.com.br`
      },
      {
        nome: '202',
        nomeLoja: "Sudeste - Marabá",
        latitude: -5.3613466,
        longitude: -49.0794125,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas202@norteautopeças.com.br`
      },
      {
        nome: '203',
        nomeLoja: "Sudeste - Altamira",
        latitude: -3.2122637,
        longitude: -52.2322213,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas203@norteautopeças.com.br`
      },
      {
        nome: '204',
        nomeLoja: "",
        latitude: 0.0774784,
        longitude: -51.0656303,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas204@norteautopeças.com.br`
      },
      {
        nome: '205',
        nomeLoja: "Sudeste - Marituba",
        latitude: -1.370983,
        longitude: -48.3618731,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas205@norteautopeças.com.br`
      },
      {
        nome: '206',
        nomeLoja: "Sudeste - Parauapebas",
        latitude: -6.0796246,
        longitude: -49.8670794,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas206@norteautopeças.com.br`
      },
      {
        nome: '207',
        nomeLoja: "Sudeste - Novo Progresso",
        latitude: -7.0328241,
        longitude: -55.4175541,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas207@norteautopeças.com.br`
      },
      {
        nome: '301',
        nomeLoja: "Norte - Flores",
        latitude: -3.0517867,
        longitude: -59.985839,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas301@norteautopeças.com.br`
      },
      {
        nome: '302',
        nomeLoja: "Norte - Piorini 2",
        latitude: -2.9986227,
        longitude: -60.0145096,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas302@norteautopeças.com.br`
      },
      {
        nome: '303',
        nomeLoja: "Norte - Boa Vista 2",
        latitude: 2.8019255,
        longitude: -60.694431,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas303@norteautopeças.com.br`
      },
      {
        nome: '401',
        nomeLoja: "Norte - Boa Vista 3",
        latitude: 2.8201189,
        longitude: -60.6947645,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas401@norteautopeças.com.br`
      },
      // { nome: '402', latitude: , longitude: },
      // { nome: '403', latitude: , longitude: },
      // { nome: '404', latitude: , longitude: },
      {
        nome: '501',
        nomeLoja: "Norte - Imperatriz",
        latitude: -5.080419,
        longitude: -45.6007108,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas501@norteautopeças.com.br`
      },
      {
        nome: '502',
        nomeLoja: "Norte - Balsas",
        latitude: -7.5300864,
        longitude: -46.0455936,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas502@norteautopeças.com.br`
      },
      {
        nome: '503',
        nomeLoja: "Norte - São Luis",
        latitude: -2.6173989,
        longitude: -44.2548369,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas503@norteautopeças.com.br`
      },
      {
        nome: '601',
        nomeLoja: "Norte - Ji-Paraná",
        latitude: -10.8941543,
        longitude: -61.9293508,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas601@norteautopeças.com.br`
      },
      // { nome: '801', latitude: , longitude: },
      {
        nome: '802',
        nomeLoja: "Norte - Redenção",
        latitude: -8.0443914,
        longitude: -50.0260215,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas802@norteautopeças.com.br`
      },
      {
        nome: '701',
        nomeLoja: "Norte - Vitoria da Conquista",
        latitude: -14.8610929,
        longitude: -40.8499632,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas701@norteautopeças.com.br`
      },
      {
        nome: '901',
        nomeLoja: "Norte - Contagem",
        latitude: -19.9131136,
        longitude: -44.0434688,
        endereco: "Av. Torquato Tapajós, 923, bairro da paz Manaus/AM - Cep: 69049-110",
        whatsapp: "92984583209", 
        telefone: "922129-1500",
        email: `vendas901@norteautopeças.com.br`
      },





      // Adicione as coordenadas de todas as suas lojas
    ];

    // Encontrar a loja mais próxima
    const lojaMaisProxima = encontrarLojaMaisProxima(usuarioLatitude, usuarioLongitude, lojas);

    // Exibir as informações da loja mais próxima
    if (lojaMaisProxima) {
      exibirCardLojaMaisProxima(lojaMaisProxima);
    } else {
      console.log('Não foi possível encontrar a loja mais próxima.');
    }
  },
  function (error) {
    console.error(`Erro ao obter coordenadas: ${error.message}`);
  }
);