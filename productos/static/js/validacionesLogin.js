$(document).ready(function () {
    $("#bEnviar3").click(function (event) {
        // Prevenir el envío del formulario
        event.preventDefault();

        // Limpiar mensajes de error anteriores
        $(".error-message").hide();

        var nombre = $("#name_login").val();
        var contraseña = $("#pass_login").val();
        var isValid = true;

        if (nombre == "") {
            $("#nameError").text("El campo nombre es obligatorio").show();
            isValid = false;
        }
        if (contraseña == "") {
            $("#passwordError").text("El campo contraseña es obligatorio").show();
            isValid = false;
        }

        // Si todos los campos son válidos, envía el formulario
        if (isValid) {
            $("#registrationForm").submit();
        }
    });
});

