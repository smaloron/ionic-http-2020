import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StarWarsService } from "src/app/services/star-wars.service";
import { StarWarsCharacter } from "src/app/models/star-wars-model";

@Component({
  selector: "app-sw-character-details",
  templateUrl: "./sw-character-details.page.html",
  styleUrls: ["./sw-character-details.page.scss"],
})
export class SwCharacterDetailsPage implements OnInit {
  public id: string;

  public character: StarWarsCharacter;

  constructor(
    private activeRoute: ActivatedRoute,
    private swService: StarWarsService
  ) {}

  ngOnInit() {
    //Récupération de l'id passé en paramètre de la route
    this.id = this.activeRoute.snapshot.paramMap.get("id");

    this.swService.loadOneCharacter(this.id);

    this.character = new StarWarsCharacter();

    this.swService.characterChanged.subscribe(
      (data) => (this.character = data)
    );
  }
}
