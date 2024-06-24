import { eventCreationInstance } from './events.js';

function startRound() {
  const eventText = document.getElementById("event");
  const eventResult = eventCreationInstance.handlePlayerClicks();
  eventText.innerText = "Event:  " + eventResult;
}

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start');
  startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    document.getElementById("event").innerText="You find yourself walking through the woods "
    setInterval(startRound, 30000);
  });
});
