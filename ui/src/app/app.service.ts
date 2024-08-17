import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getCatalog() {
    return this.http.get(`/api/catalog/`, { responseType: 'text' });
  }

  getOrders() {
    return this.http.get(`/api/orders/`, { responseType: 'text' });
  }
}
