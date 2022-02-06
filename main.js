alert('Mayores y menores de edad');

function esMayorEdad(edadPresona){
    // let esCalcularMayoriaEdad >= 18
    return edadPresona >= 18
}

function verificarEdad(edad){
    let esMayor = esMayorEdad(edad)
    if (esMayor) {
    return 'Es mayor de edad'
    } else {
    return 'Es menor de edad'
    }
}


