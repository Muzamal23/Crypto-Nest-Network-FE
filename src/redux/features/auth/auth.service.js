import api from "../API";

// Get Token
const getToken = async (finalData) => {
  const response = await api.post("/Account/GetToken", finalData);
  return response.data;
};

// Get User Info
const getUserInfo = async (data) => {
  const response = await api.get("/Account/GetUserInfo", {
    headers: {
      Authorization: `Bearer ${data?.access_token}`,
    },
  });
  return response.data;
};

// SignUp With Email
const signupWithEmail = async (saveData) => {
  const response = await api.post(`/Account/SignupWithEmail`, saveData);
  return response.data;
};

// Users Listing
const userListing = async (saveData) => {
  const response = await api.post(`Account/UserListing`, saveData);
  return response.data;
};

const authService = {
  getToken,
  getUserInfo,
  signupWithEmail,
  userListing,
};

export default authService;
