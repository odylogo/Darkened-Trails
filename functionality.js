
function startRound() {
    setInterval(() => {
      eventCreationInstance.handlePlayerClicks();
    }, 30000); // 30 seconds
  
    // Αλλαγή του κειμένου του #event
    document.getElementById("event").innerText = "New Event Text";
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start');
  
    startButton.addEventListener('click', () => {
      startButton.style.display = 'none';
      startRound();
  
      // Προσθήκη της αρχικής αλλαγής κειμένου του #event
      document.getElementById("event").innerText = "Initial Event Text";
    });
  });
  
  