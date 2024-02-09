//Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral o no. Usa un switch para ello.

let dia = prompt("dime un dia").trim()//quita los espacios anteriores y posteriores del string (no los intermedios)

switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("es laborable")

    break;

    case "sabado":
    case "domingo":
        console.log("es fin de semana")
        
    break;

    default:
        console.log("introduce un dato valido")
}

