import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { UserEntity } from "../models/user.entity";
import { Subject } from "rxjs";

const URL = "https://randomuser.me/api";

@Injectable({
  providedIn: "root",
})
export class RandomUserListService {
  private userList: UserEntity[] = [];

  public userListChanged: Subject<UserEntity[]>;

  constructor(private http: HttpClient) {
    this.userListChanged = new Subject<UserEntity[]>();
  }

  public getUserFromJson(data) {
    let user = new UserEntity();
    user
      .setFirstName(data.name.first)
      .setName(data.name.last)
      .setTitle(data.name.title)
      .setDateOfBirth(data.dob.date)
      .setAddress(data.location.street.number + " " + data.location.street.name)
      .setCity(data.location.city)
      .setZipCode(data.location.postcode)
      .setLatitude(data.location.coordinates.latitude)
      .setLongitude(data.location.coordinates.longitude)
      .setPicture(data.picture.large)
      .setGender(data.gender);
    return user;
  }

  /*
  // Solution avec une promesse
  public loadMore(params, mode): Promise<UserEntity[]> {
    return new Promise((resolve, reject) => {
      const httpParams = new HttpParams()
        .set("results", params.numberOfUsers)
        .set("gender", params.gender)
        .set("nat", params.nationality);

      this.http.get(URL, { params: httpParams }).subscribe((response: any) => {
        const data = response.results.map((item) => {
          return this.getUserFromJson(item);
        });

        if (mode == "append") {
          this.userList = this.userList.concat(data);
        } else if (mode == "prepend") {
          this.userList = data.concat(this.userList);
        } else {
          this.userList = data;
        }

        resolve(this.userList);
      });
    });
  }*/

  public loadUsers(params, mode, callback) {
    const httpParams = new HttpParams()
      .set("results", params.numberOfUsers)
      .set("gender", params.gender)
      .set("nat", params.nationality);

    this.http.get(URL, { params: httpParams }).subscribe((response: any) => {
      const data = response.results.map((item) => {
        return this.getUserFromJson(item);
      });
      console.log(this.userList);

      if (mode == "append") {
        this.userList = this.userList.concat(data);
      } else if (mode == "prepend") {
        this.userList = data.concat(this.userList);
      } else {
        this.userList = data;
      }

      this.userListChanged.next(this.userList);

      //console.log("callback de fin");
      if (typeof callback == "function") {
        //console.log("fin de l'animation");
        callback();
      } else {
        console.log(arguments);
      }
    });
  }

  public getAll() {
    return this.userList;
  }

  public getOne(pos) {
    return this.userList[pos];
  }
}
