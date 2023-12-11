<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

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
        $mail->setFrom('oswaldo@norteautopecas.com.br', 'Remetente');

        // Define o destinatário (pode ser o mesmo e-mail do remetente para testar)
        $mail->addAddress('oswaldomauricio6@gmail.com', 'Destinatario');

        if (isset($arquivo['name']) && !empty($arquivo['name'])) {
            $mail->addAttachment($arquivo['tmp_name'],  $arquivo['name']);
        }

        // Conteúdo da mensagem
        $mail->isHTML(true);
        $mail->Subject = 'ENVIO DE CURRICULO - '. $name;
        
        // Construção do corpo do e-mail
        $body = "Nome: $name<br>";
        $body .= "E-mail: $email<br>";
        $body .= "Estado: $estado<br>";
        $body .= "Cidade: $cidade<br>";
        $body .= "Telefone: $telefone<br>";
        $body .= "Mensagem: $mensagem<br>";
        $body .= "Arquivo Enviado: " . $arquivo['name'];
        $body .= '<img src="https://norteautopecas.com.br/teste/style/public/img/email/envioDeCurriculo.png" alt="">';

        $mail->Body = $body;

        // Envia o e-mail
        $mail->send();
        echo 'A mensagem foi enviada!';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
