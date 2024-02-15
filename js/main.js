// Este problema apareció en el certamen recuperativo 1 del segundo semestre de 2011 en el campus Vitacura.
// Una máquina de alimentos tiene productos de tres tipos, A, B y C, que valen respectivamente $270, $340 y $390. La máquina acepta y da de vuelto monedas de $10, $50 y $100.
// Escriba un programa que pida al usuario elegir el producto y luego le pida ingresar las monedas hasta alcanzar el monto a pagar. Si el monto ingresado es mayor que el precio del producto, el programa debe entregar las monedas de vuelto, una por una.

alert("-------------------------\n----- BIENVENIDO ----\n------------------------- \nEste es nuestro menu\n1.TIPO A $270 \n2.TIPO B $340 \n3.TIPO C $390");

let eleccion = Number(prompt("¿Cual es su eleccion?"));
let monto = 0;
let precio;


if (eleccion === 1) {
  precio = 270;
} else if (eleccion === 2) {
  precio = 340;
} else if (eleccion === 3) {
  precio = 390;
} else {
  alert("Opción inválida.");
}

if (precio !== undefined) { 
  while (monto < precio) {
    let monedas = Number(prompt("Ingresa monedas solo de 50, 100,10"));

    if (monedas === 100 || monedas === 50 || monedas === 10) {
      monto += monedas;
    } else {
      alert("Pago invalido");
    }
  }
  let vueltos = monto - precio;
  alert("Sus vueltos son " + vueltos);
}