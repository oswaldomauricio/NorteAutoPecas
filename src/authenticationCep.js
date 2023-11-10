function ip(){
  $.getJSON(
    "https://ipinfo.io/201.90.82.242?token=5aa4443825f4df",
    // "https://ipinfo.io?token=5aa4443825f4df",
    function (localizacao) {
      var atualoc = localizacao["city"];
      if(atualoc == "Amazonas"){
        $("#emailHeader").html("vendas@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("Vendas@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Para"){
        $("#emailHeader").html("v");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas112@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Belém"){
        $("#emailHeader").html("");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas112@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Marabá"){
        $("#emailHeader").html("vendas202@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas202@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Parauapebas"){
        $("#emailHeader").html("vendas206@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas206@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Marituba"){
        $("#emailHeader").html("vendas205@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas205@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Altamira"){
        $("#emailHeader").html("vendas203@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas203@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Itaituba"){
        $("#emailHeader").html("vendas114@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas114@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Redenção"){
        $("#emailHeader").html("vendas802@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas802@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Novo Progresso"){
        $("#emailHeader").html("vendas206@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas206@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } 
      
    }
  );
}
ip()

