// Funcion para sumar dos numeros 
function sumar() {
    // Obtener el valor del primer numero del input con id 'numero1'
    var num1 = parseFloat(document.getElementById('numero1').value);

    // Obtener el valor del segundo numero del input con id 'numero2'
    var num2 = parseFloat(document.getElementById('numero2').value);

    // Realizar la operacion de suma 
    var resultado = num1 + num2;

    // Llamar a la funcion mostrarResultado para mostrar el resultado en la pagina
    mostrarResultado(resultado);
}

// Funcion para restar dos numeros
function restar() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    var resultado = num1 - num2;

    mostrarResultado(resultado);
}

//Funcion para multiplicar dos numeros
function multiplicar() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    var resultado = num1 * num2;

    mostrarResultado(resultado);
}

// Funcion para dividir dos numeros
function dividir() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    if (num2 === 0) {
        // Si el divisor es cero, mostrar un mensaje de error
        mostrarResultado('No es posible dividir por cero');
    }else {
        // Realizar la operacion de division
        var resultado = num1 / num2;

        // Llamar a la funcion mostrarResultado p
        mostrarResultado(resultado);
    }
}

// Funcion para mostrar el resultado en la pagina 
function mostrarResultado(resultado) {
    // AActualizar el contenido del elemento con id 'resultado' con el resultado formateado
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado.toFixed(2);
}