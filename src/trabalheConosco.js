const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Altere para a porta desejada

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/enviar-email', (req, res) => {
  const { name, email, estado, cidade, telefone, mensagem } = req.body;

  // Configurações para o transporte de e-mail
  const transporter = nodemailer.createTransport({
    service: 'seu_servico_de_email',
    auth: {
      user: 'oswaldomauricio6@gmail.com',
      pass: 'oswaldo448441022'
    }
  });

  // Configurações para o e-mail
  const mailOptions = {
    from: email,
    to: 'oswaldomauricio6@gmail.com@example.com',
    subject: 'Formulário de Trabalhe Conosco - Norte Auto Peças',
    text: `
      Nome: ${name}
      E-mail: ${email}
      Estado: ${estado}
      Cidade: ${cidade}
      Telefone: ${telefone}
      Mensagem: ${mensagem}
    `
  };

  // Envia o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('E-mail enviado com sucesso!');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
