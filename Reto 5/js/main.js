/*Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
debemos indicarlo.*/

let num = parseInt(prompt("dime un número"));

//resuelto con un condicional if/else

if (num % 2 == 0) {
    console.log("es divisible entre 2")
} else {
    console.log("no es divisible entre 2")
};

//resuelto con un operador ternario

let answer = num % 2 == 0
    ? "es"
    : "no es"
    console.log(answer,"divisible entre 2")

