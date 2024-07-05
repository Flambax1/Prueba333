$(document).ready(function () {
    $("#bEnviar").click(function (event) {
        // Prevenir el envío del formulario
        event.preventDefault();

        // Limpiar mensajes de error anteriores
        $(".error-message").hide();

        var nombre = $("#name_asistencia").val();
        var correo = $("#email_asistencia").val();
        var mensaje = $("#mensaje_asistencia").val();
        var isValid = true;

        if (nombre == "") {
            $("#nameError").text("El campo nombre es obligatorio").show();
            isValid = false;
        }
        if (!correo.includes('@')) {
            $("#emailError").text("Por favor ingrese un correo válido").show();
            isValid = false;
        }
        if (mensaje == "") {
            $("#mensajeError").text("Debe contener un mensaje").show();
            isValid = false;
        }

        // Si todos los campos son válidos, envía el formulario
        if (isValid) {
            $("#registrationForm").submit();
        }
    });
});