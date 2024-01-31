//Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral o no. Usa un switch para ello.

let dia = prompt("dime un dia")

switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("es entresemana")

    break;

    case "sabado":
    case "domingo":
        console.log("es fin de semana")
        
    break;

    default:
        console.log("introduce un dato valido")


}