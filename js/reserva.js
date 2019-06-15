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

Reserva.prototype.calcularDescuentoPorCodigo= function(){
    var descuentoPorCodigo;
    var descuentoPorCodigoFinal;
    var precioBase = this.calcularPrecioBase();
    if(this.codidoDeDesc === "DES15"){
        descuentoPorCodigo = 0.15;
        descuentoPorCodigoFinal = descuentoPorCodigo * precioBase;
    } else if (this.codidoDeDesc === "DES200"){
        descuentoPorCodigo = 200;
        descuentoPorCodigoFinal = 200;
    } else if (this.codidoDeDesc === "DES1"){
        descuentoPorCodigoFinal = this.precioPorPersona;
    } else {
        descuentoPorCodigoFinal = 0;
    };
    return descuentoPorCodigoFinal;
}
Reserva.prototype.calcularDescuentoPorCantidadDePersonas= function(){
    var descuentoPorCantDePersonas;
    var descuentoPorCantDePersonasFinal;
    var precioBase = this.calcularPrecioBase();
    if(this.cantDePersonas > 3 && this.cantDePersonas < 7){
        descuentoPorCantDePersonas = 0.05;
        descuentoPorCantDePersonasFinal = precioBase * descuentoPorCantDePersonas;
    } else if(this.cantDePersonas > 6 && this.cantDePersonas < 9){
        descuentoPorCantDePersonas = 0.10;
        descuentoPorCantDePersonasFinal = precioBase * descuentoPorCantDePersonas;
    } else if(this.cantDePersonas > 8){
        descuentoPorCantDePersonas = 0.15;
        descuentoPorCantDePersonasFinal = precioBase * descuentoPorCantDePersonas;
    } else {
        descuentoPorCantDePersonasFinal = 0;
    }
    return descuentoPorCantDePersonasFinal;
}
Reserva.prototype.calcularAdicionalPorHorasPico= function(){
    var adicionalPorHoraPico;
    var adicionalPorHoraPicoTotal;
    var precioBase = this.calcularPrecioBase();
    if(this.horario.getHours() === 13 || this.horario.getHours() === 14 || this.horario.getHours() === 20 || this.horario.getHours() === 21){
        adicionalPorHoraPico = 0.05;
        adicionalPorHoraPicoTotal = precioBase * adicionalPorHoraPico;
    } else {
        adicionalPorHoraPicoTotal = 0;
    }
    return adicionalPorHoraPicoTotal;
}
Reserva.prototype.calcularAdicionalPorFinDeSemana= function(){
    var adicionalPorFinDeSemana;
    var adicionalPorFinDeSemanaTotal;
    var precioBase = this.calcularPrecioBase();
    if(this.horario.getDay() === 0 || this.horario.getDay() === 6 || this.horario.getDay() === 5){
        adicionalPorFinDeSemana = 0.10;
        adicionalPorFinDeSemanaTotal = precioBase * adicionalPorFinDeSemana;
    } else {
        adicionalPorFinDeSemanaTotal = 0;
    }
    return adicionalPorFinDeSemanaTotal;
}
Reserva.prototype.calcularPrecioFinal = function(){
    var precioBase = this.calcularPrecioBase();
    var precioFinal = precioBase - this.calcularDescuentoPorCodigo() - this.calcularDescuentoPorCantidadDePersonas() + this.calcularAdicionalPorHorasPico() + this.calcularAdicionalPorFinDeSemana();
    return precioFinal;
}