// /lib/apiClient.ts
import { devConsole } from '@portfolio/shared-utils/src/dev-console';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const NEST_API_URL = process.env.NEST_API_URL || 'http://localhost:4000/api';
const API_SECRET = process.env.API_SECRET || ''; // Keep secret (no NEXT_PUBLIC)

const apiClientInstance: AxiosInstance = axios.create({
  baseURL: NEST_API_URL,
  timeout: 30_000,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_SECRET, // Secure header
  },
});

apiClientInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    devConsole.error('[Nest API Error]', {
      url: error.config?.url,
      status: error.response?.status,
      message: error.message,
      data: error.response?.data,
    });
    return Promise.reject(error);
  }
);

export const apiClient = {
  get: <R = any>(url: string, config?: AxiosRequestConfig): Promise<R> =>
    apiClientInstance.get<R>(url, config).then((res) => res.data),

  post: <T, R = any>(url: string, data: T, config?: AxiosRequestConfig): Promise<R> =>
    apiClientInstance.post<R>(url, data, config).then((res) => res.data),

  put: <T, R = any>(url: string, data: T, config?: AxiosRequestConfig): Promise<R> =>
    apiClientInstance.put<R>(url, data, config).then((res) => res.data),

  delete: <R = any>(url: string, config?: AxiosRequestConfig): Promise<R> =>
    apiClientInstance.delete<R>(url, config).then((res) => res.data),

  getArrayBuffer: <R = any>(url: string, config?: AxiosRequestConfig): Promise<R> =>
    apiClientInstance.get<R>(url, { ...config, responseType: 'arraybuffer' }).then((res) => res.data),
};
