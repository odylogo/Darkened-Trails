export class Enemy {
  constructor(name, level) {
      this.name = name;
      this.level = level;
      this.calculateStats();
      
  }

  calculateStats() {
      const randomLevel = this.level * 0.1;
      //για μελλοντικη χρηση
     // this.attack = Math.floor(Math.random() * 10 + randomLevel * 5);
     // this.defense = Math.floor(Math.random() * 10 + randomLevel * 3);
     // this.armor = Math.floor(Math.random() * 10 + randomLevel * 2);
     // this.health = Math.floor(Math.random() * 50 + randomLevel * 10);
  }
}

const enemyTypes = ["spider", "troll", "wolf", "crow", "orq", "goblin"];

export function randomEnemy() {
  const randomTypeList = Math.floor(Math.random() * enemyTypes.length);
  const randomLevel = Math.floor(Math.random() * 10) + 1;
  spawnEnemy(randomTypeList, randomLevel);
}

export function spawnEnemy(randomTypeList, randomLevel) {
  const type = enemyTypes[randomTypeList];
  const enemy = new Enemy(type, randomLevel);
  console.log(`A ${enemy.name} of level ${enemy.level} has appeared.`);
}