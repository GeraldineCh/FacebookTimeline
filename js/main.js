var nombre = getElementById('name').value;
var pass = getElementById('pass').value;

var registrados = [ { nombre: 'gchaucae@mail.com', pass : 'diciembre02'},
					{ nombre: 'keyches@gmail.com', pass : 'keyches1214'}];

function validacion(nombre,pass) {
	for (nombre in registrados)
	{
		if (nombre == this.nombre)
		{
			if (pass == this.pass)
				{alert('Usuario aceptado');}
		}
	}
}