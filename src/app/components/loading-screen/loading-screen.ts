import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  template: `
    <div class="loading-screen">
      <div class="loader"></div>
      <h1>Conectando al Sistema...</h1>
      <p>Esperando datos de telemetría</p>
    </div>
  `,
  styleUrls: ['./loading-screen-component.css']
})
export class LoadingScreen {}