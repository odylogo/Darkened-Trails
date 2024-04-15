class Enemy {
  constructor(name, level) {
    this.name;
    this.level;
    this.calculateStats();
  }
  calculateStats() {
    const randomLevel = this.level * 0.1;
    this.attack = Math.floor(Math.random() * 10 + randomLevel * 5);
    this.defense = Math.floor(Math.random() * 10 + randomLevel * 3);
    this.armor = Math.floor(Math.random() * 10 + randomLevel * 2);
    this.health = Math.floor(Math.random() * 50 + randomLevel * 10);
  }
}

const enemyTypes = ['spider', 'troll', 'wolf', 'crow', 'orq', 'goblin'];

function randomEnemy() {
  const randomTypeList = Math.floor(Math.random() * enemyTypes.length);
  const randomLevel = Math.floor(Math.random() * 10) + 1;
  spawnEnemy(enemyTypes[randomTypeList], randomLevel);
}

// spawnRandomEnemy();
// Επιλέγουμε το στοιχείο κουμπιού με το id "optionA"
const optionAButton = document.getElementById('optionA');

// Προσθέτουμε έναν ακροατή για το γεγονός "click" στο κουμπί "optionA"
optionAButton.addEventListener('click', function() {
  // Επιλέγουμε το στοιχείο παραγράφου μέσα στην κλάση "dialog"
  const dialogParagraph = document.querySelector('.dialog p');

  // Αλλάζουμε το περιεχόμενο του παραγράφου
  dialogParagraph.textContent = 'Νέο περιεχόμενο για την επιλογή Α';
});
