import axios, { AxiosRequestConfig } from "axios";
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const token = process.env.REACT_APP_TOKEN;

export const makeRequest = async (config: AxiosRequestConfig) => {
  config.url = `${API_ENDPOINT}${config.url}`;
  config.headers = {
    'X-API-KEY': `${token}`,
    "Content-Type": "Application/json"
  };
  
  try {
    return await axios(config);
  } catch (error) {
    throw error;
  }
}