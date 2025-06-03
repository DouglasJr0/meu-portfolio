<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nome = $_POST['nome'] ?? '';
  $email = $_POST['email'] ?? '';
  $mensagem = $_POST['mensagem'] ?? '';

  // Validação simples
  if (empty($nome) || empty($email) || empty($mensagem)) {
    http_response_code(400);
    echo "Todos os campos são obrigatórios.";
    exit;
  }

  // 1. Conectar ao banco
  $host = 'localhost';
  $usuario = 'seu_usuario';
  $senha = 'sua_senha';
  $banco = 'nome_do_banco';

  $conn = new mysqli($host, $usuario, $senha, $banco);

  if ($conn->connect_error) {
    http_response_code(500);
    echo "Erro ao conectar ao banco: " . $conn->connect_error;
    exit;
  }

  // 2. Inserir no banco
  $stmt = $conn->prepare("INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $nome, $email, $mensagem);
  $stmt->execute();

  // 3. Enviar e-mail para você
  $para = 'juniormattos0610@gmail.com';
  $assunto = "Nova mensagem do site de $nome";
  $corpo = "Nome: $nome\nEmail: $email\nMensagem:\n$mensagem";
  $headers = "From: $email";

  mail($para, $assunto, $corpo, $headers);

  // 4. WhatsApp Link (opcional)
  // você pode redirecionar o usuário ou mostrar um botão com este link:
  // https://wa.me/5541999657531?text=Mensagem+enviada+com+sucesso!

  echo "OK";
}
