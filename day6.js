listaCompras={};
listaCompras.Frutas=[];
listaCompras.Lácteos=[];
listaCompras.Congelados=[];
listaCompras.Vegetales=[];
listaCompras.Dulces=[];
cadenaListaComprasFrutas='';
cadenaListaComprasLácteos='';
cadenaListaComprasCongelados='';
cadenaListaComprasVegetales='';
cadenaListaComprasDulces='';
listaOpciones=['1','2','3','4'];

while(true){
  pregunta=prompt(`Deseas agregar un alimento a tu lista de compras:\nResponde con las opciones\n1. "SI"\n2. "NO"\n3. Deseo eliminar un elemento de la lista\n4. SALIR`);
 if(!listaOpciones.includes(pregunta)){
  alert('Por favor ingrese una opción válida');
 }
  switch(pregunta){
    case '1':
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
      cadenaListaComprasFrutas=listaCompras.Frutas.join(', ');
      cadenaListaComprasLácteos=listaCompras.Lácteos.join(', ');
      cadenaListaComprasCongelados=listaCompras.Congelados.join(', ');
      cadenaListaComprasVegetales=listaCompras.Vegetales.join(', ');
      cadenaListaComprasDulces=listaCompras.Dulces.join(', ');
      break;
    case '2':
      alert(`La lista de Compras es:\nFrutas: ${cadenaListaComprasFrutas}\nLácteos: ${cadenaListaComprasLácteos}\nCongelados: ${cadenaListaComprasCongelados}\nVegetales: ${cadenaListaComprasVegetales}\nDulces: ${cadenaListaComprasDulces}`);
      pregunta=prompt(`Deseas agregar un alimento a tu lista de compras:\nResponde con las opciones\n1. "SI"\n2. "NO"\n3. Deseo eliminar un elemento de la lista\n4. SALIR`);
    case '3':
      alimentoAeliminar=prompt('Ingrese que alimento de la lista desea eliminar');
      condicional=0;
      for (const key in listaCompras) {
        if(listaCompras[key].includes(alimentoAeliminar)){
        listaCompras[key] = listaCompras[key].filter(elemento => elemento !== alimentoAeliminar);
        condicional=1;
        break;
        }
      }
      if(condicional==1){
        cadenaListaComprasFrutas=listaCompras.Frutas.join(', ');
        cadenaListaComprasLácteos=listaCompras.Lácteos.join(', ');
        cadenaListaComprasCongelados=listaCompras.Congelados.join(', ');
        cadenaListaComprasVegetales=listaCompras.Vegetales.join(', ');
        cadenaListaComprasDulces=listaCompras.Dulces.join(', ');
        alert(`La lista de Compras es:\nFrutas: ${cadenaListaComprasFrutas}\nLácteos: ${cadenaListaComprasLácteos}\nCongelados: ${cadenaListaComprasCongelados}\nVegetales: ${cadenaListaComprasVegetales}\nDulces: ${cadenaListaComprasDulces}`);
      }else {
        alert(`El alimento ${alimentoAeliminar} no se encuentra en la lista`);
      }
  }if (pregunta ==4) {
    break; 
}
}