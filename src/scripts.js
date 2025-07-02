 AOS.init();

// Ativar tema salvo ao carregar a página
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}

// Dark mode toggle
const darkmode = document.getElementById("dark-mode");

darkmode.addEventListener("click", () => {
  const root = document.documentElement;
  const isDark = root.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  darkmode.classList.toggle("fa-sun");
  darkmode.classList.toggle("fa-moon");
});


// Menu hamburguer
const menu = document.getElementById("menu");
const menubtn = document.getElementById("menu-btn");
const blurOverlay = document.getElementById("blur-overlay");

const toggleMenu = () => {
  const isOpen = menu.classList.contains("block");

  menu.classList.toggle("hidden", isOpen);
  menu.classList.toggle("block", !isOpen);

  blurOverlay.classList.toggle("opacity-100", !isOpen);
  blurOverlay.classList.toggle("pointer-events-auto", !isOpen);
  blurOverlay.classList.toggle("opacity-0", isOpen);
  blurOverlay.classList.toggle("pointer-events-none", isOpen);

  menubtn.setAttribute("aria-expanded", String(!isOpen));
  menubtn.textContent = isOpen ? "menu" : "✖";
};

const closeMenu = () => {
  menu.classList.remove("block");
  menu.classList.add("hidden");
  blurOverlay.classList.remove("opacity-100", "pointer-events-auto");
  blurOverlay.classList.add("opacity-0", "pointer-events-none");
  menubtn.setAttribute("aria-expanded", "false");
  menubtn.textContent = "menu";
};

// Eventos
menubtn.addEventListener("click", toggleMenu);

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menubtn.contains(e.target)) closeMenu();
});

menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", closeMenu)
);

