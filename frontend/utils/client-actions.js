// signup endpoint
export const signup = async (userData) => {
  console.log("user data > ", userData);
  const response = fetch("/api/signup", {
    method : "POST", 
    headers: {
      'Content-type' : 'application/json'
    },
    body: {
      data: JSON.stringify(userData)
    }
  }); 
  const result = await response;
  console.log(" response > ", response);
  // TODO: (douae):
  // - implement this function.
  // - call it from previews.js with user data.
};

// login endpoint
export const login = () => {
  console.log("Log in...");
};

export const getGithubProfiles = () => {
  // TODO: (maryam):
  // - fetch our data from github.
  // - use some github api to accomplish that.
  console.log("git out github profiles...");
};
