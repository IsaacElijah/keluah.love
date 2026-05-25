  
// ==========================
// PASSWORD CHECK (index.html)
// ==========================
function checkPassword() {
  const password = document.getElementById("passwordInput").value;

  if (password === "keluah") {
    window.location.href = "main.html";
  } else {
    alert("Wrong password ❤️");
  }
}


// ==========================
// DAYS SINCE 14 JUNE 2025
// ==========================
function updateDaysCounter() {

  const startDate = new Date("2025-06-14");
  const today = new Date();

  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const counter = document.getElementById("daysCounter");

  if (counter) {
    counter.innerText = `${diffDays} days of knowing you ❤️`;
  }
}


// ==========================
// MUSIC AUTO HANDLING FIX
// (Browsers block autoplay sometimes)
// ==========================
function tryPlayMusic() {
  const music = document.getElementById("bgMusic");

  if (music) {
    music.volume = 0.6;

    const playPromise = music.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log("Autoplay blocked — user interaction needed");
      });
    }
  }
}


// ==========================
// INIT ON PAGE LOAD
// ==========================
window.addEventListener("load", () => {
  updateDaysCounter();
  tryPlayMusic();
});


const symbols = ["❤️", "🤎", "💗", "🌸", "🌷"];

// CREATE FLOATING OBJECT
function createFloating() {
  const el = document.createElement("div");
  el.classList.add("floating");

  el.innerText = symbols[Math.floor(Math.random() * symbols.length)];

  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = (14 + Math.random() * 18) + "px";
  el.style.animationDuration = (6 + Math.random() * 6) + "s";

  document.body.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 12000);
}

// START LOOP ON ALL PAGES
setInterval(createFloating, 500);


function typeWriter(element, speed = 20) {
  if (!element) return;

  // Store clean text (NOT HTML)
  const text = element.textContent;
  element.textContent = "";

  let i = 0;

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

/* APPLY TO ALL LETTERS */
window.addEventListener("load", () => {
  const letters = document.querySelectorAll(".letter");

  letters.forEach(letter => {
    typeWriter(letter, 15);
  });
});
