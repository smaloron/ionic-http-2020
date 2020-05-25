import { Component, OnInit } from "@angular/core";
import { UserEntity } from "src/app/models/user.entity";
import { ActivatedRoute } from "@angular/router";
import { RandomUserListService } from "src/app/services/random-user-list.service";
import { Map, tileLayer } from "leaflet";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.page.html",
  styleUrls: ["./user-details.page.scss"],
})
export class UserDetailsPage implements OnInit {
  public user: UserEntity;

  public map: Map;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userListService: RandomUserListService
  ) {}

  ngOnInit() {
    this.user = new UserEntity();
    const pos = this.activatedRoute.snapshot.paramMap.get("id");
    this.user = this.userListService.getOne(pos);
    console.log(this.user.getCoordinates());
  }

  private leafletInit() {
    //Création de la carte
    this.map = new Map("mapId");
    this.map.setView(this.user.getCoordinates(), 10);

    tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    console.log(this.map);
  }

  ionViewDidEnter() {
    this.leafletInit();
  }
}
