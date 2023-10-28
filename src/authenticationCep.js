function ip(){
  $.getJSON(
    "https://ipinfo.io?token=5aa4443825f4df",
    function (localizacao) {
      var atualoc = localizacao["city"];
      if(atualoc == "Manaus"){
        $("#emailHeader").html("Vendas@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1515");
      }
      
    }
  );
}
ip()

if(ip() == 'Manaus'){
  atualoc = "teste"
  $("#cliente").html(atualoc);
}