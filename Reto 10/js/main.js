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
