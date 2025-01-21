
document.addEventListener('DOMContentLoaded', () => {
    const fallingCrackers = document.querySelector('.falling-crackers');
  
    function createCracker() {
      const cracker = document.createElement('div');
      cracker.classList.add('cracker');
  
      // Randomize position and animation duration
      cracker.style.left = `${Math.random() * 100}%`;
      cracker.style.animationDuration = `${3 + Math.random() * 2}s`; // Fall speed
      cracker.style.animationDelay = `${Math.random() * 5}s`; // Staggered start
      cracker.style.backgroundColor = getRandomColor(); // Colorful crackers
  
      fallingCrackers.appendChild(cracker);
  
      // Remove cracker after animation
      setTimeout(() => {
        cracker.remove();
      }, 5000);
    }
  
    function getRandomColor() {
      const colors = ['#ff6f91', '#ff9a9e', '#fad0c4', '#fbc2eb', '#ffc3a0', '#f7d794'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  
    // Create crackers at intervals
    setInterval(createCracker, 200);
  });
  let content = false;

  const handler = () => {
      setTimeout(() => {
          alert("Please open again");
          const wishesElement = document.querySelector('.wishes');
          if (wishesElement) {
              wishesElement.innerHTML = `
                  <p>Namaskar ji alias rabbit</p>
                  <p>Munduga puttina roju subhakankshalu,prati puutinaroju ala pottiga vuntu vuntu enti inka anthe ilaanti putttina roojulu chaala jarupukovalani korukuntu ive maa divenalu challaga vundu beta...! </p>
                  <p class="name">Your Jii</p>`;
          }
          content = true;
  
          // Remove the event listener when content is true
          if (content) {
              document.getElementById('birthdayCard').removeEventListener('mouseleave', handler);
          }
      }, 1000);
  };
  
  document.getElementById('birthdayCard').addEventListener('mouseleave', handler);
  