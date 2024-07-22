import axios from "axios";

const API_URL = "http://localhost:8080/api/";

export const signIn = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/sign-in`, credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const getUserInfo = async () => {
  const response = await axios.get(`${API_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
