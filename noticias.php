<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style/style.css" />
    <link rel="stylesheet" href="style/icon/fontawesome/fontawesome-free-6.4.2-web/css/all.min.css" />
    <link rel="shortcut icon" href="favicon/logo-norte-favicon.png" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet" />
    <link rel="stylesheet" href="src/slides.css">
    <link rel="stylesheet" href="src/slideForn.css">
    <link rel="stylesheet" href="src/btnHeaderLojas.css">
    <link rel="stylesheet" href="src/noticias.css">
    <!-- Primary Meta Tags -->
    <title>Norte Auto Peças — A melhor qualidade de produtos para linha pesada.</title>
    <meta name="title" content="Norte Auto Peças" />
    <meta name="description"
        content="Empresa destinada a venda de peças para linha pesada e leve, com mais de 9 estados em todo Brasil. Venha nos conhecer." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://metatags.io/" />
    <meta property="og:title" content="Norte Auto Peças — A melhor qualidade de produtos para linha pesada." />
    <meta property="og:description"
        content="Empresa destinada a venda de peças para linha pesada e leve, com mais de 9 estados em todo Brasil. Venha nos conhecer." />
    <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://metatags.io/" />
    <meta property="twitter:title" content="Norte Auto Peças — A melhor qualidade de produtos para linha pesada." />
    <meta property="twitter:description"
        content="Empresa destinada a venda de peças para linha pesada e leve, com mais de 9 estados em todo Brasil. Venha nos conhecer." />
    <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

    <title>Norte Auto Peças | Inicio</title>
</head>

