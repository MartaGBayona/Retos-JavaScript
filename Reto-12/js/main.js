/*Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
condición de salida (3 intentos y si acierta sale, aunque le queden intentos).*/

//con un if else se puede romper el bucle para que si se acierta la contraseña antes del tercer intento se rompe.

let pass = "123456";

for(let i = 3; i > 0; i--) {
    let answer = prompt("dime la contraseña");
    if(answer === pass) {
        console.log("Enhorabuena")
        break;
    } 
    console.log("te queda", i-1, "intento")
}