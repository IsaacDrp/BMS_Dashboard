import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Battery } from '../../models/solar.model';

@Component({
  selector: 'app-battery-card',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './battery-card.html',
  styleUrls: ['./battery-card.css']
})
export class BatteryCardComponent {
  @Input({ required: true }) battery!: Battery; 
}