
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
  return Math.floor(Math.random() * 10) + 1; // 
}
      //για μελλοντικη χρηση
     // this.attack = Math.floor(Math.random() * 10 + randomLevel * 5);
     // this.defense = Math.floor(Math.random() * 10 + randomLevel * 3);
     // this.armor = Math.floor(Math.random() * 10 + randomLevel * 2);
     // this.health = Math.floor(Math.random() * 50 + randomLevel * 10);
  }


export function spawnEnemy() {
  const enemy = new Enemy();
  console.log(`A ${enemy.name} of level ${enemy.level} has appeared.`);
}
