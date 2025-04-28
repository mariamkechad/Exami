import { showStartPage, showSignupForm } from "./previews.js";

// main changing part of index html page:
const dynamicPreview = document.getElementById("dynamic-preview");
console.log("dyanmic preview is : ", dynamicPreview);
// dyanmic preview with starter page.
const startButton = showStartPage(dynamicPreview);

startButton.addEventListener("click", () => {
  showSignupForm(dynamicPreview);
});

// theme toggling
// TODO: (maryam)
// - save theme value in local storage.
// - support device based theme.
function changeTheme() {
  const themeToggleButton = document.getElementById("theme-toggle");
  const rootElement = document.documentElement;

  let darkMode = false;
  themeToggleButton.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
      rootElement.classList.add("dark");
      themeToggleButton.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    } else {
      rootElement.classList.remove("dark");
      themeToggleButton.innerHTML = `
  <i class="fa-solid fa-moon"></i>
  `;
    }
  });
}

changeTheme();
