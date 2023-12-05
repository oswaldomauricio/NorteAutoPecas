<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $name = $_POST['name'];
    $email = $_POST['email'];
    $estado = $_POST['estado'];
    $cidade = isset($_POST['cidade']) ? $_POST['cidade'] : '';
    $telefone = $_POST['telefone'];
    $mensagem = $_POST['mensagem'];
    $arquivo = $_FILES['arquivo']['name'];

    // Configurações para o e-mail

    $to = "oswaldomauricio6@gmail.com";  // Substitua pelo seu endereço de e-mail
    
    $subject = "CURRICULO " . $name . " - Norte Auto Peças";

    // Corpo do e-mail
    $message = "Nome: $name\n";
    $message .= "E-mail: $email\n";
    $message .= "Estado: $estado\n";
    $message .= "Cidade: $cidade\n";
    $message .= "Telefone: $telefone\n";
    $message .= "Mensagem: $mensagem\n";
    $message .= "Arquivo Enviado: $arquivo";


    // Cabeçalhos do e-mail
    $headers = "From: $email";

    // Envia o e-mail
    if (mail($to, $subject, $message, $headers)) {
        // Exibindo uma mensagem HTML personalizada
        echo "<html><head><title>Sucesso</title>";
        echo "<style>";
        echo "body { font-family: 'Poppins', sans-serif; background-color: #f4f4f4; }";
        echo "h1 { color: green; }";
        echo "p { color: #0056b3; }";
        echo "a { 
            color: #fff;
            padding: 20px;
            background-color: #007BFF;
            border-radius: 4px;
         }";
         echo "body { 
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center; /* Added the missing semicolon here */
            width: 50%;
            height: 100vh;
            flex-direction: column;
         }";
        echo "</style></head><body>";
        echo "<h1>E-mail enviado com sucesso!</h1>";
        echo "<p>Obrigado por entrar em contato!</p>";
        echo "<a href='index.html'>Clique aqui para voltar! </a>";
        echo "</body></html>";
    } else {
        echo "Erro ao enviar o e-mail.";
    }
}
?>
