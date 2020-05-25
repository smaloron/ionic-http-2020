import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { TaskUserEntity } from "src/app/models/task-user-entity";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  public user: TaskUserEntity;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.refreshUser();
    this.user = this.userService.getUser();
  }

  validate() {
    console.log(this.userService.isRegisterValid());
    if (this.userService.isRegisterValid()) {
      this.userService.addUser();
    }
  }
}
