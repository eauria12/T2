export interface Saldolistar {
    companiaId: number;
    zonaId: number;
    zonaNombre: string;
    localId: number;
    localNombre: string;
    lineaId: number;
    lineaNombre: string;
    grupoId: number;
    grupoNombre: string;
    itemId: string;
    itemNombre: string;
    unidadMedidaId: string;
    unidadMedidaNombre: string;
    paisId: number;
    paisNombre: string;
    saldo: number;
    reservado: number;
    disponible: number;
    ventasCantidad: number;
    dias: number;
    unidadFactor: number;
    unidadMedidaConversion: string;
    cantidadConversion: number;
    costoUnitario: number;
  }
  