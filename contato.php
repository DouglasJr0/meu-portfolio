<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nome = $_POST['nome'] ?? '';
  $email = $_POST['email'] ?? '';
  $mensagem = $_POST['mensagem'] ?? '';

  // Aqui você pode salvar no banco, enviar por e-mail, etc.
  // Exemplo: mail('seu@email.com', 'Contato do site', $mensagem);

  echo "OK";
}
?>
