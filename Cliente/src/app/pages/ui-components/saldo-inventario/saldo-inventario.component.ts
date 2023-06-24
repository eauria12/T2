import { Component } from '@angular/core';

@Component({
  selector: 'app-saldo-inventario',
  templateUrl: './saldo-inventario.component.html',
  styleUrls: ['./saldo-inventario.component.scss']
})
export class SaldoInventarioComponent {
  constructor() { }
  typesOfNivel: string[] = ['Nacional', 'Zona', 'Local'];
  optionLinea: string[] = ['Nacional', 'Zona', 'Local', 'Nacional', 'Zona', 'Local'];

  ngOnInit(): void {
  }



}
