// Declaración de variables
listaCompras={};
listaCompras.Frutas=[];
listaCompras.Lácteos=[];
listaCompras.Congelados=[];
listaCompras.Vegetales=[];
listaCompras.Dulces=[];
while(true){
  pregunta=prompt(`Deseas agregar un alimento a tu lista de compras:\nResponde con un "SI" o "NO"`);
  if(pregunta=='SI'){
    ingresarAlimento=prompt('Qué alimento deseas agregar?');
    ingresarPorCategoria=prompt('Que categoria pertenece el alimento:\n1. Frutas\n2. Lácteos\n3. Congelados\n4. Vegetales\n5. Dulces');
    while(ingresarPorCategoria>5){
    alert('Por favor ingrese solo las opciones mostradas');
    ingresarPorCategoria=prompt('Que categoria pertenece el alimento:\n1. Frutas\n2. Lácteos\n3. Congelados\n4. Vegetales\n5. Dulces');
    }
    switch(ingresarPorCategoria){
      case '1':
        listaCompras.Frutas.push(ingresarAlimento);
        break;
      case '2':
        listaCompras.Lácteos.push(ingresarAlimento);
        break;
      case '3':
        listaCompras.Congelados.push(ingresarAlimento);
        break;
       case '4':
        listaCompras.Vegetales.push(ingresarAlimento);
        break;
      case '5':
        listaCompras.Dulces.push(ingresarAlimento);
        break;
    }
  } else {
    cadenaListaComprasFrutas=listaCompras.Frutas.join(', ');
    cadenaListaComprasLácteos=listaCompras.Lácteos.join(', ');
    cadenaListaComprasCongelados=listaCompras.Congelados.join(', ');
    cadenaListaComprasVegetales=listaCompras.Vegetales.join(', ');
    cadenaListaComprasDulces=listaCompras.Dulces.join(', ');
    alert(`La lista de Compras es:\nFrutas: ${cadenaListaComprasFrutas}\nLácteos: ${cadenaListaComprasLácteos}\nCongelados: ${cadenaListaComprasCongelados}\nVegetales: ${cadenaListaComprasVegetales}\nDulces: ${cadenaListaComprasDulces}`);
    break;
  }
}