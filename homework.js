// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola mundo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 42;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función.

function devolverString(str) {
  return str;
}

function suma(x, y) {
  return x + y;
}

function resta(x, y) {
  return x - y;
}

function multiplica(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function sonIguales(x, y) {
  return x === y;
}

function tienenMismaLongitud(str1, str2) {
  return str1.length === str2.length;
}

function menosQueNoventa(num) {
  return num < 90;
}

function mayorQueCincuenta(num) {
  return num > 50;
}

function obtenerResto(x, y) {
  return x % y;
}

function esPar(num) {
  return num % 2 === 0;
}

function esImpar(num) {
  return num % 2 !== 0;
}

function elevarAlCuadrado(num) {
  return Math.pow(num, 2);
}

function elevarAlCubo(num) {
  return Math.pow(num, 3);
}

function elevar(num, exponent) {
  return Math.pow(num, exponent);
}

function redondearNumero(num) {
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  return Math.ceil(num);
}

function agregarSimboloExclamacion(str) {
  return str + "!";
}

function combinarNombres(nombre, apellido) {
  return nombre + " " + apellido;
}

function obtenerSaludo(nombre) {
  return "Hola " + nombre + "!";
}

function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
}

function obtenerMayor(x, y) {
  return x > y ? x : y;
}

function saludo(idioma) {
  if (idioma === "aleman") {
    return "Guten Tag!";
  } else if (idioma === "mandarin") {
    return "Ni Hao!";
  } else if (idioma === "ingles") {
    return "Hello!";
  } else {
    return "Hola!";
  }
}

function esDiezOCinco(numero) {
  return numero === 10 || numero === 5;
}

function estaEnRango(numero) {
  return numero < 50 && numero > 20;
}

function esEntero(numero) {
  return Math.floor(numero) === numero;
}

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else {
    return numero;
  }
}

function esPrimo(numero) {
  if (numero < 2) return false;
  if (numero === 2) return true;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
