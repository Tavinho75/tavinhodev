<?php
// Define os destinatários
$para = 'luisotavioreis75@gmail.com'; // Substitua 'seu_email@example.com' pelo seu endereço de e-mail
$nome_remetente = $_POST['nome'];
$email_remetente = $_POST['email'];
$assunto = $_POST['assunto'];
$telefone = $_POST['telefone'];

// Define o corpo do email
$mensagem = "
<html>
<head>
<title>Formulário de Contato</title>
<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
}

h2 {
  color: #333;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
}

th {
  background-color: #f0f0f0;
}
</style>
</head>
<body>
<h2>Nova Mensagem do Formulário de Contato</h2>
<table>
  <tr>
    <th>Nome:</th>
    <td>$nome_remetente</td>
  </tr>
  <tr>
    <th>Email:</th>
    <td>$email_remetente</td>
  </tr>
  <tr>
    <th>Telefone:</th>
    <td>$telefone</td>
  </tr>
  <tr>
    <th>Assunto:</th>
    <td>$assunto</td>
  </tr>
</table>
</body>
</html>
";

// Define os cabeçalhos do email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: ' . $nome_remetente . ' <' . $email_remetente . '>' . "\r\n";

// Envia o email
if (mail($para, $assunto, $mensagem, $headers)) {
  echo "Mensagem enviada com sucesso!";
} else {
  echo "Erro ao enviar a mensagem.";
}
?>
