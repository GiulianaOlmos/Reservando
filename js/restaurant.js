var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

/* Restaurant.prototype.reservarHorario = function(horarioReservado) {
    for (var i = 0; i < this.horarios.length; i++) {
        if (this.horarios[i] === horarioReservado) {
            this.horarios.splice(i, 1);
            return;
        }
    }
} */
//Codigo refactorizado
Restaurant.prototype.reservarHorario = function(horarioReservado){
    var horariosRestantes = this.horarios.filter(function(horario){
        return horario !== horarioReservado;
    });
    this.horarios = horariosRestantes;
}


Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        /* var sumatoria = 0;
        for (var i = 0; i < this.calificaciones.length; i++) {
        sumatoria += this.calificaciones[i]
        }
        var promedio = sumatoria / this.calificaciones.length;
        return Math.round(promedio * 10) / 10; */
        return Math.round(this.sacarPromedio()*10)/10;
    }
        
}


Restaurant.prototype.sacarSumatoria =  function(calificaciones){
   var sumatoria = 0;
   for(var i = 0; i<calificaciones.length; i++){
       sumatoria += calificaciones[i];
   }
   return sumatoria;
}
Restaurant.prototype.sacarPromedio = function(){
    var promedio = this.sacarSumatoria(this.calificaciones)/this.calificaciones.length;
    return promedio; 
}
