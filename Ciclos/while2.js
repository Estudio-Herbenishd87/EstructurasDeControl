const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let adivinanza = null;


while (adivinanza !== numeroSecreto) {
   adivinanza = parseInt(prompt("Adivina el número entre 1 y 100:"));
   if (adivinanza < numeroSecreto) {
       console.log("El número es mayor.");
   } else if (adivinanza > numeroSecreto) {
       console.log("El número es menor.");
   } else {
       console.log("¡Felicidades! Adivinaste el número.");
   }
}

//Programa adivina el número:Se genera un número secreto aleatorio entre 1 y 100.Utiliza un bucle while para pedir al usuario que adivine el número.Dependiendo de la adivinanza del usuario, se le indica si el número es mayor o menor hasta que adivine correctamente.

