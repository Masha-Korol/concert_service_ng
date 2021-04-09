export class Message {
  messageId!: string;
  text: string;
  roomId: number;
  ownerLogin: string;
  date!: Date;
  viewDate!: string;

  constructor(text: string, roomId: number, ownerLogin: string) {
    this.text = text;
    this.roomId = roomId;
    this.ownerLogin = ownerLogin;
  }

  public setViewDate(): void{
    this.viewDate = String(this.date.getMinutes() + ':' + this.date.getHours() + ' ' +
    this.date.getDate() + '.' + this.date.getMonth());
  }
}
