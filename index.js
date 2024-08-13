class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class login_Verificar {

    constructor() {
        // Inicializamos un array vacío para almacenar usuarios
        this.users = [new User('andres', '1234')];
    }

    register(username, password) {
        // Verificamos que el usuario no exista ya
        if (this.users.find(user => user.username === username)) {
            return 'El usuario ya existe';
        }

        // Creamos un nuevo usuario y lo añadimos al array de usuarios
        const newUser = new User(username, password);
        this.users.push(newUser);
        return 'Usuario registrado con éxito';
    }

    login(username, password) {
        // Buscamos al usuario por su nombre de usuario
        const user = this.users.find(user => user.username === username);

        // Verificamos que el usuario exista y que la contraseña coincida
        if (user && user.password === password) {
            return 'Login exitoso';
        } else {
            return 'Usuario o contraseña incorrectos';
        }
    }
}

const verificar = new login_Verificar();

function registrarUsuario(event) {
    // Evitar el comportamiento por defecto del formulario
    event.preventDefault();
    var usuario = document.querySelector('#usuario').value;
    var contraseña = document.querySelector('#contra').value;
    alert(verificar.register(usuario, contraseña)); 
}

function iniciarSesion() {
    var usuario = document.querySelector('#usuario').value;
    var contraseña = document.querySelector('#contra').value;
    alert(verificar.login(usuario, contraseña));
}

// Asignar el manejador de evento al formulario
var formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', registrarUsuario);
