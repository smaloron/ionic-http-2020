export class StarWarsWorld {
  private name: string;
  private climate: string;
  private terrain: string;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): StarWarsWorld {
    this.name = name;
    return this;
  }

  public getClimate(): string {
    return this.climate;
  }

  public setClimate(climate: string): StarWarsWorld {
    this.climate = climate;
    return this;
  }

  public getTerrain(): string {
    return this.terrain;
  }

  public setTerrain(terrain: string): StarWarsWorld {
    this.terrain = terrain;
    return this;
  }

  public hydrate(data): StarWarsWorld {
    this.name = data.name;
    this.climate = data.climate;
    this.terrain = data.terrain;
    return this;
  }
}

export class StarWarsFilm {
  private title: string;
  private episodeNumber: number;
  private releaseDate: Date;

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): StarWarsFilm {
    this.title = title;
    return this;
  }

  public getEpisodeNumber(): number {
    return this.episodeNumber;
  }

  public setEpisodeNumber(episodeNumber: number): StarWarsFilm {
    this.episodeNumber = episodeNumber;
    return this;
  }

  public getReleaseDate(): Date {
    return this.releaseDate;
  }

  public setReleaseDate(releaseDate: Date): StarWarsFilm {
    this.releaseDate = releaseDate;
    return this;
  }

  public hydrate(data): StarWarsFilm {
    this.title = data.title;
    this.episodeNumber = data.episode_id;
    this.releaseDate = new Date(data.release_date);
    return this;
  }
}

export class StarWarsCharacter {
  private id: string;
  private name: string;
  private gender: string;
  private height: number;
  private mass: number;
  private homeWorld: StarWarsWorld;
  private films: StarWarsFilm[];

  constructor() {
    this.homeWorld = new StarWarsWorld();
    this.films = [];
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): StarWarsCharacter {
    this.id = id;
    return this;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): StarWarsCharacter {
    this.name = name;
    return this;
  }

  public getGender(): string {
    return this.gender;
  }

  public setGender(gender: string): StarWarsCharacter {
    this.gender = gender;
    return this;
  }

  public getHeight(): number {
    return this.height;
  }

  public setHeight(height: number): StarWarsCharacter {
    this.height = height;
    return this;
  }

  public getMass(): number {
    return this.mass;
  }

  public setMass(mass: number): StarWarsCharacter {
    this.mass = mass;
    return this;
  }

  public getHomeWorld(): StarWarsWorld {
    return this.homeWorld;
  }

  public setHomeWorld(homeWorld: StarWarsWorld): StarWarsCharacter {
    this.homeWorld = homeWorld;
    return this;
  }

  public getFilms(): StarWarsFilm[] {
    return this.films;
  }

  public setFilms(films: StarWarsFilm[]): StarWarsCharacter {
    this.films = films;
    return this;
  }

  public addFilm(film: StarWarsFilm) {
    this.films.push(film);
  }

  private getIdFromUrl(url) {
    //Elimination du dernier caractère de l'url (le / final)
    const temp = url.substr(0, url.length - 1);
    //Trouver la position du dernier / dans la chaîne
    const pos = temp.lastIndexOf("/");
    return temp.substr(pos + 1);
  }

  public hydrate(data): StarWarsCharacter {
    this.name = data.name;
    this.height = data.height;
    this.mass = data.mass;
    this.gender = data.gender;
    this.id = this.getIdFromUrl(data.url);
    console.log(this);
    return this;
  }
}
