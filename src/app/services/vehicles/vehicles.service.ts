import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../../models/vehicle';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private vehiclesApiUrl: string = environment.baseUrl ;
  constructor(private http: HttpClient) { }
  getVehicles(): Observable<Vehicle[]>{
    return this.http.get<Vehicle[]>(this.vehiclesApiUrl)
  }
}
