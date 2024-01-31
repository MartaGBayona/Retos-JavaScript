/*Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
(recuerda pasar de String a double con parseDouble). Usa la constante PI.*/

const Pi = 3.14;

let r = parseFloat(prompt("escribe el radio aquí"));

var area = Pi * (r**2);

console.log(area.toFixed(4)) //to.Fixed() indica el numero de decimales que queremos obtener según lo que especifiquemos dentro del paréntesis
