export class SaldoInventarioComponent {

  constructor() { }

  filtraArticulos(lineArticulo: string):string {
    
  let linesArticulo = ['Por Código de Artículo', 'Por Línea de Artículo'];
  let resultado="";
      if (lineArticulo === linesArticulo[0]) {
        resultado="mostrarFiltroCodigo";
      } else if (lineArticulo === linesArticulo[1]) {
        resultado="mostrarListaLineas";
      }
    return resultado;
    
  }
  escogeArticulos(formatoPresentar: string):string {
    let presentacion = ['Saldos Consolidados', 'Saldos por Local'];
    let formatoPresentacion=""
      if (formatoPresentar === presentacion[0]) {
        formatoPresentacion = "C";
      } else if (formatoPresentar === presentacion[1]) {
        formatoPresentacion = "L";
      }
    return formatoPresentacion;
  }

}
