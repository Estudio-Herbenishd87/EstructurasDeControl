let numeros = [];
let continuar = true;


while (continuar) {
   if (numeros.length === 10) {
       console.log("Se han generado todos los números posibles.");
       break;
   }


   let numeroAleatorio = Math.floor(Math.random() * 10) + 1;


   if (!numeros.includes(numeroAleatorio)) {
       numeros.push(numeroAleatorio);
       console.log(numeroAleatorio);
   }


   continuar = confirm("¿Deseas generar otro número?");
}


console.log("Secuencia generada:", numeros);


//Generador de Secuencias Aleatorias:Utiliza un bucle while para generar números aleatorios entre 1 y 10 sin repeticiones.Verifica si el número generado ya está en la lista numeros.
// Si no está, lo agrega a la lista y lo imprime.El bucle continúa hasta que el usuario decide detenerlo o se generan todos los números posibles.
