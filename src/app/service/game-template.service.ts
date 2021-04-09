import {Injectable} from '@angular/core';
import {ObjectUnsubscribedError, Observable} from 'rxjs';
import {GameTemplateCreation} from '../game-template/game-template.component';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Page} from '../model/page';
import {Room} from '../model/room';
import {GameTemplate} from '../model/game-template';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameTemplateService {
  private ALL_ROOMS_URL = `${environment.BASE_API_URL}\\templates\\`;

  constructor(private http: HttpClient) {
  }

  createGameTemplate(gameTemplate: GameTemplateCreation): Observable<any> {
    return this.http.post(`${environment.BASE_API_URL}/templates/`, gameTemplate);
  }

  getAll(searchText: string, page: number, itemsPerPage: number): Observable<Page> {
    const urlParams = new HttpParams()
      .set('searchText', searchText)
      .set('page', String(page))
      .set('itemsPerPage', String(itemsPerPage));
    return this.http.get<Page>(`${environment.BASE_API_URL}/templates/`, {params: urlParams});
  }

  editGameTemplate(gameTemplate: GameTemplate): Observable<any> {
    return this.http.put(`${environment.BASE_API_URL}/templates/edit`, gameTemplate);
  }

  deleteGameTemplate(gameTemplate: GameTemplate): Observable<any> {
    return this.http.delete(`${environment.BASE_API_URL}/templates/` + gameTemplate.gameId);
  }

  selectGameTemplate(gameTemplate: GameTemplateCreation): void {
    localStorage.setItem('gameName', gameTemplate.name);
  }

  getSelectedGameTemplate(): Observable<GameTemplate> {
    let gameTemplate: Observable<GameTemplate>;
    const selectedGameName = localStorage.getItem('gameName');
    if (selectedGameName !== undefined) {
      gameTemplate = this.http.get<GameTemplate>(`${environment.BASE_API_URL}/templates/name/` + selectedGameName);
      localStorage.removeItem('gameName');
    }
    // @ts-ignore
    return gameTemplate;
  }
}
