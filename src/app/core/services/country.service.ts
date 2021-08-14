import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountryService {
  constructor(private http: HttpClient) {}
  getCountryList(): Observable<any> {
    return this.http.get<any>('https://restcountries.eu/rest/v2/all');
  }
}
