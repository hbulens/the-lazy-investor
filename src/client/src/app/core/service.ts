import { Observable } from 'rxjs';

export interface Service<T> {
  fetch(): Observable<T[]>;
  create(item: T): Observable<T>;
  update(item: T): Observable<T>;
  delete(item: T): Observable<T>;
}
