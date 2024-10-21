 let num1 = parseFloat(prompt("Ingresa el primer número:"));
 let num2 = parseFloat(prompt("Ingresa el segundo número:"));

  let operacion = prompt("Ingresa la operación a realizar (+, -, *, /):");


    let resultado;
    if (operacion === "+") {
        resultado = num1 + num2;
        console.log("El resultado de la suma es: " + resultado);
    } else if (operacion === "-") {
        resultado = num1 - num2;
        console.log("El resultado de la resta es: " + resultado);
    } else if (operacion === "*") {
        resultado = num1 * num2;
        console.log("El resultado de la multiplicación es: " + resultado);
    } else if (operacion === "/") {
        if (num2 === 0) {
            console.log("Error: División por cero no permitida.");
        } else {
            resultado = num1 / num2;
            console.log("El resultado de la división es: " + resultado);
        }
    } else {
        console.log("Operación no válida.");
    }
