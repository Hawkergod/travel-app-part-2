const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getIsLoading = (state) => state.auth.isLoading;
const getToken = (state) => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsLoading,
  getToken,
};
export default authSelectors;
