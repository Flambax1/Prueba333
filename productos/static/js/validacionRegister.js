$(document).ready(function () {
    $("#bEnviar2").click(function (event) {
        // Prevenir el envío del formulario
        event.preventDefault();

        // Limpiar mensajes de error anteriores
        $(".error-message").hide();

        var nombre = $("#name").val();
        var correo = $("#email").val();
        var contraseña = $("#pass").val();
        var ccontraseña =$("#cpass").val();
        var isValid = true;

        if (nombre == "") {
            $("#nameError").text("El campo nombre es obligatorio").show();
            isValid = false;
        }
        if (!correo.includes('@')){
            $("#emailError").text("Por favor ingrese un correo válido").show();
            isValid = false;
        }
        if (contraseña == "") {
            $("#passwordError").text("El campo contraseña es obligatorio").show();
            isValid = false;
        }
        if (contraseña !==ccontraseña ) {
            $("#CpasswordError").text("Las contraseñas no coinciden").show();
            isValid = false;
        }
        // Si todos los campos son válidos, envía el formulario
        if (isValid) {
            
            $("#registrationForm").submit();
            
        }
        
    });
});