import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Room} from '../model/room';
import {GameUser} from '../model/game-user';
import {VotingResultResponse} from '../model/voting-result-response';
import {CoordinatesStructure} from '../model/coordinates-structure';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  constructor(private http: HttpClient) { }

  getRoomEntityStage(room: Room): Observable<string>{
    return this.http.get<string>(`${environment.BASE_API_URL}/games/stage/` + room.roomId);
  }

  getTaskResults(room: Room): Observable<Map<string, boolean>>{
    return this.http.get<Map<string, boolean>>(`${environment.BASE_API_URL}/games/task/` + room.roomId);
  }

  vote(gameUserLogin: string, room: Room): Observable<any>{
    return this.http.post(`${environment.BASE_API_URL}/games/vote/` + room.roomId, gameUserLogin);
  }

  getVotingResult(room: Room): Observable<VotingResultResponse> {
    return this.http.get<VotingResultResponse>(`${environment.BASE_API_URL}/games/result/` + room.roomId);
  }

  getPlayersRoundCoordinates(room: Room): Observable<Array<CoordinatesStructure>>{
    return this.http.get<Array<CoordinatesStructure>>(`${environment.BASE_API_URL}/games/coord/` + room.roomId);
  }
}
