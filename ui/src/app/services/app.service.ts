import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getData(type: string) {
    return this.http.get(`/api/${type}/`, { responseType: 'text' });
  }
}
