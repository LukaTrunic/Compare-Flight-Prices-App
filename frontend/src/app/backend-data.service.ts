import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface todo{
  _id?: number,
  airline?: string,
  destination?: string,
  departureDate?: string,
  returnDate?: string,
  price?: number,
  availableSeats?: number
}

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {

  apiUrl = 'http://localhost:3000/api/v1/flights';

  constructor(private http: HttpClient) { }

  GetTodos(): Observable<todo[]>{
    return this.http.get<todo[]>(this.apiUrl);
  }
}
