import Axios, { AxiosRequestConfig } from "axios";

const API_URL = "https://test.ondigitalocean.app/";

export const baseURL = process.env.REACT_APP_RIBON_API || API_URL;
export const API_SCOPE = "/api/v1";

const api = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status >= 200 && status < 300,
});


export function apiGet(url: string, config?: AxiosRequestConfig) {
  if (config) return api.get(`${API_SCOPE}/${url}`, config);

  return api.get(`${API_SCOPE}/${url}`);
}

export function apiPost(url: string, data: any, config?: AxiosRequestConfig) {
  if (config) return api.post(`${API_SCOPE}/${url}`, data, config);

  return api.post(`${API_SCOPE}/${url}`, data);
}

export function apiPut(url: string, data: any, config?: AxiosRequestConfig) {
  if (config) return api.put(`${API_SCOPE}/${url}`, data, config);

  return api.put(`${API_SCOPE}/${url}`, data);
}

export function apiDelete(url: string, config?: AxiosRequestConfig) {
  if (config) return api.delete(`${API_SCOPE}/${url}`, config);

  return api.delete(`${API_SCOPE}/${url}`);
}

export default api;
