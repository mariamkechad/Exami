import { initRouter, navigateTo } from "./utils/router.js";
import { renderPreview } from "./previews.js";

// const startButton = showStartPage(dynamicPreview);
//
// let loginStatus;
// startButton.addEventListener("click", async () => {
//   const signupStatusPromise = showSignupForm(dynamicPreview);
//   const signupStatus = await signupStatusPromise;
//
//   renderAlert(signupStatus);
//   if (signupStatus.alertType === "Success") {
//     const loginStatusPromise = showLoginForm(dynamicPreview);
//     loginStatus = await loginStatusPromise;
//   }
//
//   console.log("login status are : ", loginStatus);
//
//   renderAlert(loginStatus);
//
//   if (loginStatus.logedIn) {
//     if (loginStatus.userInfo.role === "teacher") {
//       teacherDashboard(dynamicPreview);
//     } else {
//       teacherDashboard(dynamicPreview);
//     }
//   }
// });

// render alerts ui inside navbar.
export function renderAlert(message, type) {
  const alertsElement = document.getElementById("alerts");

  const alertClass =
    type === "error"
      ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      : type === "success"
        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";

  alertsElement.className = `inline-block px-4 py-2 rounded ${alertClass}`;
  alertsElement.textContent = message;

  setTimeout(() => {
    alertsElement.className = "hidden";
    alertsElement.textContent = "";
  }, 3000);
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

function startExami() {
  changeTheme();
  initRouter();

  // check if hash exist in url "like #about"  if not path is "/home"
  const path = window.location.hash.substring(1) || "/home";
  navigateTo(path);
}

document.addEventListener("DOMContentLoaded", startExami);
