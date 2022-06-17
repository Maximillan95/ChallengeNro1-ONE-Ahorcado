var palabras = ['ARGENTINA','CHILE','BRASIL','PERU','BOLIVIA','PARAGUAY','CANADA','USA','CUBA','AUSTRALIA','IRLANDA','ESPAÑA','SUDAFRICA','NORUEGA','ALEMANIA','HUNGRIA','FRANCIA','PORTUGAL','BELGICA','JAPON','TAILANDIA','CHINA','SUIZA','EGIPTO','IRAN','ITALIA',];
var tablero = document.getElementById('horca').getContext("2d");
var letras = [];
var palabraCorrecta = "";
var errores = 5;
var botonNuevoJuego = document.querySelector("#boton-nuevoJuego");
var agregarPalabra = document.querySelector(".campo-agregarTexto");
var contenedorCanvas = document.querySelector(".canvas");

function escojerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabra);
    return palabraSecreta;
}

function dibujarLineas(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round"; //cantos redondeados
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    var ancho = 600/palabraSecreta.length; //maximo que van a ocurar las lineas
    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500+(ancho*i),340);
        tablero.lineTo(550+(ancho*i),340);
    }
    tablero.stroke();
    tablero.closePath();
}dibujarLineas(escojerPalabraSecreta());

function escribirLetraCorrecta(index){
    tablero.font = "bold 52px Inter"; //usamos FONT porque es un texto
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    var ancho = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 505+(ancho*index),320); // X intex para que cada letra se quede arriba de cada linea
}

function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font = "40px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    tablero.fillText(letra, 535+(40*(10-errorsLeft)),410,40);
}

function verificarLetraClicada(key){
    if (letras.length<1 || letras.indexOf(key)<0){ //indexOF es la psicion de la tecla
        letras.push(key);
        return false;
    }else{
        letras.push(key);
        return true;
    }
}

function adicionarLetraCorrecta(i){
    palabraCorrecta+=palabraSecreta[i].toUpperCase() //toUpperCase para LETRA MAYUSCULA
}

function adicionarLetraIncorrecta(letter){
    if(palabraSecreta.indexOf(letter)<=0){
        errores -= 1;
    }
}

contenedorCanvas.onkeydown = (e) => {
    let letra=e.key.toUpperCase(); //almacenamos en LETRA las teclas clicadas
    if(!verificarLetraClicada(e.key)){
        if(palabraSecreta.includes(letra)){
            console.log(letra)
            adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
            for (let i=0; i<palabraSecreta.length; i++){
                if(palabraSecreta[i]===letra){
                    escribirLetraCorrecta(i);
                }
            }
        }else{
            if(!verificarLetraClicada(e.key))
                return
                adicionarLetraIncorrecta(letra);
                escribirLetraIncorrecta(letra,errores);
        }
    }
};
//**********************************************************/
//*AGREGAR PALABRAS NUEVAS
botonGuardar.addEventListener("click", function(){
    agregarPalabraNueva(agregarPalabra.value);
    agregarPalabra.value="";
    console.log(palabras);
});

function agregarPalabraNueva(recibePalabra){
    recibePalabra = recibePalabra.toUpperCase();
    palabras.push(recibePalabra);
    return palabras;
}

//**********************************************************/
//*DIBUJANDO LA HORCA/
function dibujarHorca(){
    tablero.beginPath();
    tablero.moveTo(100,400);
    tablero.lineTo(300,400);
    tablero.moveTo(150,400);
    tablero.lineTo(150,50);
    tablero.lineTo(250,50);
    tablero.lineTo(250,95);
    tablero.stroke();
}dibujarHorca();

function dibujarCabeza(){
    tablero.beginPath();
    tablero.arc(250,120,25,0,2*3.14)
    tablero.stroke();
}dibujarCabeza();

function dibujarCuerpo(){
    tablero.beginPath();
    tablero.moveTo(250,145);
    tablero.lineTo(250,225);
    tablero.stroke();
}dibujarCuerpo();

function dibujarBrazos(){
    tablero.moveTo(250,165);
    tablero.lineTo(225,195);
    tablero.moveTo(250,165);
    tablero.lineTo(275,195);
    tablero.stroke();
}dibujarBrazos();

function dibujarPiernas(){
    tablero.beginPath();
    tablero.moveTo(250, 225);
    tablero.lineTo(225,265);
    tablero.moveTo(250, 225);
    tablero.lineTo(275,265);
    tablero.moveTo(250,132.5);
    tablero.stroke();
}dibujarPiernas();
//**********************************************************/
