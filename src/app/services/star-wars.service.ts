import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  StarWarsCharacter,
  StarWarsWorld,
  StarWarsFilm,
} from "../models/star-wars-model";
import { Subject, forkJoin } from "rxjs";

const URL = "https://swapi.dev/api/people/";

@Injectable({
  providedIn: "root",
})
export class StarWarsService {
  private characterList: StarWarsCharacter[];

  public characterListChanged: Subject<StarWarsCharacter[]>;
  public characterChanged: Subject<StarWarsCharacter>;

  private nextUrl: string = null;

  private prevUrl: string = null;

  private pageNumber = 1;

  private totalPages: number;

  constructor(private http: HttpClient) {
    //Instanciation du Subject pour pouvoir notifier les abonnés
    this.characterListChanged = new Subject<StarWarsCharacter[]>();
    this.characterChanged = new Subject<StarWarsCharacter>();
    //Chargement de personnages
    this.loadCharacters(URL);
  }

  /**
   * Création d'un liste de personnages à partir de la réponse JSON
   * @param response
   */
  private hydrateFromJson(response) {
    this.characterList = response.results.map((item) => {
      let character = new StarWarsCharacter();
      character.hydrate(item);
      return character;
    });
  }

  public loadOneCharacter(id) {
    this.http.get(URL + id).subscribe((response: any) => {
      let character = new StarWarsCharacter();
      character.hydrate(response);
      this.characterChanged.next(character);

      //Récupération des infos du monde d'origine
      this.http.get(response.homeworld).subscribe((response) => {
        let homeworld = new StarWarsWorld();
        homeworld.hydrate(response);
        character.setHomeWorld(homeworld);
        this.characterChanged.next(character);
      });

      //Récupération des films

      //Liste des requêtes à excuter
      let apiCalls = [];
      for (const url of response.films) {
        apiCalls.push(this.http.get(url));
      }
      //Un seul subscribe pour toutes les requêtes
      forkJoin(apiCalls).subscribe((res: any[]) => {
        //Boucle sur la liste des réponses
        for (const data of res) {
          const film = new StarWarsFilm();
          film.hydrate(data);
          character.addFilm(film);
        }
        //Notification des changements sur les films de Character
        this.characterChanged.next(character);
      });
    });
  }

  /**
   * Chargement des personnages à partir d'un URL
   * @param url
   */
  private loadCharacters(url: string) {
    this.http.get(url).subscribe((response: any) => {
      //Remplissage de characterList
      this.hydrateFromJson(response);

      //Gestion des liens suivant et précédent
      this.nextUrl = response.next;
      this.prevUrl = response.previous;

      //Calcul du nombre total de pages
      this.totalPages = Math.ceil(response.count / 10);
      //Notification aux abonnés de la modification
      this.characterListChanged.next(this.characterList);
    });
  }

  public hasNext(): boolean {
    return this.nextUrl != null;
  }

  public loadNext() {
    this.loadCharacters(this.nextUrl);
    this.pageNumber++;
  }

  public hasPrevious(): boolean {
    return this.prevUrl != null;
  }

  public loadPrevious() {
    this.loadCharacters(this.prevUrl);
    this.pageNumber--;
  }

  public getPageNumber() {
    return this.pageNumber;
  }

  public getTotalPages() {
    return this.totalPages;
  }
}
