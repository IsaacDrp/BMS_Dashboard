import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-system-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './system-summary.html', // Usaremos archivo externo para que se vea limpio
  styleUrls: ['./system-summary.css']
})
export class SystemSummaryComponent {
  @Input() data: any;
  @Input() lastUpdate: Date | string | null = null;
  @Output() toggleInverter = new EventEmitter<boolean>();

  // Estado para mostrar/ocultar el modal
  showConfirmModal = false;

  // 1. El usuario hace click en la tarjeta -> Abrimos modal
  onRequestToggle() {
    this.showConfirmModal = true;
  }

  // 2. El usuario confirma en el modal -> Emitimos y cerramos
  onConfirmToggle() {
    this.toggleInverter.emit(this.data.inverter.on);
    this.showConfirmModal = false;
  }

  // 3. El usuario cancela -> Solo cerramos
  onCancelToggle() {
    this.showConfirmModal = false;
  }
}