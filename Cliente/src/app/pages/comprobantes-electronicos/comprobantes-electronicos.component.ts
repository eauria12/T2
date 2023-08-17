import { Component,ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
@Component({
  selector: 'app-comprobantes-electronicos',
  templateUrl: './comprobantes-electronicos.component.html',
  styleUrls: ['./comprobantes-electronicos.component.scss']
})
export class ComprobantesElectronicosComponent {
  typesOfNivel: string[] = ['Nacional', 'Zona', 'Local'];
  @ViewChild('nivel') nivelList: MatSelectionList;
  selected: string | null = null; 
  selectedValue: String;
  datedesde: Date;
  datehasta: Date;

  onSelectionChange(event: any) {
    this.selected = event.source._value[0];
  }
  onSelectedValue(value: String) {
    this.selectedValue = value;
  }

  buscarLocales() {
    if (this.nivelList.selectedOptions.selected.length > 0) {
      console.log(this.nivelList.selectedOptions.selected[0].value);
      console.log(this.datedesde);
      console.log(this.datehasta);
      console.log(this.selectedValue);
    }
  }
  
}
