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