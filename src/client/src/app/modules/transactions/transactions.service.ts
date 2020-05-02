import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Transaction } from './store/transactions.model';
import { Service } from "../../core/service";
import { catchError, retry, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService implements Service<Transaction> {

  private url = `${environment.api.url}/api/transaction`;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  fetch(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.url);
  }

  create(item: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.url, item, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(item: Transaction): Observable<Transaction> {
    if (item.id === 0) {
      return this.create(item);
    }

    return this.http.put<Transaction>(this.url, item, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(item: Transaction): Observable<Transaction> {
    return this.http.delete<Transaction>(`${this.url}/${item.id}`)
      .pipe(
        map(_ => new Transaction(item.id)),
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
