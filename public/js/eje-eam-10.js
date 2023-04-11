//Archivo JavaScript para la calculadora
alert('Hola mundo');

function sumaNumeros(){
    //Declaración let y const
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //Proceso
const suma=n1 + n2;
    //Salida
    alert('Resultado de la suma:' +suma);
    resultado.innerHTML='Resultado: ' +suma;
    //alert("Aquí se van a sumar los números");
}

function restaNumeros(){
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //Proceso
const resta=n1 - n2;
    //Salida
    //alert('Resultado de la resta:' +resta);
    resultado.innerHTML='Resultado: ' +resta;
    //alert("Aquí se van a restar los números");
}

function multiplicaNumeros(){
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //Proceso
const multiplicacion=n1 * n2;
    //Salida
    //alert('Resultado de la multiplicacion:' +multiplicacion);
    resultado.innerHTML='Resultado: ' +multiplicacion;
    //alert("Aquí se van a multiplicar los números");
}

function divideNumeros(){
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //Proceso
const division=n1 / n2;
    //Salida
    //alert('Resultado de la suma:' +division);
    resultado.innerHTML='Resultado: ' +division;
    //alert("Aquí se van a dividir los números");
}