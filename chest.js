class Treasures {
  constructor() {
    this.chestWeight = this.weight();
    this.size = this.check();
  }

  weight() {
    return Math.floor(Math.random() * 15) + 1;
  }

  check() {
    if (this.chestWeight <= 5) {
      return "small";
    } else if (this.chestWeight <= 10) {
      return "medium";
    } else {
      return "large";
    }
  }
}

export function findingTreasures() {
  const chest = new Treasures();
  console.log(`You have found a ${chest.size} chest`);
  return `You have found a ${chest.size} chest`;
}
