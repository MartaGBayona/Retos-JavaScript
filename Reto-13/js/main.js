/*Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo
aritmético (String), según este último se realizará la operación correspondiente. Al final
mostrará el resultado en un cuadro de diálogo.
Los signos aritméticos disponibles son:
+: suma los dos operandos.
-: resta los operandos.
*: multiplica los operandos.
/: divide los operandos, este debe dar un resultado con decimales (double)
^: 1o operando como base y 2o como exponente.
%: módulo, resto de la división entre operando1 y operando2.*/

let operando1 = parseInt(prompt("dame un numero"));

let operando2 = parseInt(prompt("dame un numero"));

let operador = prompt("dame un signo matemático")

switch (operador) {
    case "+":
        console.log(operando1 + operando2);

    break;

    case "-":
        console.log(operando1 - operando2);
    break;
    
    case "*":
        console.log(operando1 * operando2);
    break;

    case "/":
        console.log(operando1 / operando2);
    break;

    case "^":
        console.log(operando1 ^ operando2);
    break;

    case "%":
        console.log(operando1 % operando2);
    break;

    default:
        console.log("introduce un valor valido")
}
