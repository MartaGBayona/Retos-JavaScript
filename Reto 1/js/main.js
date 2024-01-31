/* Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los
dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que
funciona.*/

let number1 = 10;
let number2 = 3;

//planteado con un operador ternario

let resultado = ((number1 != number2) ? ((number1 > number2) ? "number1 es Mayor": "number2 es Mayor" ) : "Son iguales" ) 

console.log(resultado)

//planteado con los condicionales if/else if

if(number1 > number2) {
    console.log("number1 es mayor")
} else if (number1 == number2) {
    console.log("son iguales")
} else {
    console.log("number2 es mayor que number1")
}