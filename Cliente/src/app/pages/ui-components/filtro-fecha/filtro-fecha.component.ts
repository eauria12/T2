import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro-fecha',
  templateUrl: './filtro-fecha.component.html',
  styleUrls: ['./filtro-fecha.component.scss']
})
export class FiltroFechaComponent {
  @Input() datedesde: Date;
  @Input() datehasta: Date;
  @Input() disabled: boolean;

  @Output() datedesdeChange = new EventEmitter<Date>();
  @Output() datehastaChange = new EventEmitter<Date>();

  onDesdeChange() {
    this.datedesdeChange.emit(this.datedesde);
  }

  onHastaChange() {
    this.datehastaChange.emit(this.datehasta);
  } 

}
