import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  public getPokemons(limit: number, offset: number): Observable<any> {
    return this.http.get<any>(`${this.URL}?limit=${limit}&offset=${offset}`);
  }

  public getPokemonDetalles(name: string): Observable<any> {
    return this.http.get<any>(`${this.URL}/${name}`);
  }
}

