import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spoiler } from '../interfaces/spoiler';

@Injectable({
  providedIn: 'root'
})
export class SpoilerService {

  constructor(private http: HttpClient) { }

  getSpoilerList(): Observable<Spoiler[]> {
    const url = `${environment.spoilerApiUrl}/`;
    return this.http.get<Spoiler[]>(url);
  }

  getSpoiler(id: number): Observable<Spoiler> {
    const url = `${environment.spoilerApiUrl}/${id}`;
    return this.http.get<Spoiler>(url);
  }

  addSpoiler(spoiler: Spoiler): Observable<Spoiler> {
    const url = `${environment.spoilerApiUrl}`;
    return this.http.post<Spoiler>(url, spoiler);
  }

  updateSpoiler(spoiler: Spoiler): Observable<Spoiler> {
    const url = `${environment.spoilerApiUrl}/${spoiler.id}`;
    return this.http.put<Spoiler>(url, spoiler);
  }

  deleteSpoiler(id: number): Observable<Spoiler> {
    const url = `${environment.spoilerApiUrl}/${id}`;
    return this.http.delete<Spoiler>(url);
  }

}
