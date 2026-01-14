import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap, retry, shareReplay, map } from 'rxjs/operators';
import { ApiResponse, DashboardData } from '../models/solar.model';
@Injectable({
  providedIn: 'root'
})
export class SolarService {
  private http = inject(HttpClient);
  private apiUrl = '/api'; 

  dashboard$: Observable<ApiResponse> = timer(0, 2000).pipe(
    switchMap(() => this.http.get<ApiResponse>(`${this.apiUrl}/dashboard`)),
    retry(3),
    shareReplay(1) 
  );

  toggleInverter(state: 'on' | 'off'): Observable<any> {
    return this.http.post(`${this.apiUrl}/control/${state}`, {}, {
      headers: { 'x-secret-token': 'supersecrettoken12345' }
    });
  }
}