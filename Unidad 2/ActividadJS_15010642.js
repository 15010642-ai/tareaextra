
var mes;
mes = prompt("Ingresa tu mes de nacimiento en números (1-12)");

var dia;
dia = prompt("Ingresa tu día de nacimiento")

mes = parseInt(mes)
dia = parseInt(dia)

// Confirmar que el mes no sea menor a 1 o mayor a 12
if (mes < 1 || mes > 12) {
  alert("Mes inválido");
} 
// Confirmar que el día no sea meonr a 1 o mayor de 29-30-31
else if (
  dia < 1 ||
  (mes == 2 && dia > 29) ||
  ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) ||
  ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && dia > 31)
) {
  alert("Día inválido para ese mes");
}
else 

//Signo zodiacal dependiendo del mes y día

if ((mes==7) && (dia>=23) || (mes==8) && (dia<=23))
  alert("Tu signo es Leo")
else if ((mes==8) && (dia>=24) || (mes==9) && (dia<=22))
  alert("Tu signo es Virgo")
else if ((mes==9) && (dia>=23) || (mes==10) && (dia<=23))
  alert("Tu signo es Libra")
else if ((mes==10) && (dia>=24) || (mes==11) && (dia<=22))
  alert("Tu signo es Escorpio")
else if ((mes==11) && (dia>=23) || (mes==12) && (dia<=21))
  alert("Tu signo es Sagitario")
else if ((mes==12) && (dia>=22) || (mes==1) && (dia<=20))
  alert("Tu signo es Capricornio")
else if ((mes==1) && (dia>=21) || (mes==2) && (dia<=19))
  alert("Tu signo es Acuario")
else if ((mes==2) && (dia>=20) || (mes==3) && (dia<=20))
  alert("Tu signo es Piscis")
else if ((mes==3) && (dia>=21) || (mes==4) && (dia<=20))
  alert("Tu signo es Aries")
else if ((mes==4) && (dia>=21) || (mes==5) && (dia<=20))
  alert("Tu signo es Tauro")
else if ((mes==5) && (dia>=21) || (mes==6) && (dia<=20))
  alert("Tu signo es Géminis")
else if ((mes==6) && (dia>=21) || (mes==7) && (dia<=22))
  alert("Tu signo es Cáncer")
else 
  alert("La fecha ingresada no es válida")