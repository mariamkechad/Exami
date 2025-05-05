import { showStartPage, showSignupForm, showLoginForm } from "./previews.js";

// main changing part of index html page:
const dynamicPreview = document.getElementById("dynamic-preview");

// dyanmic preview with starter page.
const startButton = showStartPage(dynamicPreview);

startButton.addEventListener("click", async () => {
  const signupStatusPromise = showSignupForm(dynamicPreview);
  const signupStatus = await signupStatusPromise;

  renderAlerts(signupStatus);

  if (signupStatus.alertType === "Sccess") {
  }
  const loginStatusPromise = showLoginForm(dynamicPreview);
  const loginStatus = await loginStatusPromise;
  renderAlerts(loginStatus);
});

// toggle between singup and login;
function toggleAuthForms(prevForm) {}

// render alerts ui inside navbar.
function renderAlerts(info) {
  const alertsElement = document.getElementById("alerts");
  alertsElement.textContent = info.alertMessage;
}

// light/dark modes
function changeTheme() {
  const themeToggleButton = document.getElementById("theme-toggle");
  const rootElement = document.documentElement;
  const switchButton = document.getElementById("switch-button");

  let darkMode = true;
  rootElement.classList.add("dark");
  // switchButton.innerHTML = `<i class="fa-regular fa-sun"></i>`;

  themeToggleButton.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
      rootElement.classList.add("dark");
      themeToggleButton.classList.add("justify-end");
      // switchButton.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    } else {
      rootElement.classList.remove("dark");
      themeToggleButton.classList.remove("justify-end");
      // switchButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
  });
}

changeTheme();
