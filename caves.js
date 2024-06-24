class Cave {
  constructor() {
    this.size = this.randomCaveSize();
    this.difficulty = this.randomCaveDifficulty();
    this.cautionLevel = this.cautionLevel();
  }

  randomCaveSize() {
    return Math.floor(Math.random() * 5) + 1;
  }

  randomCaveDifficulty() {
    return Math.floor(Math.random() * 5) + 1;
  }

  cautionLevel() {
    if (this.difficulty === 5) {
      return "extreme caution!! Maybe don't go in?";
    } else if (this.difficulty >= 3) {
      return "very carefully.";
    } else {
      return "with caution.";
    }
  }
}

export function findingCave() {
  const cave = new Cave();
  console.log(`You found a cave size of ${cave.size} and difficulty ${cave.difficulty} proceed ${cave.cautionLevel}`);
  return `You found a cave of size  ${cave.size} and a difficulty  of ${cave.difficulty}, proceed ${cave.cautionLevel}`
}
