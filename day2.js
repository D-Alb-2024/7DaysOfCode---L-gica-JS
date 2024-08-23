let nombreUser=prompt('¿Cuál es tu nombre?');
edadUser=prompt('¿Cuántos años tienes?');
// console.log(edadUser);
let lenguajeProgramacion=prompt('¿Qué lenguaje de programación estás estudiando?');

console.log(`Hola ${nombreUser}, tienes ${edadUser} años y ya estás aprendiendo ${lenguajeProgramacion}!`);

// opcional
pregunta=Number(prompt(`¿Te gusta estudiar ${lenguajeProgramacion}?\nOpciones:\n1. para SÍ \n2. para NO`));
if(pregunta===1){
  alert(`¡Muy bien! Sigue estudiando y tendrás mucho éxito`);
}else {
  alert(`Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?`);
}