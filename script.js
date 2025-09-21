const toggleBtn = document.querySelector(".button_toggle button");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "Light Mode";
} else {
  toggleBtn.textContent = "Dark Mode";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  }
});
