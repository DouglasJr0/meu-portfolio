
$(document).ready(function () {
    $("#form-contato").on("submit", function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "contato.php",
            data: $(this).serialize(),
            success: function () {
                $("#resposta-contato").html("<p style='color:green;'>Mensagem enviada com sucesso!</p>");
                $("#form-contato")[0].reset();
            },
            error: function () {
                $("#resposta-contato").html("<p style='color:red;'>Erro ao enviar mensagem.</p>");
            }
        });
    });
});