<body>
    <section class="header" id="header">
        <div class="container">
            <div class="headerFirst">
                <div class="contacts">
                    <button class="btnHeaderLojas">
                        <a href="#">
                            <i class="fa-solid fa-angles-down"></i>
                            <span class="continuo">
                                Conheça nossas lojas
                            </span>
                        </a>
                    </button>
                </div>
                <div class="SocialMedia">
                    <a href="https://www.facebook.com/norteautopecas" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/norteautopecas_/" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/norte-auto-pe%C3%A7as" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="lojasHeader">
            <div id="containerDeLojas"></div>
        </div>
    </div>
    <!-- HeaderMain -->
    <section class="headerMain">
        <div class="container">
            <div class="HeaderMainInfo">
                <a href="index.html">
                    <img class="LogoNorteAzul" src="style/public/img/logosNorte/Logo-Grupo Norte2.png" alt="" /></a>
                <nav class="menuHeaderMain">
                    <a href="index.html">INICIO</a>
                    <a href="index.html">LOJAS</a>
                    <a href="index.html">FORNECEDORES</a>
                    <a href="index.html">SOBRE NÓS</a>
                    <a class="fixo" href="index.html">NOVIDADES</a>
                    <a href="#">TRABALHE CONOSCO</a>
                </nav>
            </div>
    </section>
    <section class="headerMobile">
        <div class="container">
            <div class="HeaderMainInfoMobile">
                <a href="index.html">
                    <img class="LogoNorteAzul" src="style/public/img/logosNorte/Logo-Grupo Norte2.png" alt="" />
                </a>
                <div class="mobileMenuIcon" onclick="toggleMenu()">
                    <i class="fas fa-bars"></i>
                    <i class="fa-solid fa-xmark close"></i>
                </div>
            </div>
        </div>
        <nav class="menuHeader">
            <a href="index.html">INICIO</a>
            <a href="index.html">LOJAS</a>
            <a href="index.html">FORNECEDORES</a>
            <a href="index.html">SOBRE NÓS</a>
            <a href="index.html">NOVIDADES</a>
            <a href="#">TRABALHE CONOSCO</a>
        </nav>
    </section>

    <main>

        <?php
        $noticias = array(
            "noticia1" => array(
                "id" => "1",
                "Titulo" => "A Norte inaugura mais uma nova loja em Manaus",
                "data" => "06 de dezembro de 2023",
                "subtitulo" => "Inauguração da Norte Auto Peças em Manaus",
                "image1" => "./style/public/img/novidades/loja101Inauguracao.mp4",
                "texto" => "Com uma estética inovadora, elevado conforto e um atendimento de qualidade incomparável, a Norte Auto Peças tem a honra de inaugurar sua mais nova unidade na Avenida Torquato Tapajós, situada ao lado da nossa antiga loja.
                <br />
                <br />
                Projetamos este espaço com o objetivo principal de proporcionar o máximo de conforto aos nossos clientes, visando aprimorar ainda mais a qualidade do atendimento prestado. Estamos comprometidos em oferecer uma experiência única, onde cada visita se transforma em um momento agradável e eficiente.
                <br />
                <br />
                Convidamos você a nos fazer uma visita e descobrir todas as melhorias que implementamos. Estamos localizados na Avenida Torquato Tapajós, 923, no Bairro da Paz, em Manaus. Esperamos recebê-lo em nossa nova unidade, onde a excelência se encontra em cada detalhe.",
                "subtitulo2" => "Visite nossa loja:",
                "image2" => "./style/public/img/novidades/noticia1Image.JPG",
            )
        );
        ?>
        <?php
        echo '<section class="Noticia">
        <div class="container">
            <div class="titulo">
                <h1>' . $noticias["noticia1"]["Titulo"] . '</h1>
            </div>
            <div class="dataDaPostagem">
                <i class="fa-regular fa-clock"></i>
                <span>' . $noticias["noticia1"]["data"] . '</span>
            </div>
            <hr size="1">
            <!--<img class="imgNoticia" src="' . $noticias["noticia1"]["image1"] . '"> -->
            <video controls autoplay loop muted>
                <source src="' . $noticias["noticia1"]["image1"] . '" type="video/mp4">
            Your browser does not support the video tag.
            </video>
            <h2>' . $noticias["noticia1"]["subtitulo"] . '</h2>
            <p>' . $noticias["noticia1"]["texto"] . '</p>
            <img class="imgNoticia" src="'. $noticias["noticia1"]["image2"] . '">
            <h2>' . $noticias["noticia1"]["subtitulo2"] . '</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.117753116813!2d-60.02825052629827!3d-3.0631751401473486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1a78a64835b7%3A0xec246b3e5bbd7129!2sAv.%20Torquato%20Tapaj%C3%B3s%2C%20923%20-%20Da%20Paz%2C%20Manaus%20-%20AM%2C%2069048-010!5e0!3m2!1spt-BR!2sbr!4v1701970827915!5m2!1spt-BR!2sbr"  height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
    ';
        ?>
  
    </main>

    <footer>
        <div class="container">
            <section class="footerMain">
                <div class="aboutNorte">
                    <img src="style/public/img/logosNorte/Logo Grupo Norte (Branca).png"
                        alt="Logo de todos os grupos da empresa">
                    <p>
                        A Norte Auto Peças tem mais de 27 anos de experiência no setor de autopeças, com 36 lojas nas
                        regiões Norte,
                        Nordeste e Sudeste. Fundada com foco na região amazônica, prioriza confiabilidade e qualidade no
                        atendimento. Atualmente, é reconhecida como uma empresa confiável e inovadora nos mercados em
                        que atua.
                    </p>
                </div>
                <div class="menuFooter">
                    <nav class="">
                        <h1>Menu</h1>
                        <a href="index.html">INICIO</a>
                        <a href="index.html">LOJAS</a>
                        <a href="index.html">FORNECEDORES</a>
                        <a href="index.html">SOBRE NÓS</a>
                        <a href="index.html">NOVIDADES</a>
                        <a href="TrabalheConosco.html">TRABALHE CONOSCO</a>
                    </nav>
                </div>
                <div class="contactsFooter">
                    <nav class="">
                        <h1>Contatos</h1>
                        <a id="emailLink" href="">
                            <i class="fa-solid fa-envelope"></i>
                            <span class="continuo"><span id="contatoFooter"></span>
                        </a>
                        <a id="contatoLink" href="">
                            <i class="fa-solid fa-phone"></i>
                            <span class="continuo"><span id="emailFooter"></span></span>
                        </a>
                        <h2>Redes Sociais</h2>
                        <div class="SocialMediaFooter">
                            <a href="https://www.facebook.com/norteautopecas" target="_blank">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/norteautopecas_/" target="_blank">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/norte-auto-pe%C3%A7as" target="_blank">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </nav>
                </div>
            </section>
        </div>
        <div class="diretosReservadosFooter">
            <p>&copy; Norte Auto Peças - Todos os direitos reservados.</p>
        </div>
    </footer>

    <div class="topo">
        <a href="#header" class="irParaInicio"><i class="fa-solid fa-arrow-up"></i></a>
    </div>
    <div class="topoWhatsapp" id="topoWhatsapp">
        <a id="whatsappButton"
            href="https://api.whatsapp.com/send/?phone=559284179810&text&type=phone_number&app_absent=0" target="_blank"
            class="irParaInicio">
            <i class="fa-brands fa-whatsapp"></i>
        </a>
    </div>



    <!-- Scripts externos -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
    <script src="src/btnHeaderLojas.js"></script>

    <!-- Scripts da propria pagina -->
    <script src="index.js" type="text/javascript"></script>
    <script src="src/slides.js"></script>
    <script src="src/slideForn.js"></script>
    <script defer src="src/localizacao.js"></script>
</body>

</html>