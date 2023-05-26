//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}

// Funcionamiento del login 

// Obtener los elementos del DOM
const btnIniciarSesion = document.getElementById('btn__iniciar-sesion');
const btnRegistrarse = document.getElementById('btn__registrarse');
const formularioLogin = document.querySelector('.formulario__login');
const formularioRegister = document.querySelector('.formulario__register');

// Mostrar el formulario de inicio de sesión al cargar la página
formularioLogin.style.display = 'block';
formularioRegister.style.display = 'none';

// Función para guardar los datos en el Local Storage
const guardarDatosLocalStorage = (correo, contrasena) => {
    localStorage.setItem('correo', correo);
    localStorage.setItem('contrasena', contrasena);
};

// Función para verificar los datos de inicio de sesión
const verificarDatosLogin = (correo, contrasena) => {
    const correoGuardado = localStorage.getItem('correo');
    const contrasenaGuardada = localStorage.getItem('contrasena');

    if (correo === correoGuardado && contrasena === contrasenaGuardada) {
        mostrarModalExitoso('Inicio de sesión exitoso');
        // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    } else {
        mostrarModalError('Correo o contraseña incorrectos');
    }
};

// Función para mostrar un modal exitoso
const mostrarModalExitoso = (mensaje) => {
    Swal.fire({
        title: '¡Éxito!',
        text: mensaje,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
};

// Función para mostrar un modal de error
const mostrarModalError = (mensaje) => {
    Swal.fire({
        title: '¡Error!',
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'Aceptar'
    });
};

// Evento click para mostrar el formulario de inicio de sesión
btnIniciarSesion.addEventListener('click', () => {
    formularioRegister.style.display = 'none';
    formularioLogin.style.display = 'block';
});

// Evento click para mostrar el formulario de registro
btnRegistrarse.addEventListener('click', () => {
    formularioLogin.style.display = 'none';
    formularioRegister.style.display = 'block';
});

// Evento submit del formulario de inicio de sesión
formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = formularioLogin.querySelector('input[type="text"]').value;
    const contrasena = formularioLogin.querySelector('input[type="password"]').value;

    verificarDatosLogin(correo, contrasena);

    // Limpiar los campos del formulario
    formularioLogin.reset();
});

// Evento submit del formulario de registro
formularioRegister.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = formularioRegister.querySelector('input[type="text"]').value;
    const contrasena = formularioRegister.querySelector('input[type="password"]').value;

    guardarDatosLocalStorage(correo, contrasena);
    
    mostrarModalExitoso('Registro exitoso');


    // Limpiar los campos del formulario
    formularioRegister.reset();
});

function regresarIndex() {
    window.location.href = "../index.html";
}
