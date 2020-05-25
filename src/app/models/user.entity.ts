export class UserEntity {
  private name: string = "";
  private firstName: string;
  private title: string;

  private address: string;
  private city: string;
  private zipCode: string;

  private email: string;

  private picture: string;

  private latitude: string;
  private longitude: string;

  private dateOfBirth: Date;

  private gender: string;

  public getGender(): string {
    return this.gender;
  }

  public setGender(gender: string): UserEntity {
    this.gender = gender;
    return this;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): UserEntity {
    this.name = name;
    return this;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(firstName: string): UserEntity {
    this.firstName = firstName;
    return this;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): UserEntity {
    this.title = title;
    return this;
  }

  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string): UserEntity {
    this.address = address;
    return this;
  }

  public getCity(): string {
    return this.city;
  }

  public setCity(city: string): UserEntity {
    this.city = city;
    return this;
  }

  public getZipCode(): string {
    return this.zipCode;
  }

  public setZipCode(zipCode: string): UserEntity {
    this.zipCode = zipCode;
    return this;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): UserEntity {
    this.email = email;
    return this;
  }

  public getPicture(): string {
    return this.picture;
  }

  public setPicture(picture: string): UserEntity {
    this.picture = picture;
    return this;
  }

  public getLatitude(): string {
    return this.latitude;
  }

  public setLatitude(latitude: string): UserEntity {
    this.latitude = latitude;
    return this;
  }

  public getLongitude(): string {
    return this.longitude;
  }

  public setLongitude(longitude: string): UserEntity {
    this.longitude = longitude;
    return this;
  }

  public getDateOfBirth(): Date {
    return this.dateOfBirth;
  }

  public setDateOfBirth(dateOfBirth: string): UserEntity {
    this.dateOfBirth = new Date(dateOfBirth);
    return this;
  }

  public getFullName() {
    return `${this.title} ${this.firstName} ${this.name.toUpperCase()}`;
  }

  public getCoordinates() {
    return [this.latitude, this.longitude];
  }
}
