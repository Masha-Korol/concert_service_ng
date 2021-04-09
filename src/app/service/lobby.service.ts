import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {GameUser} from '../model/game-user';
import {HttpClient} from '@angular/common/http';
import {Room} from '../model/room';
import {Imagefile} from '../model/imagefile';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  private BASE_URL = `${environment.BASE_API_URL}/users/`;

  constructor(private http: HttpClient) {
  }

  getGameUsers(roomId: number): Observable<Array<GameUser>> {
    return this.http.get<Array<GameUser>>(this.BASE_URL + roomId);
  }

  exitRoom(roomId: number, userName: string): Observable<any> {
    return this.http.get(`${environment.BASE_API_URL}/rooms/exit/` + roomId + '/' + userName);
  }

  editRoom(room: Room): Observable<any> {
    return this.http.put(`${environment.BASE_API_URL}/rooms/edit`, room);
  }

  getFile(): Observable<Imagefile> {
    return this.http.get<Imagefile>(`${environment.BASE_API_URL}/files/` + 1);
  }

  passGameLeaderRight(room: Room, userName: string): Observable<any> {
    return this.http.get(`${environment.BASE_API_URL}/rooms/leader/` + room.roomId + '/' + userName);
  }

  isTheLastGamePlayer(userName: string, room: Room): Observable<boolean>{
    return this.http.get<boolean>(`${environment.BASE_API_URL}/rooms/last/` + room.roomId + '/' + userName);
  }

  startGame(room: Room): Observable<any> {
    return this.http.get(`${environment.BASE_API_URL}/games/start/` + room.roomId);
  }
}
