import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro-fecha',
  templateUrl: './filtro-fecha.component.html',
  styleUrls: ['./filtro-fecha.component.scss']
})
export class FiltroFechaComponent {
  /*Manejo de fechas vivi, si te causa conflicto luego modifico, esta cambiado tbm el html jeje */
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


  /*Manejo de fechas Carlos */

  // @ViewChild('dateInput1') dateInput1!: MatInput;
  // @ViewChild('dateInput2') dateInput2!: MatInput;
  @Output() fechaInicioEnvio = new EventEmitter<Date>();
  @Output() fechaFinEnvio = new EventEmitter<Date>();
  fechaInicio: Date;
  fechaFin: Date;

  onDateChange(event: any, dateType: string) {
    const selectedDate = event.value;
    const today = new Date();

    if (selectedDate instanceof Date && !isNaN(selectedDate.getTime())) {
      // La fecha es válida
      if (dateType === 'date1') {
        this.fechaInicio = selectedDate;
        this.fechaInicioEnvio.emit(this.fechaInicio);
      } else if (dateType === 'date2') {
        this.fechaFin = selectedDate;
        this.fechaFinEnvio.emit(this.fechaFin);
      }
    } else {
      // La fecha no es válida, mostrar mensaje de alerta o tomar alguna acción
      alert('Fecha no válida. Por favor, ingrese una fecha en el formato MM/DD/YYYY');
    }
  }

  // onDateChange(event: any, dateField: string) {
  //   const dateValue = event.target.value;
  //   if (!this.isDateValid(dateValue)) {
  //     this.displayErrorMessage(dateField);
  //   } else {
  //     if 
  //   }
  // }

  // isDateValid(date: any): boolean {
  //   // Verifica si la fecha es válida y tiene el formato MM/DD/YYYY
  //   const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  //   return regex.test(date);
  // }

  // displayErrorMessage(dateField: string) {
  //   // Muestra un mensaje de error dependiendo del campo de fecha
  //   if (dateField === 'date1') {
  //     this.dateInput1.value = ''; // Limpia el valor del campo si es inválido
  //     this.dateInput1.focus(); // Devuelve el enfoque al campo de fecha para que el usuario corrija
  //   } else if (dateField === 'date2') {
  //     this.dateInput2.value = ''; // Limpia el valor del campo si es inválido
  //     this.dateInput2.focus(); // Devuelve el enfoque al campo de fecha para que el usuario corrija
  //   }
  //   alert('Por favor, ingresa fechas válidas en formato MM/DD/YYYY');
  // }

}
