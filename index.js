//1 funcion que determine si es un año bisiesto
function esBisiesto(año){
   return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)
      
}

console.log(`el punto uno valida año 2000 ${esBisiesto(2000)}`)
console.log(`el punto uno valida año 2021 ${esBisiesto(2021)}`)

//2 fuuncion que convierta grados Celsius a Fahrenheit
function convertirAFarenheit(celsius){
    return (celsius * 9 / 5) + 32    
}

console.log(convertirAFarenheit(80))
console.log(convertirAFarenheit(180))

//3 Funcion que devuelva el mayor de dos numeros
function mayorDeDos(n1, n2){      
    return (n1 > n2 ? n1 : n2)    
}
const numero1 = "16";
const numero2 = "25";
const resultado = mayorDeDos(numero1, numero2)

console.log(`el mayor entre ${numero1} y ${numero2} es ${resultado}`)

//4 funcion que convierta una cantidad de minutos en una cadena que indique cuantas horas y minutos corresponden
function convertirMinutos(minutos){
    const horas = Math.floor(minutos / 60)
    const minutosRestantes = minutos % 60

    return `${horas} hora(s) y ${minutosRestantes} minutos`
}

console.log(convertirMinutos(130))
console.log(convertirMinutos(90))
console.log(convertirMinutos(220))

//5 funcion que determine si un numero esta dentro de un rango dado (incluyendo los limites)

function estaEnRango(numero, inicio, fin) {
    if(numero >= inicio && numero <= fin){
        return true
    }else {
        return false
    }
}
console.log(estaEnRango(5, 1, 10));
console.log(estaEnRango(8, 12, 17));

//6 funcion que calcule el precio final despues de aplicar un porcentaje de descuento a un precio inicial
function calcularPrecioFinal(precioIncial, descuento){
    const montoDescuento = precioIncial * (descuento / 100);
    const precioFinal = precioIncial - montoDescuento
    return precioFinal
}

console.log(calcularPrecioFinal(1000, 20))
console.log(calcularPrecioFinal(1500, 50))
//7 funcion que determine si una persona puede votar segun su edad
function puedeVotar(edad){
    if(edad >= 18){
        return true
    }else{
        return false
    }
}
console.log(puedeVotar(23))
console.log(puedeVotar(17))
//8 funcion que calcule el area de un triangulo dado su base y altura
function calcularAreaTriangulo(base, altura){
    return (base * altura) / 2
}

console.log(calcularAreaTriangulo(12, 23))
console.log(calcularAreaTriangulo(62, 180))
