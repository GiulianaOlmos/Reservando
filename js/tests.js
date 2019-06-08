var expect = chai.expect;

//Test de la funcion Reservar Horario
describe('Test de Reservar Horario', function(){
	it('Desaparece el string', function(){
		var nuevoRestaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
		nuevoRestaurant.reservarHorario("13:00");
		expect(nuevoRestaurant.horarios).eql(["15:30", "18:00"]);
	})
	it('Disminuye la cantidad de elementos', function(){
		var nuevoRestaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
		nuevoRestaurant.reservarHorario("13:00");
		expect(nuevoRestaurant.horarios.length).to.equal(2);
	})
	it('No hay cambios al reservar un horario inexistente', function(){
		var nuevoRestaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
		nuevoRestaurant.reservarHorario("10:00");
		expect(nuevoRestaurant.horarios).eql(["13:00", "15:30", "18:00"]);
	})
	it('La cantidad de horarios se mantiene cuando el horario selecicionado no existe', function(){
		var nuevoRestaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
		nuevoRestaurant.reservarHorario("11:00");
		expect(nuevoRestaurant.horarios.length).to.equal(3);
	})
	it('No hay cambios al pasar un parametro vacio', function(){
		var nuevoRestaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
		nuevoRestaurant.reservarHorario();
		expect(nuevoRestaurant.horarios).eql(["13:00", "15:30", "18:00"]);
	})
	it('La cantidad de horarios se mantiene cuando el parametro esta vacio', function(){
		var nuevoRestaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
		nuevoRestaurant.reservarHorario();
		expect(nuevoRestaurant.horarios.length).to.equal(3);
	})
});
describe("Test de la funcion ObtenerPuntuacion()", function(){
	it("El calculo del promedio es correcto", function(){
		var nuevoRestaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
		var resultado = nuevoRestaurant.obtenerPuntuacion();
		expect(resultado).to.equal(7.4)
	})
	it("El calculo del promedio cuando no tiene notas es 0", function(){
		var nuevoRestaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
		var resultado = nuevoRestaurant.obtenerPuntuacion();
		expect(resultado).to.equal(0);
	})
})
