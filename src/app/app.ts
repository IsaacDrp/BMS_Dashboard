import { Component, OnInit } from '@angular/core'; // <-- Añadir OnInit
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BatteryCardComponent } from './components/battery-card/battery-card';
import { HttpClient } from '@angular/common/http'; // <-- IMPORTAR ESTO

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    CommonModule,         
    RouterModule,         
    BatteryCardComponent  
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit { // <-- Implementar OnInit
  title = 'monitor-dashboard';
  
  // 1. La URL de tu API
  private dataUrl = '/api/status';

  // 2. La variable 'data' ahora empieza vacía (undefined)
  public data: any;

  // 3. Inyectamos el HttpClient en el constructor
  constructor(private http: HttpClient) {}

  // 4. Cuando el componente inicia, llamamos al método para traer los datos
  ngOnInit(): void {
    this.fetchData();
  }

  // 5. Este es el método que hace la magia
  fetchData(): void {
    this.http.get(this.dataUrl).subscribe(
      (response) => {    // Si todo sale bien, asignamos la respuesta a nuestra variable
        this.data = response;
      },
      (error) => {
        // Si falla, lo mostramos en la consola
        console.error('¡Error al traer los datos!', error);
        // Opcional: poner data de error para mostrar en la UI
        this.data = { summary: { system_status: 'Error de Conexión' }, batteries: [] };
      }
    );
  }
}