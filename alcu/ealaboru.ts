interface SuperheroPower {
  [key: string]: string;
}

const superheroPowers: SuperheroPower = {
  Hulk: "much-power",
};

// Optimized for TypeScript usage
class Superhero {
  private powers: SuperheroPower;

  constructor(powers: SuperheroPower) {
    this.powers = powers;
  }

  public getPower(heroName: string): string {
    return this.powers[heroName] ?? "unknown-power";
  }
}

// Usage
const heroes = new Superhero(superheroPowers);
console.log(`Hulk's power: ${heroes.getPower('Hulk')}`);
