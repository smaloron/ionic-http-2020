import { Component, OnInit } from "@angular/core";
import { UserService, Credentials } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public credentials: Credentials = {
    login: null,
    password: null,
  };

  constructor(private user: UserService, private router: Router) {}

  ngOnInit() {}

  public validate() {
    this.user.authenticate(this.credentials, () => {
      this.credentials.password = null;
      this.credentials.login = null;
      this.router.navigate(["/home"]);
    });
  }
}
