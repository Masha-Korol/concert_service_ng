import {GameUser} from './game-user';
import {GameTemplate} from './game-template';

export interface Room {
  roomId: number;
  roomType: string;
  name: string;
  gameLeader: GameUser;
  roomPlayers: GameUser[];
  gameTemplate: GameTemplate;
  code: string;
}
