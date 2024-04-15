const EventType = {
  ENEMY_ENCOUNTER: "enemy_encounter",
  CAVE_DISCOVERY: "cave_discovery",
  TREASURE_FOUND: "treasure_found",
};
const events = [
  { type: EventType.ENEMY_ENCOUNTER, enemyType: "Spider", level: 5 },
  { type: EventType.CAVE_DISCOVERY, caveType: "Hidden Cave" },
  { type: EventType.TREASURE_FOUND, treasureType: "Gold Coins", amount: 100 },
];

// Συνάρτηση που εκτελεί ένα event με βάση τον τύπο του
function executeEvent(event) {
  switch (event.type) {
    case EventType.ENEMY_ENCOUNTER:
      console.log(
        `You encounter a ${event.enemyType} with level ${event.level}.`
      );
      // Προσθέτεις εδώ τη λογική για τη μάχη με τον εχθρό
      break;
    case EventType.CAVE_DISCOVERY:
      console.log(`You discover a hidden cave called ${event.caveType}.`);
      // Προσθέτεις εδώ τη λογική για την εξερεύνηση της σπηλιάς
      break;
    case EventType.TREASURE_FOUND:
      console.log(
        `You found a treasure chest containing ${event.amount} ${event.treasureType}.`
      );
      // Προσθέτεις εδώ τη λογική για την προσθήκη του θησαυρού στον παίκτη
      break;
    default:
      console.log("Unknown event type.");
  }
}

// Εκτέλεση τυχαίου event
function executeRandomEvent() {
  const randomEventIndex = Math.floor(Math.random() * events.length);
  const randomEvent = events[randomEventIndex];
  executeEvent(randomEvent);
}

// Κλήση της συνάρτησης για να εκτελέσουμε ένα τυχαίο event
executeRandomEvent();

/* OPTION A IS FORWARD
OPTION B IS TURN
OPTION C IS FIGHT
OPTION D IS OPEN
OPTION E IS RUN
WHEN ON ROAD ONLY OPION A AND B
WHEN AN ATTACK   ONLY OPTION C AND E
WHEN ON CHEST  ONLY OPTION D AND E
*/
/* AN EVENT IS HAPPENING AFTER 10 T0 15 MOVES FORWARD
A FIGHT IS HAPPENING AFTER 30 MOVES FORWARD
CHEST EVERY 35 MOVES FORWARD
CAVES EVERY 50.
IN CITYS YOU BUY HEALTHS
IN CASTLES YOU BUY ARROWS AND WEAPON
IN CAVES SPELLS*/
