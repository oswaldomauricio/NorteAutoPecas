function ip(){
  $.getJSON(
    "https://ipinfo.io/?token=5aa4443825f4df",
    // "https://ipinfo.io?token=5aa4443825f4df",
    function (localizacao) {
      var atualoc = localizacao["city"];
      if(atualoc == "Manaus"){
        $("#emailHeader").html("vendas@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("Vendas@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Santarém"){
        $("#emailHeader").html("vendas112@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas112@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Belém"){
        $("#emailHeader").html("vendas112@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas112@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Santarém"){
        $("#emailHeader").html("vendas112@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas112@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Santarém"){
        $("#emailHeader").html("vendas112@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas112@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Santarém"){
        $("#emailHeader").html("vendas112@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas112@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Santarém"){
        $("#emailHeader").html("vendas112@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas112@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Santarém"){
        $("#emailHeader").html("vendas112@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas112@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Santarém"){
        $("#emailHeader").html("vendas112@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas112@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Santarém"){
        $("#emailHeader").html("vendas112@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas112@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Santarém"){
        $("#emailHeader").html("vendas112@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas112@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      } else if(atualoc == "Santarém"){
        $("#emailHeader").html("vendas112@norteautopeças.com.br");
        $("#contatoHeader").html("(92) 2129-1500");
        $("#emailFooter").html("vendas112@norteautopeças.com.br");
        $("#contatoFooter").html("(92) 2129-1500");
      }
      
    }
  );
}
ip()

