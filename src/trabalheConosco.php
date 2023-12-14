<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


header('Content-Type: text/html; charset=utf-8');

require 'phpMailer/src/Exception.php';
require 'phpMailer/src/PHPMailer.php';
require 'phpMailer/src/SMTP.php';


// Verifica se o formulário foi submetido via método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $name = $_POST['name'];
    $email = $_POST['email'];
    $estado = $_POST['estado'];
    $cidade = $_POST['city'];
    $whatsapp = $_POST['whatsapp'];
    $telefone = $_POST['telefone'];
    $mensagem = $_POST['mensagem'];
    $arquivo = $_FILES['arquivo'];

    // Instância da classe
    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor SMTP
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->Username = 'oswaldo@norteautopecas.com.br';
        $mail->Password = '101@osw$2023';
        $mail->SMTPSecure = 'tls';
        $mail->Host = 'smtp-mail.outlook.com';
        $mail->Port = 587;

        // Define o remetente
        $mail->setFrom('oswaldo@norteautopecas.com.br', 'Norte Auto Peças - Remetente');

        // Define o destinatário (pode ser o mesmo e-mail do remetente para testar)
        $mail->addAddress('oswaldomauricio6@gmail.com', 'Norte Auto Peças - Destinatario');

        if (isset($arquivo['name']) && !empty($arquivo['name'])) {
            $mail->addAttachment($arquivo['tmp_name'], $arquivo['name']);
        }

        // Conteúdo da mensagem
        $mail->isHTML(true);
        $mail->ContentType = 'text/html';
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'ENVIO DE CURRICULO - ' . $name;

        // Construção do corpo do e-mail
        $body .= "<b>Nome do candidato:</b> $name<br><br>";
        $body .= "<b>E-mail do candidato:</b> $email<br><br>";
        $body .= "<b>Estado do candidato:</b> $estado<br><br>";
        $body .= "<b>Cidade do candidato:</b> $cidade<br><br>";
        $body .= "<b>Whatsapp:</b> <a href='https://api.whatsapp.com/send/?phone=+55$whatsapp'>$whatsapp</a><br><br>";
        $body .= "<b>Telefone:</b> <a href='tel:+55$telefone'>$telefone</a><br><br>";
        $body .= "<b>Mensagem:</b> $mensagem<br><br>";
        $body .= '<img src="https://norteautopecas.com.br/teste/style/public/img/email/envioDeCurriculo.png" alt="" width="500" height="250">';


        $mail->Body = $body;

        // Envia o e-mail
        $mail->send();
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
        echo "<a href='../index.html'>Clique aqui para voltar! </a>";
        echo "</body></html>";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>