import { Component, OnInit } from "@angular/core";
import { RandomUserListService } from "src/app/services/random-user-list.service";
import { UserEntity } from "src/app/models/user.entity";
import { LoadingController } from "@ionic/angular";

interface userRequestParams {
  numberOfUsers: string;
  gender: string;
  nationality: string;
}

@Component({
  selector: "app-random-user-list",
  templateUrl: "./random-user-list.page.html",
  styleUrls: ["./random-user-list.page.scss"],
})
export class RandomUserListPage implements OnInit {
  public userList: UserEntity[];

  public params: userRequestParams = {
    nationality: "fr",
    gender: "male",
    numberOfUsers: "10",
  };

  private loader;

  constructor(
    private userListService: RandomUserListService,
    private loadingCtrl: LoadingController
  ) {}

  private createLoader() {
    this.loadingCtrl
      .create({
        message: "<h3>Chargement en cours</h3>",
        spinner: "bubbles",
      })
      .then((instance) => (this.loader = instance));
  }

  ngOnInit() {
    this.userListService.userListChanged.subscribe((data) => {
      this.userList = data;
    });
    this.createLoader();
  }

  public loadUsers() {
    this.loader.present();
    this.userListService.loadUsers(this.params, "replace", () => {
      this.loader.dismiss();
      this.createLoader();
    });
  }

  public loadMore(event, mode) {
    this.userListService.loadUsers(this.params, mode, () => {
      console.log("fin de l'animation");
      console.log(event);
      event.target.complete();
    });

    /*
    this.userListService.loadMore(this.params, "append").then((data) => {
      this.userList = data;
      console.log("fin de l'animation");
      console.log(event);
      event.target.complete();
    });
    */
  }
}
