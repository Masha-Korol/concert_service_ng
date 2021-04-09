import {GameUser} from './game-user';

export interface GameTemplate {
  gameId: number;
  name: string;
  numberOfPlayers: number;
  owner: GameUser;
}
