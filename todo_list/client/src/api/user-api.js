import { data } from "react-router";
import { getData, postData, deleteData } from "../lib/fetcher.js";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const signin = async (data) => {
  const response = await postData(`${BASE_URL}/users/login`, data, true);

  return response;
};

export const signup = async (data) => {
  const response = await postData(`${BASE_URL}/users/signup`, data, true);
  return response;
};

export const logout = async (data) => {
  const response = await postData(`${BASE_URL}/users/logout`, undefined, true);
  return response;
};
