import {Room} from './room';

export class Page {
  public totalCount: number;
  public content: Array<any>;

  constructor(totalCount: number, content: Array<Room>) {
    this.totalCount = totalCount;
    this.content = content;
  }
}
