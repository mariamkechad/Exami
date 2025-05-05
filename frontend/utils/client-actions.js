// signup endpoint
export const signup = async (userData) => {
  console.log("user data is : ", userData);

  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userData,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.log("User already exist");
      return {
        alertMessage: result.message,
        alertType: "Error",
      };
    }

    return {
      alertMessage: result.message,
      alertType: "Success",
    };
  } catch (err) {
    console.log("error signing up");
    console.error("error while signing up, error: ", err);
    return {
      alertMessage: "Field to create accout, please try again!",
      alertType: "Error",
    };
  }
};

// login endpoint
export const login = async (data) => {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      console.log("response was not okey!");
      if (res.status == 401) {
        console.log(result.message);
      }
      return {
        alertMessage: result.message,
        alertType: "Error",
      };
    }

    console.log("result is : ", result);

    if (result.isLogedIn) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userType", result.user.type);
    }

    return {
      alertMessage: result.message,
      alertType: "Success",
      logedIn: result.isLogedIn,
      userInfo: result.user,
    };
  } catch (e) {
    console.log("Error while loging in!");
    console.error("error login in : ", e);
  }
};

// auth funcitons:
export function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

export function getUserType() {
  return localStorage.getItem("userType") || "guest"; // fallback
}

// TODO: (douae):
// logout user
// remove user form the localstorage
export const logout = () => {};

export const getGithubProfiles = () => {
  // TODO: (maryam):
  // - fetch our data from github.
  // - use some github api to accomplish that.
  console.log("git out github profiles...");
};
