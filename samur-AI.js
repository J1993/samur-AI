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
   ayuda();
}

function respuestas (respuesta) {

   var respuesta;
   this.respuesta = respuesta;

   var span = document.createElement("span");
   var br = document.createElement("br");
   span.innerHTML = respuesta;
   //var node = document.createTextNode(respuesta);
   //span.appendChild(node);
   span.appendChild(br);
 
   var consola = document.getElementById("consola");
   consola.appendChild(span);

}

function bienvenida_random () {

   var random_number = Math.floor((Math.random() * 3) + 1);
   var respuesta;

  switch(random_number) {
      case 1:
         respuesta = `Hola ${creador.nombre_creador}, en que puedo ayudarte hoy?`;
         break;
      case 2:
         respuesta = `Hola Sr. ${creador.nombre_creador}, que podemos hacer hoy?`;
         break;
      case 3:
         respuesta = `Hola de nuevo Sr. ${creador.nombre_creador}, que quieres saber?`;
         break;
      default:
         respuesta = `Vaya parece que ha habido un error.`;
         break;
  }

  respuestas(respuesta);
}

function ayuda () {

   var consola = document.getElementById("consola");
   var a = document.createElement("a");
   var br = document.createElement("br");
   a.innerHTML = "Comandos";
   a.appendChild(br);
   a.href = "#";
   a.setAttribute("onclick","mostrar_comandos()");
 
   console.log(a);
   consola.appendChild(a);
}

function mostrar_comandos() {
   var comandos = "Estos son los diferentes comandos de Samur: <br> <br>" + 
   " - Hola : Samur te saludara y dira quien es. ";
   respuestas(comandos);
}