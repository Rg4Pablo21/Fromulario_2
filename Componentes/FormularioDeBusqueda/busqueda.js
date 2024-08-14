document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("input[type='text']");
    const resetButton = document.querySelector("button[type='reset']");
    const submitButton = document.querySelector("button[type='submit']");

    // Validar que al menos un campo esté lleno antes de enviar
    form.addEventListener("submit", function(event) {
        let isValid = false;

        inputs.forEach(input => {
            if (input.value.trim() !== "") {
                isValid = true;
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert("Por favor, completa al menos un campo para realizar la búsqueda.");
        }
    });

    // Limpiar los campos del formulario cuando se presiona el botón de reset
    resetButton.addEventListener("click", function() {
        inputs.forEach(input => {
            input.value = "";
        });
    });
});