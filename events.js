// events.js
import { findingCave } from './caves.js';
import { findingTreasures } from './chest.js';
import { spawnEnemy } from './enemy.js';

class Event {
  constructor(name) {
    this.name = name;
  }
}

export class EventCreation {
  constructor() {
    this.events = [
          spawnEnemy(),
      new findingCave(),
      new findingTreasures(),
    ];
    
  }

  getRandomEvent() {
    const randomIndex = Math.floor(Math.random() * this.events.length);
    return this.events[randomIndex];
  }

  handlePlayerClicks() {
    const event = this.getRandomEvent();
    this.activateEvent(event);
  }
  activateEvent(event) {
    // Προσθέστε τη λογική για την ενεργοποίηση του event εδώ
    console.log(`Event activated: ${event}`);
  }
}

export const eventCreationInstance = new EventCreation();




