console.log("contacto.js cargado");
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Se hizo click en enviar");

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const numero = document.getElementById("numero");
    const actividad = document.getElementById("actividad");
    const mensaje = document.getElementById("mensaje");

    let valido = true;

    // Limpiar errores anteriores
    document.querySelectorAll("input, select, textarea").forEach(campo => {
        campo.classList.remove("error");
    });

    // Validar nombre (solo letras)
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!regexNombre.test(nombre.value.trim())) {
        nombre.classList.add("error");
        valido = false;
    }

    // Validar email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email.value.trim())) {
        email.classList.add("error");
        valido = false;
    }

    // Campos vacíos
    [numero, actividad, mensaje].forEach(campo => {
        if (campo.value.trim() === "") {
            campo.classList.add("error");
            valido = false;
        }
    });

    if (valido) {
        Swal.fire({
            icon: "success",
            title: "¡Formulario enviado!",
            text: "Tus datos fueron enviados correctamente."
        });

        formulario.reset();

    } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Revisá los campos marcados en rojo."
        });
    }
});