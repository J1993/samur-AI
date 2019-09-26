const creador = {
    id : "samur-AI", 
    nombre_creador : "Jordy",
    apellido_creador : "Lopez",
    fecha_creacion : 26-09-2019,
    su : true
}
    

function init() {
    console.log(``)
}

function bienvenida_random () {
    var random_number = Math.floor((Math.random() * 10) + 1);
    var respuesta

    switch(random_number) {
        case 1:
          return respuesta = `Hola ${creador.nombre_creador}, en que puedo ayudarte hoy?`;
          break;
        case 2:
          // code block
          break;
        default:
          // code block
      }
}