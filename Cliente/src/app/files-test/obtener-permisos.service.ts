import axios from 'axios';

export class ObtenerPermisosService {
  constructor() {}
 
  public obtenerCodigoPermiso(nivelId: string): string {
    const ultimosNumeros = nivelId.slice(-2);
    return ultimosNumeros.toString();
  }

}
