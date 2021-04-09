import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject, throwError} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Page} from '../model/page';
import {Room} from '../model/room';
import {UserInfoService} from '../_services/user-info.service';
import {RoomCreation} from '../room/room.component';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private ALL_ROOMS_URL = `${environment.BASE_API_URL}\\rooms\\`;
  private roomId!: number;

  constructor(private http: HttpClient,
              private userService: UserInfoService) {
  }

  selectRoom(room: Room): void{
    this.roomId = room.roomId;
    localStorage.setItem('roomId', String(room.roomId));
  }

  getSelectedRoom(): Observable<Room> {
    return this.http.get<Room>(`${environment.BASE_API_URL}/rooms/` + Number(localStorage.getItem('roomId')));
  }

  enterRoom(room: Room): Observable<Room>{
    this.selectRoom(room);
    const urlParams = new HttpParams()
      .set('gameUserLogin', this.userService.getUsername());
    return this.http.get<Room>(`${environment.BASE_API_URL}/rooms/add/player/` + room.roomId, {params: urlParams});
  }

  getPageItems(page: number, itemsPerPage: number,
               typePrivate: boolean, typePublic: boolean,
               open: boolean, searchText: string, sort: string): Observable<Page>{
    const urlParams = new HttpParams()
      .set('typePrivate', String(typePrivate))
      .set('typePublic', String(typePublic))
      .set('open', String(open))
      .set('searchText', searchText)
      .set('sort', sort)
      .set('page', String(page))
      .set('itemsPerPage', String(itemsPerPage));
    return this.http.get<Page>(this.ALL_ROOMS_URL, {params: urlParams});
  }

  createRoom(room: RoomCreation): Observable<Room> {
    return this.http.post<Room>(`${environment.BASE_API_URL}/rooms/`, room);
  }

  enterPrivateRoom(code: string): Observable<Room>{
    const urlParams = new HttpParams()
      .set('gameUserLogin', this.userService.getUsername())
      .set('code', code);
    return this.http.get<Room>(`${environment.BASE_API_URL}/rooms/add/player/private`, {params: urlParams});
  }
}
