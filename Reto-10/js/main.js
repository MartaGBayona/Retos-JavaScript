/*Realiza una aplicación que nos pida un número de ventas a introducir, después nos
pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.*/

let numVentas = parseInt(promp3t("dime el número de ventas"));

let sumaVentas = 0

for (let i = 0; i <= numVentas; i ++) {
    let venta = (prompt("dime tus ventas"));
    sumaVentas += venta;
}

console.log(sumaVentas)


// let ventas = prompt("Cuantas compras has hecho? (escribe el número)")
// let total = 0;
// let veces = 0;
// do {
//     veces ++
//     let precio = parseInt(prompt("Cuánto has pagado?"));
//     total += precio;
// } while (veces < ventas)
// console.log("Has hecho ", ventas, "ventas y has pagado un total de", total+"€");
