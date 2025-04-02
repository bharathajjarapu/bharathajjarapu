ScrollReveal().reveal('section', {
  duration: 1000,
  distance: '50px',
  easing: 'ease-in-out',
  origin: 'bottom',
});

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.nav-btn');
  const slider = document.querySelector('.slider');
  const contentSections = document.querySelectorAll('.content-section');
  const aboutContentWrapper = document.querySelector('.about-content-wrapper');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const isRightButton = this.dataset.target === 'github';
      slider.style.transform = isRightButton ? 'translateX(100%)' : 'translateX(0)';

      contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.classList.contains(this.dataset.target)) {
          section.classList.add('active');
          setTimeout(() => {
            aboutContentWrapper.style.height = `${section.offsetHeight}px`;
          }, 0);
        }
      });
    });
  });

  const activeSection = document.querySelector('.content-section.active');
  if (activeSection) {
    aboutContentWrapper.style.height = `${activeSection.offsetHeight}px`;
  }
});

function hackerTextEffect() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_ +abcdefghijklmnopqrstuvwxyzあは世界안녕하세요세계";
  const h1 = document.querySelector("h1");
  const originalText = h1.dataset.value;
  let currentIndex = 0;

  // Reset the h1 content
  h1.textContent = "";

  // Create initial placeholder spaces
  const placeholderText = Array(originalText.length).fill(" ").join("");
  h1.textContent = placeholderText;

  const animateNextChar = () => {
    if (currentIndex >= originalText.length) return;

    let iterations = 0;
    const maxIterations = 8; // Increase number of iterations for more visible effect

    const intervalId = setInterval(() => {
      h1.textContent = h1.textContent
        .split("")
        .map((char, index) => {
          // Keep previously revealed characters
          if (index < currentIndex) {
            return originalText[index];
          }
          // Animate current character
          if (index === currentIndex) {
            if (iterations >= maxIterations) {
              clearInterval(intervalId);
              setTimeout(() => {
                animateNextChar(); // Start next character animation
              }, 60);
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          }
          // Keep spaces for unrevealed characters
          return " ";
        })
        .join("");

      iterations++;
    }, 100); // Faster interval for smoother animation

    currentIndex++;
  };

  // Add timeout before starting the animation
  setTimeout(() => {
    animateNextChar();
  }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  hackerTextEffect();
});


const bootText = [
  "INITIALIZING WEBSITE...",
  "INITIALIZING BOOT SEQUENCE...",
  "ACCESSING BHARATH'S INFORMATION...",
];

const bootSequence = document.getElementById('boot-sequence');
let currentLine = 0;
let charIndex = 0;

function typeWriter() {
  if (currentLine < bootText.length) {
    const line = document.createElement('div');
    line.className = 'boot-text';
    bootSequence.appendChild(line);

    function typeCharacter() {
      if (charIndex < bootText[currentLine].length) {
        const charSpan = document.createElement('span');
        charSpan.className = 'hacking-animation__character';
        charSpan.textContent = bootText[currentLine][charIndex];
        line.appendChild(charSpan);
        charIndex++;
        setTimeout(typeCharacter, 30);
      } else {
        charIndex = 0;
        currentLine++;
        setTimeout(typeWriter, 50);
      }
    }
    typeCharacter();
  } else {
    setTimeout(() => {
      const loader = document.getElementById('loader-wrapper');
      const mainContent = document.querySelector('.main-content');
      loader.classList.add('fade-out');
      mainContent.classList.add('visible');
      setTimeout(() => {
        loader.style.display = 'none';
        // Start the hacker text effect after boot sequence and fade out
        setTimeout(() => {
          hackerTextEffect();
        }, 1000); // Add a small delay after boot sequence completes
      }, 500);
    }, 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeWriter();
});