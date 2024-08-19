import axios from "axios";

const BASE_URL = "http://localhost:3002/api/v1/user";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createUser = async (user) => {
  try {
    const response = await apiClient.post("/create", user);
    return response.data;
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error;
  }
};
