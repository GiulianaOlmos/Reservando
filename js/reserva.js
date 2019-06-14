var Reserva = function(horario, cantDePersonas, precioPorPersona, codidoDeDesc){
    this.horario = horario;
    this.cantDePersonas = cantDePersonas;
    this.precioPorPersona = precioPorPersona;
    this.codidoDeDesc = codidoDeDesc;
}

Reserva.prototype.calcularPrecioBase = function(){
    var precioBase = this.cantDePersonas * this.precioPorPersona;
    return precioBase;
}
Reserva.prototype.calcularPrecioFinal = function(precioBase){
    var descuento1;
    var descuento1Final;
    var descuento2;
    var descuento2Final;
    if(this.codidoDeDesc === "DES15"){
        descuento1 = 0.15;
        descuento1Final = descuento1 * precioBase;
    } else if (this.codidoDeDesc === "DES20"){
        descuento1 = 0.20;
        descuento1Final = descuento1 * precioBase
    } else if (this.codidoDeDesc){
        descuento1 = this.precioPorPersona;
        descuento1Final = precioBase - descuento1;
    } else {
        descuento1 = 1;
        descuento1Final = 0;
    }
    if(this.cantDePersonas > 3 && this.cantDePersonas < 7){
        descuento2 = 0.05;
        descuento2Final = precioBase * descuento2;
    } else if(this.cantDePersonas > 6 && this.cantDePersonas < 9){
        descuento2 = 0.10;
        descuento2Final = precioBase * descuento2;
    } else if(this.cantDePersonas > 8){
        descuento2 = 0.15;
        descuento2Final = precioBase * descuento2;
    } else {
        descuento2 = 1;
        descuento2Final = 0;
    }
    if(this.horario){}
}