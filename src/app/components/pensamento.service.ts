import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamentos } from './pensamentos/pensamentos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

 private readonly API =  'http://localhost:3000/pensamentos';

  constructor( private http: HttpClient ) { }

  listar(): Observable<Pensamentos[]>{
    return this.http.get<Pensamentos[]>(this.API)
  }

  criar(pensamento: Pensamentos): Observable<Pensamentos>{
    return this.http.post<Pensamentos>(this.API, pensamento);
  }

  excluir(id: number): Observable<Pensamentos>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamentos>(url)
  }

  buscarPorId(id: number): Observable<Pensamentos>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamentos>(url)
  }
}

