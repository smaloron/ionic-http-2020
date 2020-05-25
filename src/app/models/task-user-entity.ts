export class TaskUserEntity {
  private id: number;

  private userName: string = "";

  private login: string = "";

  private plainPassword: string = "";

  private role: string = "";

  public getRole(): string {
    return this.role;
  }

  public setRole(role: string): TaskUserEntity {
    this.role = role;
    return this;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): TaskUserEntity {
    this.id = id;
    return this;
  }

  public getUserName(): string {
    return this.userName;
  }

  public setUserName(userName: string): TaskUserEntity {
    this.userName = userName;
    return this;
  }

  public getLogin(): string {
    return this.login;
  }

  public setLogin(login: string): TaskUserEntity {
    this.login = login;
    return this;
  }

  public getPlainPassword(): string {
    return this.plainPassword;
  }

  public setPlainPassword(plainPassword: string): TaskUserEntity {
    this.plainPassword = plainPassword;
    return this;
  }

  public eraseCredentials() {
    this.plainPassword = null;
  }
}
