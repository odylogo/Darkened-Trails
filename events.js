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
  getRandomEvent() {
    const randomIndex = Math.floor(Math.random() * this.events.length);
    return this.events[randomIndex];
  }

  handlePlayerClicks() {
    const event = this.getRandomEvent();
    return this.activateEvent(event);
   } 

  activateEvent(event) {
    event(); 
  }
 }

 export const eventCreationInstance=
  new EventCreation();
 





