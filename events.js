export const EventType = {
  ENEMY_ENCOUNTER: "enemy_encounter",
  CAVE_DISCOVERY: "cave_discovery",
  TREASURE_FOUND: "treasure_found",
};

export const events = [
  { type: EventType.ENEMY_ENCOUNTER, enemyType: "Spider", level: 5 },
  { type: EventType.CAVE_DISCOVERY, caveType: "Hidden Cave" },
  { type: EventType.TREASURE_FOUND, treasureType: "Gold Coins", amount: 100 },
];

export function executeEvent(event) {
  switch (event.type) {
    case EventType.ENEMY_ENCOUNTER:
      console.log(
        `You encounter a ${event.enemyType} with level ${event.level}.`
      );
      // Προσθέστε εδώ τη λογική για τη μάχη με τον εχθρό
      break;
    case EventType.CAVE_DISCOVERY:
      console.log(`You discover a hidden cave called ${event.caveType}.`);
      // Προσθέστε εδώ τη λογική για την εξερεύνηση της σπηλιάς
      break;
    case EventType.TREASURE_FOUND:
      console.log(
        `You found a treasure chest containing ${event.amount} ${event.treasureType}.`
      );
      // Προσθέστε εδώ τη λογική για την προσθήκη του θησαυρού στον παίκτη
      break;
    default:
      console.log("Unknown event type.");
  }
}

export function executeRandomEvent() {
  const randomEventIndex = Math.floor(Math.random() * events.length);
  const randomEvent = events[randomEventIndex];
  executeEvent(randomEvent);
}

export function randomEvent() {
  const randomEventIndex = Math.floor(Math.random() * events.length);
  const event = events[randomEventIndex];

  switch (event.type) {
    case EventType.ENEMY_ENCOUNTER:
      randomEnemy(); // Καλέστε εδώ τη συνάρτηση για τη δημιουργία τυχαίου εχθρού
      break;
    case EventType.CAVE_DISCOVERY:
      discoverCave(event.caveType);
      break;
    case EventType.TREASURE_FOUND:
      findTreasure(event.treasureType, event.amount);
      break;
    default:
      console.log("Unknown event type");
  }
}
