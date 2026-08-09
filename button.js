(() => {
  const MINI_GAMES_URL =
    "https://click-lynk.com/MINIGAMES-CLICKBET88";

  const GARUDA_81 =
    "data:image/webp;base64,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";

  document
    .querySelectorAll(
      "#cb81-garuda-button, #cb81-garuda, #cb81-premium-final"
    )
    .forEach(element => element.remove());

  document
    .querySelectorAll(
      "#cb81-garuda-style, #cb81-garuda-css, #cb81-premium-style"
    )
    .forEach(element => element.remove());

  const style = document.createElement("style");
  style.id = "cb81-premium-style";

  style.textContent = `
    #cb81-premium-final {
      position: fixed;
      z-index: 999999;
      right: 10px;
      top: 82%;
      width: 185px;
      height: auto;
      display: block;
      padding: 0;
      margin: 0;
      border: 0;
      outline: 0;
      background: transparent;
      cursor: pointer;
      transform: translateY(-50%);
      animation: cb81Float 3.3s ease-in-out infinite;
      -webkit-tap-highlight-color: transparent;
    }

    #cb81-premium-final img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
      pointer-events: none;
      user-select: none;

      filter:
        drop-shadow(0 5px 4px rgba(0,0,0,.58))
        drop-shadow(0 0 5px rgba(255,185,30,.35));

      animation: cb81Glow 2.4s ease-in-out infinite;

      transition:
        transform .35s cubic-bezier(.2,.8,.2,1),
        filter .35s ease;
    }

    #cb81-premium-final::before,
    #cb81-premium-final::after {
      content: "✦";
      position: absolute;
      z-index: 3;
      color: #fff3a6;
      pointer-events: none;
      opacity: 0;

      text-shadow:
        0 0 4px #fff,
        0 0 9px #ffc400,
        0 0 14px #ff8a00;
    }

    #cb81-premium-final::before {
      top: 5px;
      right: 23px;
      font-size: 17px;
      animation: cb81Spark 2s ease-in-out infinite;
    }

    #cb81-premium-final::after {
      left: 18px;
      bottom: 7px;
      font-size: 11px;
      animation: cb81Spark 2s .8s ease-in-out infinite;
    }

    #cb81-premium-final:hover img {
      transform: scale(1.12);

      filter:
        drop-shadow(0 7px 5px rgba(0,0,0,.65))
        drop-shadow(0 0 10px rgba(255,194,40,.75))
        brightness(1.1);
    }

    #cb81-premium-final:active img {
      transform: scale(.93);
    }

    @keyframes cb81Float {
      0%, 100% {
        transform: translateY(-50%) translateY(0) rotate(-1deg);
      }

      50% {
        transform: translateY(-50%) translateY(-9px) rotate(1deg);
      }
    }

    @keyframes cb81Glow {
      0%, 100% {
        filter:
          drop-shadow(0 5px 4px rgba(0,0,0,.58))
          drop-shadow(0 0 4px rgba(255,185,30,.25));
      }

      50% {
        filter:
          drop-shadow(0 7px 5px rgba(0,0,0,.62))
          drop-shadow(0 0 10px rgba(255,194,40,.65))
          brightness(1.06);
      }
    }

    @keyframes cb81Spark {
      0%, 100% {
        opacity: 0;
        transform: scale(.25) rotate(0deg);
      }

      50% {
        opacity: 1;
        transform: scale(1.25) rotate(90deg);
      }
    }

    @media (max-width: 600px) {
      #cb81-premium-final {
        top: auto;
        right: 4px;
        bottom: 18px;
        width: 150px;
        transform: none;
      }

      @keyframes cb81Float {
        0%, 100% {
          transform: translateY(0) rotate(-1deg);
        }

        50% {
          transform: translateY(-7px) rotate(1deg);
        }
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #cb81-premium-final,
      #cb81-premium-final img,
      #cb81-premium-final::before,
      #cb81-premium-final::after {
        animation: none !important;
      }
    }
  `;

  const button = document.createElement("a");

  button.id = "cb81-premium-final";
  button.href = MINI_GAMES_URL;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.title = "Masuk ke Merdeka Mini Games";

  button.setAttribute(
    "aria-label",
    "Masuk ke Merdeka Mini Games CLICKBET88"
  );

  button.innerHTML = `
    <img
      src="${GARUDA_81}"
      alt="Garuda 81 Merdeka Mini Games"
      draggable="false"
    >
  `;

  document.head.appendChild(style);
  document.body.appendChild(button);
})();
(() => {
  document.getElementById("cb81-force-animation")?.remove();

  const forceStyle = document.createElement("style");
  forceStyle.id = "cb81-force-animation";

  forceStyle.textContent = `
    @keyframes cb81SiteMotionFinal {
      0%, 100% {
        transform: translateY(0) rotate(-1deg) scale(1);
        filter:
          drop-shadow(0 5px 4px rgba(0,0,0,.58))
          drop-shadow(0 0 4px rgba(255,185,30,.3));
      }

      50% {
        transform: translateY(-9px) rotate(1deg) scale(1.025);
        filter:
          drop-shadow(0 7px 5px rgba(0,0,0,.65))
          drop-shadow(0 0 11px rgba(255,194,40,.7))
          brightness(1.08);
      }
    }

    @keyframes cb81SiteSparkFinal {
      0%, 100% {
        opacity: 0;
        transform: scale(.25) rotate(0deg);
      }

      50% {
        opacity: 1;
        transform: scale(1.25) rotate(90deg);
      }
    }
  `;

  document.head.appendChild(forceStyle);

  function aktifkanAnimasi() {
    const button = document.getElementById("cb81-premium-final");

    if (!button) {
      setTimeout(aktifkanAnimasi, 300);
      return;
    }

    const image = button.querySelector("img");

    // Matikan animasi container agar posisi tidak terganggu
    button.style.setProperty("animation", "none", "important");

    // Paksa gambar tetap bergerak meskipun CSS situs menimpanya
    if (image) {
      image.style.setProperty(
        "animation",
        "cb81SiteMotionFinal 3.3s ease-in-out infinite",
        "important"
      );

      image.style.setProperty(
        "animation-play-state",
        "running",
        "important"
      );

      image.style.setProperty(
        "will-change",
        "transform, filter",
        "important"
      );
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", aktifkanAnimasi);
  } else {
    aktifkanAnimasi();
  }
})();
