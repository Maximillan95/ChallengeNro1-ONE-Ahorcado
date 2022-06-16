var comenzar = document.querySelector("#boton-iniciarJuego");
var botonAgregarPalabra = document.querySelector("#boton-agregarPalabra");
var botonCancelar = document.querySelector(".boton-cancelar");
var botonGuardarYEmpezar = document.querySelector(".boton-guardar");
var contenedorAgregarPalabra = document.querySelector(".contenedor-agregarPalabra");
var contenedorCanvas = document.querySelector(".canvas");
var botonesInicio = document.querySelector(".contenedor-botones-inicio");
var botonNuevoJuego = document.querySelector("#boton-nuevoJuego");
var botonDesistir = document.querySelector(".boton-desistir");

comenzar.addEventListener("click",function(){
    botonesInicio.classList.add("ocultar");
    contenedorCanvas.classList.add("agregarCanvas-visible");
});

botonAgregarPalabra.addEventListener("click", function(){
    botonesInicio.classList.add("ocultar");
    contenedorAgregarPalabra.classList.add("agregarPalabra-visible");
});

botonGuardarYEmpezar.addEventListener("click", function(){
    contenedorAgregarPalabra.classList.remove("agregarPalabra-visible");
    contenedorCanvas.classList.add("agregarCanvas-visible");
});

botonCancelar.addEventListener("click",function(){
    botonesInicio.classList.remove("ocultar");
    contenedorAgregarPalabra.classList.remove("agregarPalabra-visible");

});

botonNuevoJuego.addEventListener("click",function(){
    location.reload();
    botonesInicio.classList.add("ocultar");
    contenedorAgregarPalabra.classList.add("agregarCanvas-visible");
    
});


botonDesistir.addEventListener("click", function(){
    location.reload();
});