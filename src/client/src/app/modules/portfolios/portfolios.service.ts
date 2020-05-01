import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Portfolio } from './store/portfolios.model';
import { Service } from "../../core/service";
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService implements Service<Portfolio> {

  private url = `${environment.api.url}/api/portfolio`;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  fetch(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.url);
  }

  create(item: Portfolio): Observable<Portfolio> {
    return this.http.post<Portfolio>(this.url, item, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(item: Portfolio): Observable<Portfolio> {
    return this.http.put<Portfolio>(this.url, item, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(item: Portfolio): Observable<Portfolio> {
    return this.http.delete<Portfolio>(`${this.url}/${item.id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
