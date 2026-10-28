
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HealthResponse {
  status: string;
  application: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class Health {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:5084/api/health';

  getHealth(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(this.apiUrl);
  }
}
