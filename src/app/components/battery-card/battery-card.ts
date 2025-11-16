import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-battery-card',
  standalone: true, 
  imports: [
    CommonModule  
  ],
  templateUrl: './battery-card.html',
  styleUrls: ['./battery-card.css']
})
export class BatteryCardComponent implements OnInit, OnChanges {
  
  @Input() battery: any;
  // @Input() index: number = 0; // <-- 1. Ya no necesitamos esto, lo puedes borrar.

  @Output() powerCalculated = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['battery'] && this.battery) {
      this.calculateAndEmitPower();
    }
  }

  calculateAndEmitPower(): void {
    let calculatedPower = this.battery.cell_data.power_w;

    // --- 2. AQUÍ ESTÁ TU NUEVA LÓGICA CUSTOM ---
    // En lugar de checar el índice, checamos el nombre.
    // Usar el nombre es más seguro que checar el valor -4.60495, que cambiará.
    if (this.battery.name === 'Bateria 02') { 
      // Si soy "Bateria 02", multiplico mi poder x 2
      calculatedPower = calculatedPower * 2;
    }
    // (Bateria 01 simplemente emitirá su valor normal)

    this.powerCalculated.emit(calculatedPower);
  }

}