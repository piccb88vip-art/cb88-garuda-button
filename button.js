(() => {
  const MINI_GAMES_URL =
    "https://click-lynk.com/MINIGAMES-CLICKBET88";

  const BUTTON_IMAGE =
    "data:image/webp;base64,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";

  document
    .querySelectorAll(
      "#cb81-garuda-button, #cb81-garuda, #cb81-premium-final"
    )
    .forEach(element => element.remove());

  document
    .querySelectorAll(
      "#cb81-garuda-style, #cb81-garuda-css, #cb81-premium-style, " +
      "#cb81-force-animation, #cb81-mobile-position, " +
      "#cb81-mobile-final, #cb81-position-final"
    )
    .forEach(element => element.remove());

  const style = document.createElement("style");
  style.id = "cb81-premium-style";

  style.textContent = `
    #cb81-premium-final {
      position: fixed;
      z-index: 999999;
      left: auto !important;
      right: 8px !important;
      top: 65%;
      bottom: auto;
      width: 120px;
      height: auto;
      display: block;
      padding: 0;
      margin: 0;
      border: 0;
      outline: 0;
      background: transparent;
      cursor: pointer;
      transform: translateY(-50%);
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
      animation: cb81SiteMotionFinal 3.3s ease-in-out infinite !important;
      animation-play-state: running !important;
      will-change: transform, filter;
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
        left: auto !important;
        right: 4px !important;
        top: 76%;
        bottom: auto !important;
        width: 75px;
        transform: translateY(-50%);
      }
    }
  `;

const LOGIN_LABELS = [
  "MASUK",
  "LOGIN"
];

const REGISTER_LABELS = [
  "DAFTAR",
  "REGISTER"
];

const MEMBER_LABELS = [
  "KELUAR",
  "LOGOUT",
  "LOG OUT"
];

const LOGIN_STATE_ELEMENTS = [
  "a",
  "button",
  "input",
  '[role="button"]',
  "[onclick]",
  "[tabindex]",
  "span",
  "label",
  "img[alt]"
].join(",");

const normalizeLabel = value =>
  String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();

const getElementLabels = element =>
  [
    element.textContent,
    element.value,
    element.getAttribute("aria-label"),
    element.getAttribute("title"),
    element.getAttribute("alt")
  ]
    .map(normalizeLabel)
    .filter(label => label && label.length <= 50);

const isVisible = element =>
  Boolean(
    element &&
    (element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length)
  );

const labelContainsKeyword = (label, keywords) => {
  const words = label.split(/[^A-Z0-9]+/).filter(Boolean);

  return keywords.some(keyword =>
    keyword.includes(" ")
      ? label.includes(keyword)
      : words.includes(keyword)
  );
};

const hasVisibleGuestControl = () => {
  const visibleLabels = Array.from(
    document.querySelectorAll(LOGIN_STATE_ELEMENTS)
  ).flatMap(element => {
    if (!isVisible(element)) return [];

    return getElementLabels(element);
  });

  const hasLoginButton = visibleLabels.some(label =>
    labelContainsKeyword(label, LOGIN_LABELS)
  );

  const hasRegisterButton = visibleLabels.some(label =>
    labelContainsKeyword(label, REGISTER_LABELS)
  );

  // Dianggap logout hanya jika tombol login dan daftar
  // ditemukan secara bersamaan
  return hasLoginButton && hasRegisterButton;
};

const hasMemberLogoutControl = () => {
  const logoutElement = document.querySelector(
    [
      '[href*="logout"]',
      '[href*="keluar"]',
      '[id*="logout"]',
      '[id*="keluar"]',
      '[class*="logout"]',
      '[class*="keluar"]',
      '[data-action*="logout"]'
    ].join(",")
  );

  if (logoutElement) return true;

  return Array.from(
    document.querySelectorAll(LOGIN_STATE_ELEMENTS)
  ).some(element =>
    getElementLabels(element).some(label =>
      labelContainsKeyword(label, MEMBER_LABELS)
    )
  );
};

const isMemberLoggedIn = () => {
  if (document.readyState === "loading") return false;

  // Ada MASUK/LOGIN/DAFTAR = belum login
  // Tidak ada = member sudah login
  return !hasVisibleGuestControl();
};

  const button = document.createElement("a");

  button.id = "cb81-premium-final";
  button.href = MINI_GAMES_URL;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.title = "Main Merdeka Mini Games";
  button.style.setProperty("display", "none", "important");

  button.setAttribute(
    "aria-label",
    "Main Merdeka Mini Games CLICKBET88"
  );

  button.innerHTML = `
    <img
      src="${BUTTON_IMAGE}"
      alt="Garuda 81 Main Sekarang"
      draggable="false"
    >
  `;

  document.head.appendChild(style);
  document.body.appendChild(button);

  const syncButtonVisibility = () => {
    button.style.setProperty(
      "display",
      isMemberLoggedIn() ? "block" : "none",
      "important"
    );
  };

  let visibilityFrame;

  const scheduleVisibilityCheck = () => {
    if (visibilityFrame) {
      cancelAnimationFrame(visibilityFrame);
    }

    visibilityFrame = requestAnimationFrame(
      syncButtonVisibility
    );
  };

  const loginStateObserver = new MutationObserver(
    scheduleVisibilityCheck
  );

  loginStateObserver.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: [
      "class",
      "style",
      "hidden",
      "aria-hidden"
    ]
  });

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      syncButtonVisibility,
      { once: true }
    );
  } else {
    syncButtonVisibility();
  }

  [50, 200, 500].forEach(delay => {
    setTimeout(syncButtonVisibility, delay);
  });

  const image = button.querySelector("img");

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
})();
