import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { people } from '../info';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getPeople() :Observable<people[]> {
    return this.http.get<people[]>('https://oldersystem.azurewebsites.net/people',httpOptions);
  }

  getPerson() :Observable<people> {
    return this.http.get<people>('https://oldersystem.azurewebsites.net/people/1',httpOptions);
  }
  addcoin(id:number):Observable<people> 
  {
    return this.http.put<people>( 'https://oldersystem.azurewebsites.net/add/'+id,httpOptions);
   
  }
}
