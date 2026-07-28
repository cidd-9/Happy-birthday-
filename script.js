/* ==========================================
   1. MULTI-PAGE NAVIGATION
   ========================================== */
function goToPage(pageNumber) {
  // Hide all screens
  const screens = document.querySelectorAll('.page-screen');
  screens.forEach(screen => {
    screen.classList.remove('active-page');
  });

  // Show selected screen
  const targetPage = document.getElementById(`page-${pageNumber}`);
  if (targetPage) {
    targetPage.classList.add('active-page');
    // Scroll smoothly to top of page on change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Trigger Typewriter effect automatically when reaching Page 3
  if (pageNumber === 3 && !typewriterStarted) {
    setTimeout(startTypewriter, 400);
  }
}

/* ==========================================
   2. AMBIENT BACKGROUND PARTICLES
   ========================================== */
function initParticles() {
  const container = document.getElementById('particle-container');
  if (!container) return;

  const symbols = ['🌸', '✨', '💖', '⭐', '🎈', '🤍'];
  const particleCount = 18;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    
    // Random position and timing
    particle.style.left = Math.random() * 95 + 'vw';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
    particle.style.fontSize = (Math.random() * 10 + 14) + 'px';
    
    container.appendChild(particle);
  }
}

/* ==========================================
   3. ENVELOPE & SECRET GIFT NOTES REVEAL
   ========================================== */
let envelopeOpened = false;
function openEnvelope() {
  if (envelopeOpened) return;
  
  const revealBox = document.getElementById('surprise-reveal');
  const envelopeHint = document.querySelector('.envelope-hint');
  const seal = document.querySelector('.envelope-seal');

  if (revealBox) {
    revealBox.style.display = 'block';
    envelopeHint.innerText = 'Surprise unlocked! ✨';
    seal.innerText = '💌';
    envelopeOpened = true;

    // Small celebratory confetti burst
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 }
    });
  }
}

function revealNote(noteNumber) {
  const targetNote = document.getElementById(`note-${noteNumber}`);
  if (targetNote) {
    // Toggle note visibility
    if (targetNote.style.display === 'block') {
      targetNote.style.display = 'none';
    } else {
      targetNote.style.display = 'block';
      
      // Little heart pop confetti
      confetti({
        particleCount: 20,
        spread: 40,
        origin: { y: 0.7 },
        colors: ['#e91e63', '#f48fb1', '#ffffff']
      });
    }
  }
}

/* ==========================================
   4. CANDLE BLOWING & CONFETTI
   ========================================== */
let candleBlown = false;
function blowCandle() {
  if (candleBlown) return;

  const flame = document.getElementById('flame');
  const instruction = document.getElementById('cake-instruction');

  if (flame) {
    flame.classList.add('extinguished');
    candleBlown = true;

    if (instruction) {
      instruction.innerText = 'Your wish has been sent to the stars! ✨';
      instruction.style.color = '#e91e63';
    }

    // Launch celebratory confetti burst
    triggerMassiveConfetti();
  }
}

function triggerMassiveConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#e91e63', '#f48fb1', '#c2185b', '#ffffff', '#ffd1dc']
  });
}

/* ==========================================
   5. TYPEWRITER EFFECT FOR BIRTHDAY LETTER
   ========================================== */
// CUSTOMIZE YOUR PERSONAL LETTER HERE:
const birthdayLetterText = `Happy Birthday! 🎂

Dekh meko coding aati nhi hai but still it took me a lot to make this and I hope you'll love it nvm so it's your birthday happy birthday my sweet sister maybe we're not that close or maybe there are still some bitter memories but yeah they're truly loveable it really makes me smile when I think of it....


Maybe we've had a lot of fights like animals but they're really sweet memories maybe in school we never felt enough comfortable to talk everything but I promise I never hated u (I mean after class 7 cuz us se pahele tu dushman thi meri ) nor I think I loved u much as a friend or anything like that but yeah things are very different now and I guess it's really going very well so hope we stay like this for always and yk what I'm writing this on 29th of July at 4:21AM cuz mei 2 3 din se bs codes hi copy paste kar rha hu 🥲(coding nhi aati bhai 😭 )


so at last wish u a very happy birthday may this birthday bring smiles on your face and make u smile always (cuz u look pretty when u smile 👉🏻👈🏻) so that's all I can write cuz yaha space nhi hai jyada so enjoy ur loving day✨
`;

let charIndex = 0;
let typewriterStarted = false;

function startTypewriter() {
  const typedContainer = document.getElementById('typed-text');
  if (!typedContainer) return;

  typewriterStarted = true;

  function typeChar() {
    if (charIndex < birthdayLetterText.length) {
      typedContainer.innerHTML += birthdayLetterText.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 32); // Speed of typing in milliseconds
    }
  }

  typeChar();
}

/* ==========================================
   6. AUDIO PLAYER TOGGLE
   ========================================== */
let isPlaying = false;
function toggleAudio() {
  const audio = document.getElementById('bg-music');
  const musicText = document.getElementById('music-text');

  if (!audio) return;

  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    if (musicText) musicText.innerText = 'Tap for Soft Music 🎵';
  } else {
    audio.play().then(() => {
      isPlaying = true;
      if (musicText) musicText.innerText = 'Playing Music ✨ (Tap to Pause)';
    }).catch(err => {
      console.log('Audio autoplay prevented or failed:', err);
    });
  }
}

/* ==========================================
   7. INITIALIZE ON PAGE LOAD
   ========================================== */
window.addEventListener('DOMContentLoaded', () => {
  // Start ambient floating particles
  initParticles();
});
