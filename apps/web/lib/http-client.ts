/**
 * apiClient
 *
 * Wrapper Axios pentru comunicarea cu API-ul NestJS.
 * - Configurează instanța cu URL, timeout și header x-api-key.
 * - Interceptor pentru logarea erorilor cu devConsole.
 * - Metode: get, post, put, delete, getArrayBuffer (pentru fișiere/bufere).
 * - Returnează direct datele din răspuns (res.data).
 *
 * @example
 * const data = await apiClient.get('/endpoint');
 * const result = await apiClient.post('/endpoint', payload);
 */
import { devConsole } from '@portfolio/shared-utils/src/dev-console';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const NEST_API_URL = process.env.NEST_API_URL || 'http://localhost:4000/api';
const API_SECRET = process.env.API_SECRET || ''; 

const apiClientInstance: AxiosInstance = axios.create({
  baseURL: NEST_API_URL,
  timeout: 30_000,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_SECRET, 
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
  },
);

export const apiClient = {
  get: <R = unknown>(url: string, config?: AxiosRequestConfig): Promise<R> =>
    apiClientInstance.get<R>(url, config).then((res) => res.data),

  post: <T, R = unknown>(url: string, data: T, config?: AxiosRequestConfig): Promise<R> =>
    apiClientInstance.post<R>(url, data, config).then((res) => res.data),

  put: <T, R = unknown>(url: string, data: T, config?: AxiosRequestConfig): Promise<R> =>
    apiClientInstance.put<R>(url, data, config).then((res) => res.data),

  delete: <R = unknown>(url: string, config?: AxiosRequestConfig): Promise<R> =>
    apiClientInstance.delete<R>(url, config).then((res) => res.data),

  getArrayBuffer: <R = unknown>(url: string, config?: AxiosRequestConfig): Promise<R> =>
    apiClientInstance
      .get<R>(url, { ...config, responseType: 'arraybuffer' })
      .then((res) => res.data),
};
