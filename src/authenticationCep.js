function ip(){
  $.getJSON(
    "https://ipinfo.io?token=5aa4443825f4df",
    function (localizacao) {
      var atualoc = localizacao["city"];
      if(atualoc == "Manaus"){
        $("#emailHeader").html("vendas@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("Vendas@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Pará"){
        $("#emailHeader").html("vendas@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas201@norteautopeças.com.br");
        $("#contatoFooter").html("(95) 2129-1500");
      }
      
    }
  );
}
ip()

