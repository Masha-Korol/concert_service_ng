import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Artist} from '../model/artist';
import {Observable} from 'rxjs';
import {Concert} from '../model/concert';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Concert>>{
   return  this.http.get<Array<Concert>>('http://localhost:8080/api/v1/concerts/');
  }
}
