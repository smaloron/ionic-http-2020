import { Component, OnInit, OnDestroy } from "@angular/core";
import { StarWarsService } from "src/app/services/star-wars.service";
import { StarWarsCharacter } from "src/app/models/star-wars-model";
import { Observer, Observable } from "rxjs";

@Component({
  selector: "app-sw-characters-list",
  templateUrl: "./sw-characters-list.page.html",
  styleUrls: ["./sw-characters-list.page.scss"],
})
export class SwCharactersListPage implements OnInit, OnDestroy {
  public characterList: StarWarsCharacter[];

  constructor(public swService: StarWarsService) {}

  ngOnDestroy(): void {
    this.swService.characterListChanged.unsubscribe();
  }

  ngOnInit() {
    //Abonnement au données du service
    this.swService.characterListChanged.subscribe(
      (data) => (this.characterList = data)
    );
  }

  public goNext() {
    this.swService.loadNext();
  }

  public goPrevious() {
    this.swService.loadPrevious();
  }
}
