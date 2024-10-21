let edades = [];
for (let i = 0; i < 5; i++) {
    let edad = parseInt(prompt("Introduce la edad de la persona " + (i + 1) + ":"));
    edades.push(edad);
}

let sumaEdades = 0;

for (let i = 0; i < edades.length; i++) {
    if (edades[i] > 0) {
        sumaEdades += edades[i];
    } else {
        console.log("Edad inválida: " + edades[i]);
    }
}

let edadPromedio = sumaEdades / 5;

if (edadPromedio >= 18) {
    console.log("La edad promedio es " + edadPromedio + ". Es mayor de edad.");
} else {
    console.log("La edad promedio es " + edadPromedio + ". Es menor de edad.");
}

