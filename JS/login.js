const boton = document.querySelector("#botonIngresar");
const usuarioQueEscribio = document.querySelector("#inputUsuario");
const contrasenaQueEscribio = document.querySelector("#inputContrasena");
listadoUsuario = JSON.parse(localStorage.getItem("persona"));
let datos = {};
const funcionLogin = () => {
    const usuarioIngresado = listadoUsuario.filter(
        (user) => user.usuario == usuarioQueEscribio.value
    );
    console.log(usuarioIngresado[0].contrasena);
    if (usuarioIngresado.length === 0) {
        console.log("estas mal master");
    } else {
        if (usuarioIngresado[0].contrasena == contrasenaQueEscribio.value) {
            console.log("congratulations, entraste master");
            let varIntermedia = JSON.stringify(usuarioIngresado);
            localStorage.setItem("usuarioIniciado", varIntermedia);
        } else {
            console.log("mal la password");
        }
    }
};

boton.addEventListener("click", funcionLogin);