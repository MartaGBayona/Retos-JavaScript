/*Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
calcule el precio final con IVA. El IVA será una constante que sera del 21%*/

let valor = parseFloat(prompt("dime el precio"));

let ivaInc = valor + (valor *0.21);

console.log("el precio del producto es", ivaInc)