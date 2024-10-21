 let sumaEdades = 0;


    for (let i = 1; i <= 5; i++) {
        let edad = parseFloat(prompt("Ingresa la edad de la persona " + i + ":"));


        if (edad > 0) {
            sumaEdades += edad;
        } else {
            console.log("Edad no válida ingresada para la persona " + i);

        }



    let edadPromedio = sumaEdades / 5;


    if (edadPromedio >= 18) {
        console.log("La edad promedio es " + edadPromedio + ". Es mayor o igual a la mayoría de edad.");
    } else {
        console.log("La edad promedio es " + edadPromedio + ". Es menor que la mayoría de edad.");
    }
}