import { Injectable } from "@angular/core";
import { TaskUserEntity } from "../models/task-user-entity";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as bcrypt from "bcryptjs";

export interface Credentials {
  login: string;
  password: string;
}

const URL = "http://localhost:3000/users/";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private user: TaskUserEntity;

  constructor(private http: HttpClient, private router: Router) {
    this.user = new TaskUserEntity();
  }

  public isAuthenticated(): boolean {
    return this.user.getId() > 0;
  }

  public getUser(): TaskUserEntity {
    return this.user;
  }

  public refreshUser() {
    this.user = new TaskUserEntity();
  }

  public isRegisterValid() {
    console.log(this.user.getPlainPassword());

    const valid =
      this.user.getLogin() != "" &&
      this.user.getUserName() != "" &&
      this.user.getPlainPassword().length > 5;
    return valid;
  }

  public addUser() {
    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(this.user.getPlainPassword(), salt);
    const postData = {
      userName: this.user.getUserName(),
      login: this.user.getLogin(),
      role: "user",
      password: pass,
    };

    console.log(postData);

    this.http.post(URL, postData).subscribe((response) => {
      this.router.navigate(["/login"]);
    });
  }

  private loadUserFromJson(data) {
    const user = new TaskUserEntity()
      .setId(data.id)
      .setLogin(data.login)
      .setUserName(data.userName)
      .setRole(data.role);
    return user;
  }

  public authenticate(credentials: Credentials, callback) {
    this.http
      .get(URL + "?login=" + credentials.login)
      .subscribe((userList: any) => {
        for (let user of userList) {
          console.log(user);
          const userFound = bcrypt.compareSync(
            credentials.password,
            user.password
          );
          console.log(userFound);
          if (userFound) {
            this.user = this.loadUserFromJson(user);
            console.log(user);
            callback();
            break;
          }
        }
      });
  }
}
