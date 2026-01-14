export interface Battery {
  name: string;
  connected: boolean;
  status: string;     // "Cargando", "Descargando", "Reposo"
  voltage: number;
  current: number;
  soc: number;
  power: number;      // Calculado en backend (V * A)
  cells: number[];    // Array de voltajes [3.3, 3.3, 3.3, 3.3]
}

export interface InverterStatus {
  on: boolean;
}

export interface Summary {
  total_power: number;
}

export interface DashboardData {
  batteries: Battery[];
  summary: Summary;
  inverter: InverterStatus;
}

export interface ApiResponse {
  data: DashboardData;
  last_update: string;
  source: string;
}