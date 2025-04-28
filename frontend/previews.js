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
        <div class="text-center text-2xl font-sora">Alerts</div>
        <div class="flex flex-col sm:flex-row gap-3 lg:gap-4">
          <div class="w-1/2 space-y-1">
            <label for="first-name" class="inline">First Name</label>
            <input class="w-full px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md" type="text" id="first-name" name="first-name" required>
          </div>
          <div class="w-1/2 space-y-1">
            <label for="last-name">Last Name</label>
            <input
              class="w-full px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-slate-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
              type="text" id="last-name" name="last-name" required>
          </div>
        </div>
        <label for="email">Email</label>
        <input
          class="px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
          type="email" id="email" name="email"placeholder="eg. example@gmail.com" required>
        <label for="dateNaissance">Date of birth</label>
        <input
          class="px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
          type="date" id="dateNaissance" name="dateNaissance" required>
        <label for="sexe">Gender</label>
        <select
          class="px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label for="etablissement">Établissement</label>
        <select
          class="px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
          <option value="">Sélectionner votre etablissement</option>
          <option value="fs">FS</option>
          <option value="ensa">ENSA</option>
          <option value="ens">ENS</option>
          <option value="fst">FST</option>
          <option value="est">EST</option>
          <option value="ensg">ENSG</option>
        </select>
        <label for="filiere">Filière</label>
        <select
          class="px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-gray-300 bg-gray-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
          <option value="">Sélectionner votre filière</option>
          <option value="SM">SM</small></option>
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
        <label for="userType" >Type d'utilisateur</label>
        <select
            class="px-3 py-2 text-zinc-600 dark:text-zinc-300 border border-slate-300 bg-slate-200 dark:border-zinc-600 dark:bg-zinc-700 rounded-md"
            id="userType" name="userType" required>
          <option value=""> Sélectionner </option>
          <option value="etudiant">Étudiant</option>
          <option value="enseignant">Enseignant</option>
        </select>
        <button
          id="signup-button"
          type="submit"
          class="rounded-full border border-emerald-600  bg-emerald-500 dark:border-violet-400 dark:bg-violet-500 text-white py-2 focus:outline-none mt-2 md:mt-4 xl:mt-6"
        >
          Sign Up
        </button>
      </form>
  </div>
`;

  const signupForm = document.getElementById("signup-form");

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(signupForm);

    const data = Object.fromEntries(formData.entries());

    console.log("Form submitted! with this data: ", data);
    //TODO: (douae):
    // - implement signup() function in ./client-actions.js.
    // - call signup function with this "data".
  });
};
