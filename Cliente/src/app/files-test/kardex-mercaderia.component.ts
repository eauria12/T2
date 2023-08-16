export class KardexMercaderiaComponent {

handleNivelSeleccionado(type:string):Object {

    let typesOfNivel= ['Nacional', 'Zona', 'Local'];
    let resultado:any={}
      if (type===typesOfNivel[0]) {
        resultado["zonaSelected"] = false;
        resultado["NivelLocal"] = "Nacional";
        resultado["seleccionNivel"] ="N";
      } else if (type===typesOfNivel[1]) {
        resultado["zonaSelected"] = true;
        resultado["NivelLocal"] = "Zona";
        resultado["seleccionNivel"] ="Z";
      } else if (type===typesOfNivel[2]) {
        resultado["zonaSelected"] = false;
        resultado["NivelLocal"] = "Local";
        resultado["seleccionNivel"] ="L";
      }
      return resultado;
    
  }
  
  onZonaSeleccionada(zon: string) {
    let zona= ['Nacional', 'Zona Centro-Norte', 'Zona Sur'];
    let zonaSelected = "";
      if (zon === "Nacional") {
        zonaSelected = "Nacional";
        console.log("Seleccione nacional");
      } else if (zon === zona[1]) {
        zonaSelected= "Zona 1";
        console.log("Seleccione Centro-Norte");
      } else if (zon === zona[2]) {
        zonaSelected = "Zona 2";
        console.log("Seleccione Sur");
      }
    return zonaSelected;
  }
}