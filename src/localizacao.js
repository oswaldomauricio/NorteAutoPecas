// function ip(){
//   $.getJSON(
//     "https://ipinfo.io/200.208.171.162?token=5aa4443825f4df",
//     // "https://ipinfo.io?token=5aa4443825f4df",
//     function (localizacao) {
//       var atualoc = localizacao["city"];
//       if(atualoc == "Amazonas"){
//         $("#emailHeader").html("vendas@norteautopeças.com.br");
//         $("#contatoHeader").html("(92) 2129-1500");
//         $("#emailFooter").html("Vendas@norteautopeças.com.br");
//         $("#contatoFooter").html("(92) 2129-1500");
//       } else if(atualoc == "Para"){
//         $("#emailHeader").html("v");
//         $("#contatoHeader").html("(92) 2129-1500");
//         $("#emailFooter").html("vendas112@norteautopeças.com.br");
//         $("#contatoFooter").html("(92) 2129-1500");
//       } else if(atualoc == "Belém"){
//         $("#emailHeader").html("");
//         $("#contatoHeader").html("(92) 2129-1500");
//         $("#emailFooter").html("vendas112@norteautopeças.com.br");
//         $("#contatoFooter").html("(92) 2129-1500");
//       } else if(atualoc == "Marabá"){
//         $("#emailHeader").html("vendas202@norteautopeças.com.br");
//         $("#contatoHeader").html("(92) 2129-1500");
//         $("#emailFooter").html("vendas202@norteautopeças.com.br");
//         $("#contatoFooter").html("(92) 2129-1500");
//       } else if(atualoc == "Parauapebas"){
//         $("#emailHeader").html("vendas206@norteautopeças.com.br");
//         $("#contatoHeader").html("(92) 2129-1500");
//         $("#emailFooter").html("vendas206@norteautopeças.com.br");
//         $("#contatoFooter").html("(92) 2129-1500");
//       } else if(atualoc == "Marituba"){
//         $("#emailHeader").html("vendas205@norteautopeças.com.br");
//         $("#contatoHeader").html("(92) 2129-1500");
//         $("#emailFooter").html("vendas205@norteautopeças.com.br");
//         $("#contatoFooter").html("(92) 2129-1500");
//       } else if(atualoc == "Altamira"){
//         $("#emailHeader").html("vendas203@norteautopeças.com.br");
//         $("#contatoHeader").html("(92) 2129-1500");
//         $("#emailFooter").html("vendas203@norteautopeças.com.br");
//         $("#contatoFooter").html("(92) 2129-1500");
//       } else if(atualoc == "Itaituba"){
//         $("#emailHeader").html("vendas114@norteautopeças.com.br");
//         $("#contatoHeader").html("(92) 2129-1500");
//         $("#emailFooter").html("vendas114@norteautopeças.com.br");
//         $("#contatoFooter").html("(92) 2129-1500");
//       } else if(atualoc == "Redenção"){
//         $("#emailHeader").html("vendas802@norteautopeças.com.br");
//         $("#contatoHeader").html("(92) 2129-1500");
//         $("#emailFooter").html("vendas802@norteautopeças.com.br");
//         $("#contatoFooter").html("(92) 2129-1500");
//       } else if(atualoc == "Novo Progresso"){
//         $("#emailHeader").html("vendas206@norteautopeças.com.br");
//         $("#contatoHeader").html("(92) 2129-1500");
//         $("#emailFooter").html("vendas206@norteautopeças.com.br");
//         $("#contatoFooter").html("(92) 2129-1500");
//       } 

//     }
//   );
// }
// ip()


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
  // Aqui você pode implementar a lógica para exibir as informações da loja no seu site
  console.log('Loja mais próxima:', loja);
}
navigator.geolocation.getCurrentPosition(
  function (position) {
    const usuarioLatitude = position.coords.latitude;
    const usuarioLongitude = position.coords.longitude;

    // Lista de coordenadas das suas lojas
    const lojas = [
      { nome: '101', latitude: -3.0632173, longitude: -60.027991 },
      { nome: '102', latitude: -3.0564041, longitude: -59.9505123 },
      { nome: '103', latitude: 2.7985708, longitude: 60.7066736 },
      { nome: '104', latitude: -3.0345189, longitude: -59.9495248 },
      { nome: '105', latitude: -8.7753127, longitude: -63.8802034 },
      { nome: '106', latitude: -9.9092968, longitude: -63.0549759 },
      { nome: '107', latitude: -9.9929193, longitude: -67.8079518 },
      { nome: '108', latitude: -3.1310813, longitude: -59.9897314 },
      { nome: '109', latitude: -10.4377012, longitude: -62.4713272 },
      { nome: '110', latitude: -3.0013989, longitude: -60.0053942 },
      { nome: '111', latitude: -10.0120592, longitude: -67.783332 },
      { nome: '112', latitude: -2.450292, longitude: -54.7298145 },
      { nome: '114', latitude: -4.2537166, longitude: -56.0035462 },
      { nome: '115', latitude: -11.4392994, longitude: -61.4542333 },
      { nome: '201', latitude: -2.4576275, longitude: -54.7282424 },
      { nome: '202', latitude: -5.3613466, longitude: -49.0794125 },
      { nome: '203', latitude: -3.2122637, longitude: -52.2322213 },
      { nome: '204', latitude: 0.0774784, longitude: -51.0656303 },
      { nome: '205', latitude: -1.370983, longitude: -48.3618731 },
      { nome: '206', latitude: -6.0796246, longitude: -49.8670794 },
      { nome: '207', latitude: -7.0328241, longitude: -55.4175541 },
      { nome: '301', latitude: -3.0517867, longitude: -59.985839 },
      { nome: '302', latitude: -2.9986227, longitude: -60.0145096 },
      { nome: '303', latitude: 2.8019255, longitude: -60.694431 },
      { nome: '401', latitude: 2.8201189, longitude: -60.6947645 },
      // { nome: '402', latitude: , longitude: },
      // { nome: '403', latitude: , longitude: },
      // { nome: '404', latitude: , longitude: },
      { nome: '501', latitude: -5.4847569, longitude: -47.4720687 },
      { nome: '502', latitude: -7.5197783, longitude: -46.0565048 },
      { nome: '503', latitude: -2.6173989, longitude: -44.2548369 },
      { nome: '601', latitude: -10.8941543, longitude: -61.9293508 },
      // { nome: '801', latitude: , longitude: },
      { nome: '802', latitude: -8.0443914, longitude: -50.0260215 },
      { nome: '701', latitude: -14.8610929, longitude: -40.8499632 },
      { nome: '901', latitude: -19.9296021, longitude: -44.0073979 },




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