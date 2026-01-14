import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarService } from './services/solar.service';

// Importamos los componentes hijos
import { BatteryCardComponent } from './components/battery-card/battery-card';
import { SystemSummaryComponent } from './components/system-summary/system-summary';
import { LoadingScreen } from './components/loading-screen/loading-screen';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    BatteryCardComponent, 
    SystemSummaryComponent, 
    LoadingScreen
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {
  solarService = inject(SolarService);
  dashboard$ = this.solarService.dashboard$;

  toggleInverter(currentState: boolean) {
    // La lógica de negocio se mantiene aquí o en el servicio
    const newState = currentState ? 'off' : 'on';
    this.solarService.toggleInverter(newState).subscribe({
      next: () => console.log(`Inversor cambiado a ${newState}`),
      error: (err) => console.error(err)
    });
  }
}