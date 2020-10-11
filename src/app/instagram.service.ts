import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Data {
  Image: string;
  likes: number;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  private uri = 'http://starlord.hackerearth.com/insta';

  constructor(private http: HttpClient) {
  }

  getData = (): Observable<Data[]> => this.http.get<Data[]>(this.uri);

}
