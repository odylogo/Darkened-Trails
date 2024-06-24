import { findingCave } from './caves.js';
import { findingTreasures } from './chest.js';
import { spawnEnemy } from './enemy.js';

class EventCreation {
  constructor() {
    this.events = [
      spawnEnemy.bind(this),
      findingCave.bind(this),
      findingTreasures.bind(this)
    ];
  }
 
  handlePlayerClicks() {
    const event = this.getRandomEvent();
    return this.activateEvent(event);
  }

  activateEvent(event) {
    return event(); 
  }

  getRandomEvent() {
    const randomIndex = Math.floor(Math.random() * this.events.length);
    return this.events[randomIndex];
  }
}


export const eventCreationInstance = new EventCreation();
