class Enemy {
  constructor(name, level) {
    this.name;
    this.level;
    this.calculateStats();
  }
  calculateStats() {
    const levelMultiplier = this.level * 0.1;
    this.attack = Math.floor(Math.random() * 10 + levelMultiplier * 5);
    this.defense = Math.floor(Math.random() * 10 + levelMultiplier * 3);
    this.armor = Math.floor(Math.random() * 10 + levelMultiplier * 2);
    this.health = Math.floor(Math.random() * 50 + levelMultiplier * 10);
  }
}

const enemyTypes = [
  "spider",
  "troll",
  "wolf",
  "crow",
  "phantom",
  "giant squid",
  "fellbeast",
  "nazgull",
  "dragon",
  "balrog",
  "mumakil",
  "orq",
  "goblin",
];

function spawnRandomEnemy() {
  let randomTypeIndex = Math.floor(Math.random() * enemyTypes.length);
  let randomLevel = Math.floor(Math.random() * 10) + 1;
  spawnEnemy(enemyTypes[randomTypeIndex], randomLevel);
}

spawnRandomEnemy();
