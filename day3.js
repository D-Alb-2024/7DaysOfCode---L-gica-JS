opciones1=['Front-End', 'Back-End'];
opciones2=['React', 'Vue'];
opciones3=['C#','Java'];
arrayRespuestas=[];
pregunta1=prompt(`Quiere seguir hacia el área:\n1. Front-End\n2. Back-End`);

if(pregunta1==1){
  pregunta2=prompt(`Quiere aprender:\n1. React\n2. Vue`);
  arrayRespuestas[pregunta1-1]=opciones1[pregunta1-1];
  if(pregunta2==1){
    arrayRespuestas[pregunta2]=opciones2[pregunta2-1];
  }else{
    arrayRespuestas[pregunta2-1]=opciones2[pregunta2-1];
  }
}else {
  pregunta2=prompt(`Quiere aprender:\n1. C#\n2. Java`);
  arrayRespuestas[pregunta1-2]=opciones1[pregunta1-1];
  if(pregunta2==1){
  arrayRespuestas[pregunta2]=opciones3[pregunta2-1];
  }else{
    arrayRespuestas[pregunta2-1]=opciones3[pregunta2-1];
}
};
opciones4=[`Seras un desarrollador ${arrayRespuestas[0]}`, 'Seras un FULL STACK'];
pregunta3=prompt(`Dígame\n1. Quieres especializarte en ${arrayRespuestas[0]}\n2. Sere desarrollador FULL STACK`);
alert(opciones4[pregunta3-1]);
j=2;
do {
  pregunta4=prompt(`Qué tecnologías quieres especializarte?\nIngrese por favor la tecnología`);
  arrayRespuestas[j]=pregunta4;
  alert(`Aprenderas mucho con ${pregunta4}`);
  j++;
  pregunta5=prompt(`¿Hay alguna otra tecnología que te gustaría aprender?\n1. SI\n2. NO`);
}while(pregunta5==1) ;

console.log(arrayRespuestas);