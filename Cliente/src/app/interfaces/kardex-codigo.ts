import { Kardex } from "./kardex";

export interface KardexCodigo {
    codigoId: String;
    nombre: String;
    ultimaCompra: String;
    ultimaVenta: String
    stockMin: String;
    stockMax: String;
    precio: String;
    moneda: String;
    unidad: String;
    localNombre: String; 
    registroKardex: Kardex[];
}
