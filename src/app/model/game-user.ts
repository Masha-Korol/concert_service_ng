export class GameUser {
  gameUserId!: number;
  login: string;
  email: string;

  constructor(login: string, email: string) {
  this.login = login;
  this.email = email;
}
}
