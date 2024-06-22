import { eventCreationInstance } from './events.js';

// Επιλέγουμε το στοιχείο κουμπιού με το id "optionA"
const optionAButton = document.getElementById("optionA");

// Προσθέτουμε έναν ακροατή για το γεγονός "click" στο κουμπί "optionA"
optionAButton.addEventListener("click", function () {
  eventCreationInstance.handlePlayerClicks();
  
});
