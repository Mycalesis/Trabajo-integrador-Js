



// Definicion de variables iniciales//
const precio = 200;

//seleccionar opcion de una lista, en este caso una categoría
var lista = document.getElementById("categoria");

var indiceSeleccionado = lista.selectedIndex;

var valorSeleccionado = lista.options[lista.selectedIndex].value;

var valorSeleccionado = lista.options[lista.selectedIndex].text;

//recuperar la cantidad
let cantidad = document.querySelectorAll("#cantidad");
let numeroDeEntradas = [];
cantidad.forEach((cantidad) => {
  numeroDeEntradas.push(Number(cantidad.value));
});

//Para probar que el código sirve
console.log(numeroDeEntradas)
console.log("opcionSeleccionada: " + valorSeleccionado)


//funcion descuento según la categoría seleccionada
function Descuento(valorSeleccionado){
if (valorSeleccionado == "Estudiante")  {
    return precio*0.8
  }
  else if (valorSeleccionado == "Trainee") {
    return precio*0.5
  }
  else {
    return precio*0.15
  }
}

//prueba para ver que la función descuento sirve
console.log(Descuento(valorSeleccionado))

//Funcion con el precio total

function mensaje(a,b){

  var precioReal = (a) * (precio - Descuento(b))

  document.getElementById("Total").innerHTML = "Total a pagar: $ " + precioReal
}

///Funcion que debería activarse al hacer click en el boton Resumen

function clickResume(){

  return mensaje(numeroDeEntradas,valorSeleccionado);

}

//// Buenas! Estuve buscando por todos lados como crear una funcion que me permitiera limpiar los datos del form al presionar el boton borrar, 
////pero no me salieron ninguno de los metodos propuestos en stack overflow. Tampoco pude hacer que el boton resumen 
//// me devolviera el precio correcto de las entradas por segunda vez si cambio algun dato del formulario 
////(Hay que refrescar si o si la página para que tome el cambio, supongo que algun if serviría pero no se bien 
////como usar la funcion EventListener o como crear un programa que arranque ante un "Click" más que usando onclick
//// Me encantaría seguir limpiando el codigo, arreglando e intentando implementar las funcionalidades antes
//// descriptas, pero no quiero demorarme mas con la fecha de entrega de este trabajo ni con la del integrador de Mysql también, así que pido disculpas de antemano por todos los errores y malas practicas que pudé haber cometido y no alcance 
/// a corregir o no descubrí. Lo último que quería decir es que los estilos en la segunda página estan 
///puestos en las etiquetas, no pude hacerlos en Styles.css porque no me tomaba las clases ni los Id (No aparecían en la hoja de estilos del modo inspeccionar del navegador) 
