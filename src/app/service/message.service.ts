import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Message} from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  public getAllMessages(roomId: number, messages: Array<Message>): Observable<Array<Message>>{
    let lastMessageDate: Date;
    if (messages === undefined || messages.length === 0){
      // @ts-ignore
      lastMessageDate = null;
    } else{
      lastMessageDate = messages[messages.length - 1].date;
    }
    return this.http.post<Array<Message>>('http://localhost:8080/all/' + roomId, String(lastMessageDate));
  }

  public getAllRoundMessages(roomId: number, messages: Array<Message>): Observable<Array<Message>>{
    let lastMessageDate: Date;
    if (messages === undefined || messages === null || messages.length === 0){
      // @ts-ignore
      lastMessageDate = null;
    } else{
      lastMessageDate = messages[messages.length - 1].date;
    }
    return this.http.post<Array<Message>>('http://localhost:8080/all/round/' + roomId, String(lastMessageDate));
  }
}
