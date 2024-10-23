<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $assunto = $_POST['assunto'];

    // Assunto e destinatário
    $to = "seuemail@dominio.com";
    $subject = "Formulário de Contato - $assunto";
    
    // Corpo da mensagem
    $message = "Nome: $nome\n";
    $message .= "Email: $email\n";
    $message .= "Telefone: $telefone\n";
    $message .= "Assunto: $assunto\n";
    
    // Cabeçalhos
    $headers = "From: $email";

    // Envia o e-mail
    if(mail($to, $subject, $message, $headers)) {
        echo "Email enviado com sucesso!";
    } else {
        echo "Falha no envio do email.";
    }
}
?>
