import {Artist} from './artist';
import {Venue} from './venue';

export class Concert {
  concertId!: number;
  artist!: Artist;
  venue!: Venue;
}
