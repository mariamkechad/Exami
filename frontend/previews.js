import { login, signup } from "./utils/client-actions.js";

export const showStartPage = (preview) => {
  preview.innerHTML = `
  <div class="w-full h-full flex items-center justify-center">
    <div id="start-container" class="space-y-2 text-center">
      <h3 class="text-xl">Wellcome to Exami</h3>
      <p class="text-xl font-sora">Your place to create/pass exams</p>
      <button
        id="start-button"
        class="inline rounded-lg border border-emerald-600  bg-emerald-500 dark:border-violet-400 dark:bg-violet-500 text-white px-3 py-1 focus:outline-none"
      >
        Get Started
      </button>
    </div>
  </div>`;

  const startButtonElement = document.getElementById("start-button");
  return startButtonElement;
};

export const showSignupForm = (preview) => {
  preview.innerHTML = `
    <div class="px-4 w-full h-full flex items-center justify-center">
      <form id="signup-form" class="space-y-1 w-full md:w-[550px] xl:w-[650px] text-black dark:text-zinc-300 flex flex-col px-6 py-4 rounded-sm border border-gray-300/50 dark:border-zinc-700/50 gap-2 bg-white dark:bg-zinc-800 focus:border-none focus:outline-none">
        <div class="flex flex-col sm:flex-row gap-3 lg:gap-4">
          <div class="w-1/2 space-y-1">
            <label for="firstname" class="inline">First Name</label>
            <input class="w-full px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md" type="text" id="firstname" name="firstname" required>
          </div>
          <div class="w-1/2 space-y-1">
            <label for="lastname">Last Name</label>
            <input
              class="w-full px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-slate-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
              type="text" id="lastname" name="lastname" required>
          </div>
        </div>
        <label for="email">Email</label>
        <input
          class="px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
          type="email" id="email" name="email" placeholder="eg. example@gmail.com" required>
        <label for="password">Password</label>
        <input
          class="px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
          type="password" id="password" name="password" required>
        <label for="birth">Date of birth</label>
        <input
          class="px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
          type="date" id="birth" name="birth" required>
        <label for="gender">Gender</label>
        <select
          id="gender"
          class="px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md">
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label  for="etablissement">Établissement</label>
        <select
          id="etablissement"
          name="etablissement"
          class="px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
          <option value="">Your Etablissement</option>
          <option value="fs">FS</option>
          <option value="ensa">ENSA</option>
          <option value="ens">ENS</option>
          <option value="fst">FST</option>
          <option value="est">EST</option>
          <option value="ensg">ENSG</option>
        </select>
        <label for="filiere">Filiere</label>
        <select
          id="filiere"
          name="filiere"
          class="px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
          <option value="">Sélectionner votre filière</option>
          <option value="SM">SM</option>
          <option value="SMI">SMI</option>
          <option value="SMA">SMA</option>
          <option value="SMC">SMC</option>
          <option value="SMP">SMP</option>
          <option value="SVT">SVT</option>
          <option value="BG">BG</option>
          <option value="BIO">BIO</option>
          <option value="CH">CH</option>
          <option value="GEO">GRO</option>
          <option value="PC">PC</option>
          <option value="INFO">INFO</option>
        </select>
        <label id="type" for="type" >User Type</label>
        <select
            class="px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-slate-300 bg-slate-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
            id="type" name="type" required>
          <option value="student">Student</option>
          <option value="student">Teacher</option>
        </select>
        <button
          id="signup-button"
          type="submit"
          class="rounded-md border border-emerald-600  bg-emerald-500 dark:border-violet-400 dark:bg-violet-500 text-white py-2 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
  </div>
`;

  const formButtonElement = document.getElementById("signup-button");

  const signupForm = document.getElementById("signup-form");

  const getSignupStatusPromise = () => {
    return new Promise((resolve) => {
      signupForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(signupForm);
        const data = Object.fromEntries(formData.entries());

        formButtonElement.innerHTML = `
        <div class="w-full text-center flex flex-row items-center gap-2">
        <i class="fa-solid fa-circle-notch animate-spin"></i>
          <span>Signing up...</span>
        </div>
      `;
        formButtonElement.disabled = true;

        const status = await signup(data);

        formButtonElement.disabled = false;
        formButtonElement.innerText = `Sign Up`;
        console.log("(signup) status is: ", status);

        resolve(status);
      });
    });
  };

  return getSignupStatusPromise();
};

export const showLoginForm = (preview) => {
  preview.innerHTML = `
    <div class=" w-full sm:w-[450px] md:w-[550px] xl:w-[550px] mx-auto h-full flex items-center justify-center">
      <form id="login-form" class="w-full p-4 sm:p-6 lg:p-8 inline space-y-3 md:space-y-4 text-black dark:text-zinc-300 rounded-sm border border-gray-300/50 dark:border-zinc-700/50 bg-white dark:bg-zinc-800">
      <h3 class="w-full text-center text-4xl">Log in</h3>
        <div class="space-y-2">
          <label for="email" class="inline">Email</label>
          <input class="w-full px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-800 rounded-md" type="text" id="email" name="email" required>
        </div>
        <div class="space-y-2">
          <label for="password" class="">Password</label>
          <input class="w-full px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-800 rounded-md" type="password" id="password" name="password" required>
        </div>
        <div class="space-y-2">
          <label for="type" class="">User Type</label>
          <select class="w-full px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-800 rounded-md" id="type" name="type" required>
            <option value="" selected>choose your role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            </select>
        </div>
        <button
          id="login-button"
          type="submit"
          class="flex justify-center items-center gap-2 w-full rounded-full border border-emerald-600  bg-emerald-500 dark:border-violet-400 dark:bg-violet-500 text-white py-2 focus:outline-none mt-2 md:mt-4 xl:mt-6"
        >
          Log in
        </button>
      </form>
  </div>
`;

  const loginForm = document.getElementById("login-form");
  const formButtonElement = document.getElementById("login-button");

  const getLoginStatusPromise = () => {
    return new Promise((resolve) => {
      loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(loginForm);
        const data = Object.fromEntries(formData.entries());

        formButtonElement.innerHTML = `
          <i class="fa-solid fa-circle-notch animate-spin"></i>
          <span>Login in...</span>
      `;

        formButtonElement.disabled = true;

        const status = await login(data);

        formButtonElement.disabled = false;
        formButtonElement.innerText = `Log In`;

        console.log("(login) status is :", status);

        resolve(status);
      });
    });
  };

  return getLoginStatusPromise();
};

export const teacherDashboard = (preview) => {
  preview.innerHTML = `
    <div class="w-full h-full border text-center">
      <p>Teacher dashboard</p>
    </div>
  `;
};
