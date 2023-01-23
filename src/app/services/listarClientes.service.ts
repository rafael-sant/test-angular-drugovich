import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarClientesService {
  private url = "http://localhost:3000/clients"

  constructor(private http: HttpClient) {
  }

  listarClientes(): Observable<any> {
    return this.http.get(this.url)
  }

  adicionar(clients: any): Observable<any> {
    return this.http.post(this.url, clients)

  }
}
