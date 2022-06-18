let nombreUsuario = prompt("Bienvenido/a! Indica tu nombre porfavor:");
let apellidoUsuario = prompt("Indica tu apellido porfavor:");

if(nombreUsuario !== "" && apellidoUsuario !== ""){
    alert(`Hola! Un gusto ${nombreUsuario} ${apellidoUsuario}`);
}else{
    alert("No indicó su nombre correctamente.");
}

window.alert("Vamos a jugar un ratito practicando las tablas...");

let numero = prompt("¿De qué número quiere ver la tabla?");
let i = 0;
do{
    console.log(`${numero} X ${(i+1)} = ${numero*(i+1)}`);
    i++;
}while(i<10);
alert("Gracias por jugar, en la consola del navegador podras visualizar tus resultados!");