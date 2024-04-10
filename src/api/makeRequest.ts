import axios, { AxiosRequestConfig } from "axios";
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const makeRequest = async (config: AxiosRequestConfig) => {
  config.url = `${API_ENDPOINT}${config.url}`;
  
  try {
    return await axios(config);
  } catch (error) {
    console.error(error);
  }
}