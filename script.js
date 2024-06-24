import { eventCreationInstance } from './events.js';




document.getElementById("optionA").addEventListener("click", function () {
  eventCreationInstance.handlePlayerClicks();
});