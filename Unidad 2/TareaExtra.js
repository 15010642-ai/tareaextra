var quiereJugar

quiereJugar = true

while (quiereJugar){

	var numeroUsuario

	numeroUsuario = prompt("Ingrese un número entre 3 y 6")

	var numeroAleatorio

	//Obtenemos valor entre 1-9 (eg. 0.99999*9 = 8.99999 -> math.floor(8.99999) ->  8 + 1 = 9)
	numeroAleatorio = Math.floor(Math.random() * 9) + 1

	//Validar que el numero de usuario no sea  menor a 1 y mayor que 9
	while (numeroUsuario < 1 || numeroUsuario >9){
		numeroUsuario = prompt("Ingrese un número entre 3 y 6")
	}

	var adivinacion = prompt("Ingresa la opcion que crees 1. el numero es mayor 2. el numero es menor 3. el numero es igual")


	//Mayor
	if (adivinacion == 1){
		if (numeroUsuario > numeroAleatorio)
			alert("Felicidades el numero ingresado: "+numeroUsuario+" es mayor a: "+numeroAleatorio)
		else
			alert("Te equivocaste")
	//Menor	
	}else  if (adivinacion ==2){
		if (numeroUsuario < numeroAleatorio)
			alert("Felicidades el numero ingresado: "+numeroUsuario+" es menor a: "+numeroAleatorio)
		else
			alert("Te equivocaste")
	//Igual
	}else if(adivinacion==3){
		if (numeroUsuario == numeroAleatorio)
			alert("Felicidades el numero ingresado: "+numeroUsuario+" es igual a: "+numeroAleatorio)
		else
			alert("Te equivocaste")
	}

	var respuestaUsuario = prompt("Elige si quieres seguir jugando 1. Si 2. No")
	
	if (respuestaUsuario == 1)
		quiereJugar = true
	else
		quiereJugar = false

}

alert ("Fin del juego")