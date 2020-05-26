import { StarWarsCharacter } from "./star-wars-model";

describe("StarWarsCharacter", () => {
  it("should create an instance", () => {
    expect(new StarWarsCharacter()).toBeTruthy();
  });
});
