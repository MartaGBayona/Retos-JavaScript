// Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle que desees.

for (i = 0; i <= 100; i ++) {
    if (i % 2 == 0) {
        console.log(i, "es divisible entre 2")
    } else if (i % 3 == 0) {
        console.log(i, "es divisible entre 3")
    }  else {
        console.log("tengo otro divisor")
    }
} 
    