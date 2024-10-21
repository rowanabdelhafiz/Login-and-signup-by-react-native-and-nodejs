// api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your server's URL if not local

export const signup = async (userData) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/signup`, userData);
    return response.data; // Return the response data
  } catch (error) {
    console.error("Signup error:", error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : { message: "An unknown error occurred." }; // Handle error
  }
};


export const login = async (userData) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/login`, userData);
    return response.data; // Return the response data
  } catch (error) {
    throw error.response.data; // Handle error
  }
};
