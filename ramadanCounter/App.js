function calculateTimeRemaining() {
    // Get the current date and time
    const now = new Date();

    // Create a Date object representing the start of Ramadan
    const startOfRamadan = new Date(Date.UTC(2023, 2, 23, 0, 0, 0));
 

    // Calculate the time remaining in milliseconds
    const timeRemaining = startOfRamadan - now;

    // Convert the time remaining to days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Return an object with the time remaining
    return { days, hours, minutes, seconds };
  }

  function updateTimerDisplay() {
    // Get the time remaining
    const timeRemaining = calculateTimeRemaining();

    // Update the display with the time remaining
    document.getElementById('days').textContent = timeRemaining.days;
    document.getElementById('hours').textContent = timeRemaining.hours;
    document.getElementById('minutes').textContent = timeRemaining.minutes;
    document.getElementById('seconds').textContent = timeRemaining.seconds;
    if (now >= startOfRamadan) {
        document.querySelector('.text').textContent = 'Welcome to Ramadan';

    }
  }

  setInterval(updateTimerDisplay, 1000);

