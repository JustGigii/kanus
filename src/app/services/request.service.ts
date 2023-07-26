import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { people } from '../info';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getPeople() :Observable<people[]> {
    return this.http.get<people[]>('https://oldersystem.azurewebsites.net/people');
  }

  getPerson() :Observable<people> {
    return this.http.get<people>('https://oldersystem.azurewebsites.net/people/1');
  }
}
