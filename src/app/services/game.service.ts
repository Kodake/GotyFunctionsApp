import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];

  constructor(private http: HttpClient) { }

  getJuegos(): Observable<Game[]> {

    if (this.juegos.length > 0) {
      // no tenemos juegos
      console.log('Desde caché');
      return of<Game[]>(this.juegos);

    } else {
      console.log('Desde Internet');
      return this.http.get<Game[]>(`${environment.url}/api/goty`)
        .pipe(
          tap(
            juegos => this.juegos = juegos
          )
        );
    }
  }

  votar(id: string) {

    return this.http.post(`${environment.url}/api/goty/${id}`, {})
      .pipe(
        catchError(err => {
          return of(err.error);
        }
      )
    );
  }

}
