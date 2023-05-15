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


//actualiza  imagen
function cambiarImagen() {
    var imagen = document.getElementById('imagen');
    imagen.innerHTML = '<img src="/img/iconos/logeado.png" alt="logeado" height="50" width="50">';
  }

