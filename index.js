function login() {
    var user, password
    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;
    if (user == "admin" && password == "admin") {
        window.location = "index.html";
    } else {
        alert("Datos Incorrectos")
    }
}

document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'interactive' || state == 'complete') {
        setTimeout(function () {
            document.getElementById('preloader').style.display = "none";
        }, 1000);
    }
};

const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
const ageInput = document.querySelector('#age');
const addressInput = document.querySelector('#address');
const genderInput = document.querySelector('#gender');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Variables para almacenar los errores
    let errors = []
    // Validar que el campo de nombre no esté vacío
    if (nameInput.value.trim() === '') {
        errors.push('Por favor, ingrese su nombre');
        nameInput.classList.add('is-invalid');
    } else {
        nameInput.classList.remove('is-invalid');
    }

    // Validar que el campo de contraseña no esté vacío
    if (passwordInput.value.trim() === '') {
        errors.push('Por favor, ingrese su contraseña');
        passwordInput.classList.add('is-invalid');
    } else {
        passwordInput.classList.remove('is-invalid');
    }

    // Validar que el campo de edad no esté vacío y sea un número
    if (ageInput.value.trim() === '' || isNaN(ageInput.value)) {
        errors.push('Por favor, ingrese su edad en números');
        ageInput.classList.add('is-invalid');
    } else {
        ageInput.classList.remove('is-invalid');
    }

    // Validar que el campo de dirección no esté vacío
    if (addressInput.value.trim() === '') {
        errors.push('Por favor, ingrese su dirección');
        addressInput.classList.add('is-invalid');
    } else {
        addressInput.classList.remove('is-invalid');
    }

    // Validar que se seleccione un género
    if (!genderInput.checked) {
        errors.push('Por favor, seleccione su género');
        genderInput.classList.add('is-invalid');
    } else {
        genderInput.classList.remove('is-invalid');
    }

    // Si hay errores, mostrarlos en pantalla
    if (errors.length > 0) {
        const errorList = document.querySelector('#error-list');
        errorList.innerHTML = '';
        for (let i = 0; i < errors.length; i++) {
            const li = document.createElement('li');
            li.textContent = errors[i];
            errorList.appendChild(li);
        }
    } else {
        // Enviar el formulario si no hay errores
        form.submit();
    }
});


//actualiza  imagen
function cambiarImagen() {
    var imagen = document.getElementById('imagen');
    imagen.innerHTML = '<img src="/img/iconos/logeado.png" alt="logeado" height="50" width="50">';
  }

  
  const commentForm = document.getElementById('comment-form');
commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  enviarComentario();
});

