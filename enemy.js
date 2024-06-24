class Enemy {
  constructor() {
    this.enemyType = ["spider", "troll", "wolf", "crow", "goblin"];
    this.name = this.randomEnemyName();
    this.level = this.randomEnemyLevel();
  }

  randomEnemyName() {
    const randomIndex = Math.floor(Math.random() * this.enemyType.length);
    return this.enemyType[randomIndex];
  }

  randomEnemyLevel() {
    return Math.floor(Math.random() * 10) + 1;
  }
}

export function spawnEnemy() {
  const enemy = new Enemy();
  console.log(`A ${enemy.name} of level ${enemy.level} has appeared.`);
  return `A ${enemy.name} of level ${enemy.level} has appeared.`
 
}