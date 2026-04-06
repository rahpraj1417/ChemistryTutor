document.getElementById("year").textContent = new Date().getFullYear();

const root = document.documentElement;
const btn = document.getElementById("themeToggle");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  btn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
}

const saved = localStorage.getItem("theme");
if (saved === "light" || saved === "dark") {
  setTheme(saved);
} else {
  // default theme
  setTheme("dark");
}

btn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

// Mobile hamburger menu
const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");

function closeMenu() {
  document.documentElement.classList.remove("nav-open");
  menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn.addEventListener("click", () => {
  const open = document.documentElement.classList.toggle("nav-open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

// Close menu when a link is clicked
menuPanel.addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "A") closeMenu();
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});