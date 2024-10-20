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
  const letters = "abcdefghijklmnopqrstuvwxyz☺Πあいうえお漢字你好世界こんにちは世界안녕하세요세계";
  const h1 = document.querySelector("h1");
  const originalText = h1.dataset.value;

  let interval = null;
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    h1.innerText = h1.innerText
      .split("")
      .map((letter, index) => {
        if (index < Math.floor(iteration)) {
          return originalText[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if (iteration >= originalText.length) {
      clearInterval(interval);
    }

    iteration += 1 / 5;
  }, 100);
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
      }, 500);
    }, 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeWriter();
});