function suma() {
  primerNumeroAingresar=parseFloat(prompt('Ingrese el número:'));
  segundoNumeroAingresar=parseFloat(prompt('Ingrese el número:'));
  resultadoSuma=primerNumeroAingresar+segundoNumeroAingresar;
  alert(`El resultado es: ${resultadoSuma}`);
}
function resta() {
  primerNumeroAingresar=parseFloat(prompt('Ingrese el número:'));
  segundoNumeroAingresar=parseFloat(prompt('Ingrese el número:'));
  resultadoResta=primerNumeroAingresar-segundoNumeroAingresar;
  alert(`El resultado es: ${resultadoResta}`);
}
function multiplicacion() {
  primerNumeroAingresar=parseFloat(prompt('Ingrese el número:'));
  segundoNumeroAingresar=parseFloat(prompt('Ingrese el número:'));
  resultadoMultiplicacion=primerNumeroAingresar*segundoNumeroAingresar;
  alert(`El resultado es: ${resultadoMultiplicacion}`);
}
function division() {
  primerNumeroAingresar=parseFloat(prompt('Ingrese el primer número:'));
  segundoNumeroAingresar=parseFloat(prompt('Ingrese el segundo número:'));
  while(segundoNumeroAingresar==0){
    alert('Ingrese un número distinto a cero');
    segundoNumeroAingresar=parseFloat(prompt('Ingrese el segundo número:'));
  }
  resultadoDivision=primerNumeroAingresar/segundoNumeroAingresar;
  alert(`El resultado es: ${resultadoDivision}`);
}
listaOpciones=['1','2','3','4','5'];
while(true){
  opcionIngresada=prompt('Ingrese la operación a realizar:\n***1. SUMA (+)\n***2. RESTA (-)\n***3. MULTIPLICACIÓN (x)\n***4. DIVISIÓN (/)\n***5. SALIR');
  if(!listaOpciones.includes(opcionIngresada)){
    alert('Ingrese una opción válida');
  }
  if(opcionIngresada==5){
    break;
  }
  switch(opcionIngresada){
    case '1':
      suma();
      break;
    case '2':
      resta();
      break;
    case '3':
      multiplicacion();
      break;
     case '4':
      division();
      break;
  }
}