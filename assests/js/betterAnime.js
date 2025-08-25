// betterAnime.js
// Enhanced helper utilities on top of anime.js

(function(global){
  if(!global.anime) {
    throw new Error("anime.js must be loaded before betterAnime.js");
  }

  const betterAnime = {
    // 🔹 Fade In with scale pop
    fadeIn: function(el, delay=0, duration=800) {
      anime({
        targets: el,
        opacity: [0, 1],
        scale: [0.95, 1],
        duration,
        delay,
        easing: "easeOutExpo"
      });
    },

    // 🔹 Neon Pulse (glow effect)
    neonPulse: function(el, color="#00ff88") {
      anime({
        targets: el,
        textShadow: [
          `0 0 5px ${color}`,
          `0 0 20px ${color}`,
          `0 0 5px ${color}`
        ],
        duration: 2000,
        loop: true,
        easing: "easeInOutSine"
      });
    },

    // 🔹 Typing Text Effect
    typeText: function(el, text, speed=50) {
      el.innerHTML = "";
      let i = 0;
      function type() {
        if (i < text.length) {
          el.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    },

    // 🔹 Card Hover Tilt
    tiltCard: function(el) {
      el.addEventListener("mousemove", (e) => {
        const { width, height, left, top } = el.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        anime({
          targets: el,
          rotateX: y * 10,
          rotateY: x * 10,
          scale: 1.05,
          duration: 300,
          easing: "easeOutQuad"
        });
      });
      el.addEventListener("mouseleave", () => {
        anime({
          targets: el,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 500,
          easing: "easeOutElastic(1, .6)"
        });
      });
    }
  };

  global.betterAnime = betterAnime;
})(this);
