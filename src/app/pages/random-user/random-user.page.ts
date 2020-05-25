import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserEntity } from "src/app/models/user.entity";
import { RandomUserListService } from "src/app/services/random-user-list.service";

const URL = "https://randomuser.me/api";

@Component({
  selector: "app-random-user",
  templateUrl: "./random-user.page.html",
  styleUrls: ["./random-user.page.scss"],
})
export class RandomUserPage implements OnInit {
  public user: UserEntity;

  constructor(
    private htpp: HttpClient,
    private userList: RandomUserListService
  ) {}

  ngOnInit() {
    this.user = new UserEntity();
    this.htpp.get(URL).subscribe(
      (response: any) => {
        const data = response.results[0];
        this.user = this.userList.getUserFromJson(data);
      },
      (err) => console.log(err),
      () => console.log(this.user)
    );
  }
}
