let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let usuario = document.querySelector("#usuario");
let contrasena = document.querySelector("#contrasena");
const registro = document.querySelector("#registro");
let personasRegistradas = [];
let persona = {
    usuario: "",
    contrasena: "",
    nombre: "",
    apellido: "",
    cbu: "",
    saldo: "",
};
//prueba
if (localStorage.getItem("persona")) {
    intermedia = localStorage.getItem("persona");
    console.log(intermedia);
    personasRegistradas = JSON.parse(intermedia);
    console.log(personasRegistradas);
} else {
    console.log("funca");
}

const guardarUsuario = () => {
    if (
        persona.nombre == "" ||
        persona.apellido == "" ||
        persona.contrasena == "" ||
        persona.usuario == ""
    ) {
        console.log("fijate de llenarlo gato");
    } else {
        console.log("si esto sale en consola es porque funca");
        persona.nombre = nombre.value;
        persona.apellido = apellido.value;
        persona.contrasena = contrasena.value;
        persona.usuario = usuario.value;
        for (var i = 0; i < 4; i++) {
            generador = parseInt(Math.random() * (9999 - 1000) + 1000).toString();
            persona.cbu = persona.cbu + generador;
            console.log(persona.cbu);
        }
        persona.saldo = 0;
        personasRegistradas.push(persona);
        let cosoIntermedioParaElCoso = JSON.stringify(personasRegistradas);
        localStorage.setItem("persona", cosoIntermedioParaElCoso);
    }
};
registro.addEventListener("click", guardarUsuario);

console.log(persona.usuario);

// Falta que los usuarios se vayan acumulando y no borrando uno atras del otro