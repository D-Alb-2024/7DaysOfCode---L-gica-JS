numeroSecreto=parseInt(Math.floor(Math.random()*20+1));
contadorIntento=1;
maxIntentos=5;
console.log(numeroSecreto);
alert(`El número secreto esta entre 0 y 20\nTienes hasta ${maxIntentos} intentos`);
while(contadorIntento<=maxIntentos){
  ingreseNumero=prompt('Por favor ingrese su número:');
  if(ingreseNumero==numeroSecreto){
    palabra=contadorIntento>1?'veces':'vez';
    alert( `Acertaste el Número Secreto en ${contadorIntento} ${palabra}` );
    contadorIntento++;
    break;
  }else if(contadorIntento==maxIntentos){
    alert('Lo siento, llegaste al numero máximo de 5 intentos');
    break;
  }else {
    alert('No es el número secreto, sigue intentando');
    contadorIntento++;
  }
}