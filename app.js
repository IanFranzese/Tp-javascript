// EJERCICIOS NIVEL INTERMEDIO

// 1) VERIFICAR SI ES PRIMO

let numeroPrimo = 11;
let esNumeroPrimo = true;

for(let i = 2; i < numeroPrimo/2; i++){

    if(numeroPrimo % i === 0){
        esNumeroPrimo = false;
    }
}

if(esNumeroPrimo){
    console.log("Es numero primo")
}else{
    console.log("No es numero primo")
}



  
// 2) OPERACIONES DE MATRIZ
function suma(a, b){
    return a + b;
}

const resultado = suma(5, 20);
    console.log(resultado); 


// 3) SUMA EN UN RANGO
function sumaEnRango(){
    let rango = 0;
    for (let i = 1; i <= 100; i++){
        rango += i;
    }
    return rango;
}

console.log(sumaEnRango());

// 4) CONTAR VOCALES

function contarVocales(cadena){
    cadena = cadena.toLowerCase();

    let contador = 0

    for (let i = 0; i < cadena.length; i++){
        const caracter = cadena[i];

        if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u'){
            contador++;
          }
    }
    return contador;
}

console.log(contarVocales("Vamos a contar las vocales de esta oracion"));


// 5) De una matriz devuelve una matriz con elementos únicos

function obtenerElementosUnicos(matriz) {
    let elementosUnicos = [];

    matriz.forEach(function(elemento) {
        
      if (!elementosUnicos.includes(elemento)) {
        elementosUnicos.push(elemento);
      }
    });
    return elementosUnicos;
  }

  const matrizOriginal = ["Sofia", "Maria", "Pedro", "Sofia"];

  const matrizUnica = obtenerElementosUnicos(matrizOriginal);
  console.log(matrizUnica);

//   6) CADENA DE TEXTO SIN USAR REVERSE() 

    function invertirCadena(cadena) {
        let resultado = '';
        for (const caracter of cadena) {
        resultado = caracter + resultado;
        }
        return resultado;
  }

  console.log(invertirCadena("invertir texto"));






//   CARRUSEL DE IMAGENES

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');

let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

showImage(currentIndex);


// AUMENTAR Y DISMINUIR TEXTO

const textoElement = document.getElementById('texto');
const aumentarButton = document.getElementById('aumentar');
const disminuirButton = document.getElementById('disminuir');

function cambiarTamañoTexto(incremento) {
  const tamañoActual = window.getComputedStyle(textoElement, null).getPropertyValue('font-size');
  const tamañoNuevo = (parseFloat(tamañoActual) + incremento) + 'px';
  textoElement.style.fontSize = tamañoNuevo;
}

aumentarButton.addEventListener('click', ()=> {
  cambiarTamañoTexto(5);
});

disminuirButton.addEventListener('click', ()=> {
  cambiarTamañoTexto(-5); 
});

// TARJETAS

const tarjetas = document.querySelectorAll('.tarjeta');

tarjetas.forEach((tarjeta) => {
  const botonExpandir = tarjeta.querySelector('.expandir');
  const detalles = tarjeta.querySelector('.detalles');

  botonExpandir.addEventListener('click', () => {
    if (detalles.style.display === 'none' || detalles.style.display === '') {
      detalles.style.display = 'block';
      botonExpandir.textContent = 'Ocultar';
    } else {
      detalles.style.display = 'none';
      botonExpandir.textContent = 'Mostrar más';
    }
  });
});
 
