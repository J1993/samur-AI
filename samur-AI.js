const creador = {
    id : "samur-AI", 
    nombre_creador : "Jordy",
    apellido_creador : "Lopez",
    fecha_creacion : 26-09-2019,
    su : true
}

/*Inicio de samu-AI*/
init();

function init() {
   consola();
}

/*Consola por la cual comunicarse con samur */
function consola (){
   bienvenida_random();
}

function ayuda () {
}

function bienvenida_random () {

   var random_number = Math.floor((Math.random() * 3) + 1);
   var respuesta;

  switch(random_number) {
      case 1:
         respuesta = `Hola ${creador.nombre_creador}, en que puedo ayudarte hoy?`;
         break;
      case 2:
         respuesta = `Hola Sr.${creador.nombre_creador}, que podemos hacer hoy?`;
         break;
      
      case 3:
         respuesta = `Hola de nuevo Sr.${creador.nombre_creador}, que quieres saber?`;
         break;
      default:
      // code block
  }

  var p = document.createElement("span");
  var br = document.createElement("br");
  var node = document.createTextNode(respuesta);
  p.appendChild(node);
  p.appendChild(br);

  var consola = document.getElementById("consola");
  consola.appendChild(p);
}