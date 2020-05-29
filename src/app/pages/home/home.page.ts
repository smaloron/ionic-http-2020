import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { TaskUserEntity } from "src/app/models/task-user-entity";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  public user: TaskUserEntity;

  public fruits = ["Pommes", "Poires", "Oranges"];

  public selectedFruitIndex: number = 0;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    console.log(this.user);
  }

  appPersonClick(even) {
    console.log(even);
  }
}
