document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".button_toggle button");
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const sidebar = document.getElementById("sidebar");
  const input = document.getElementById("search-input");
  const suggestionsBox = document.querySelector(".suggestions");

  // =====================
  // DARK / LIGHT MODE
  // =====================
  if (toggleBtn) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
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
  }

  // =====================
  // SIDEBAR
  // =====================
  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.add("active");
    });
  }

  if (closeBtn && sidebar) {
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
  }

  // Click bên ngoài sidebar => tự đóng
  document.addEventListener("click", (e) => {
    if (sidebar && sidebar.classList.contains("active")) {
      if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove("active");
      }
    }
  });

  // =====================
  // SEARCH + GỢI Ý
  // =====================
  const data = [
    { name: "Facebook", url: "https://www.facebook.com/" },
    { name: "Instagram", url: "https://www.instagram.com/" },
    { name: "YouTube", url: "https://www.youtube.com/" },
    { name: "Google", url: "https://www.google.com/" },
    { name: "GitHub", url: "https://github.com/" },
    { name: "ChatGPT", url: "https://chatgpt.com/" },
    { name: "Zalo", url: "https://zalo.me/" },
    { name: "App Store", url: "https://www.apple.com/vn/app-store/" },
    { name: "CH Play", url: "https://play.google.com/store/games?hl=vi" },
    { name: "Discord", url: "https://discord.com/" },
    { name: "Telegram", url: "https://telegram.org/" },
    { name: "Gemini AI", url: "https://gemini.google.com/app?hl=vi" },
    { name: "Copilot", url: "https://copilot.microsoft.com/" },
    { name: "Canva", url: "https://www.canva.com/vi_vn/" },
    { name: "Bing", url: "https://www.bing.com/" },
    { name: "Baidu", url: "https://www.baidu.com/" },
    { name: "Yahoo", url: "https://search.yahoo.com/" },
    { name: "DuckDuckGo", url: "https://duckduckgo.com/" },
    { name: "Yandex", url: "https://yandex.com/" },
    { name: "Claude AI", url: "https://claude.com/product/overview" },
  ];

  if (input && suggestionsBox) {
    input.addEventListener("input", () => {
      const value = input.value.toLowerCase().trim();
      suggestionsBox.innerHTML = "";

      if (value) {
        const filtered = data.filter(item =>
          item.name.toLowerCase().includes(value)
        );

        if (filtered.length > 0) {
          filtered.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.name;

            li.addEventListener("click", () => {
              window.open(item.url, "_blank");
              suggestionsBox.style.display = "none";
              input.value = "";
            });

            suggestionsBox.appendChild(li);
          });

          suggestionsBox.style.display = "block";
        } else {
          suggestionsBox.style.display = "none";
        }
      } else {
        suggestionsBox.style.display = "none";
      }
    });

    // Click ra ngoài => ẩn gợi ý
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search")) {
        suggestionsBox.style.display = "none";
      }
    });
  }
});
