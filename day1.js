let numeroUn = 1;

let stringUn = '1';

let numeroTreinta = 30;

let stringTreinta = '30';

let numeroDiez = 10;

let stringDiez = '10';

if(numeroUn==stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
}else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

// valor1=typeof(numeroTreinta);
// valor2=typeof(stringTreinta);
if(typeof(numeroTreinta)==typeof(stringTreinta)){
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
}else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
  // console.log(typeof(numeroTreinta), typeof(stringTreinta));
  // console.log(`Estas variables son de tipo ${typeof numeroTreinta} y ${typeof stringTreinta}`);
}
console.log(typeof(numeroTreinta), typeof(stringTreinta));
  console.log(`Estas variables son de tipo ${typeof numeroTreinta} y ${typeof stringTreinta}`);

if(numeroTreinta===stringTreinta){
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
}else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
 
}

if(numeroDiez==stringDiez) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
}else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}