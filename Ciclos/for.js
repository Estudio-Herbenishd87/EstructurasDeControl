// Solicitar al usuario que ingrese un número
let numero = parseInt(prompt("Introduce un número:"));

// Recorrer desde 1 hasta el número ingresado
for (let i = 1; i <= numero; i++) {
    // Inicializar una variable para el resultado
    let resultado = "";
    
    // Verificar si el número es múltiplo de 3
    if (i % 3 === 0) {
        resultado += "Fizz";
    }
    
    // Verificar si el número es múltiplo de 5
    if (i % 5 === 0) {
        resultado += "Buzz";
    }
    
    // Si no es múltiplo ni de 3 ni de 5, usar el número
    if (resultado === "") {
        resultado = i;
    }
    
    // Imprimir el resultado
    console.log(resultado);
}
