import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

// Create axios instance
export const httpClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Manage auth token centrally (client-only)
export function setAuthToken(token: string | null) {
  if (token) {
    httpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete httpClient.defaults.headers.common.Authorization;
  }
}

// Request interceptor
httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Authentication header should be set via `setAuthToken` on the client.
    // Log request in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[HTTP Request] ${config.method?.toUpperCase()} ${config.url}`, {
        data: config.data,
        params: config.params,
      });
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
httpClient.interceptors.response.use(
  (response) => {
    // Log response in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[HTTP Response] ${response.config.url}`, response.data);
    }
    return response;
  },
  (error: AxiosError) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with error
      const status = error.response.status;
      const message = (error.response.data as any)?.message || error.message;

      if (status === 401) {
        // Unauthorized - clear auth. Use central helper to remove Authorization header.
        try {
          // safe to call on client only
          if (typeof window !== 'undefined') {
            setAuthToken(null);
          }
        } catch (e) {
          // noop
        }
      } else if (status === 403) {
        console.error('[HTTP Error] Forbidden:', message);
      } else if (status >= 500) {
        console.error('[HTTP Error] Server error:', message);
      }

      if (process.env.NODE_ENV === 'development') {
        console.error(`[HTTP Error] ${error.config?.method?.toUpperCase()} ${error.config?.url}`, {
          status,
          message,
          data: error.response.data,
        });
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('[HTTP Error] No response received:', error.message);
    } else {
      // Something else happened
      console.error('[HTTP Error]:', error.message);
    }

    return Promise.reject(error);
  },
);

// API service helpers
export const api = {
  get: <T = any>(url: string, config = {}) => httpClient.get<T>(url, config),

  post: <T = any>(url: string, data?: any, config = {}) => httpClient.post<T>(url, data, config),

  put: <T = any>(url: string, data?: any, config = {}) => httpClient.put<T>(url, data, config),

  patch: <T = any>(url: string, data?: any, config = {}) => httpClient.patch<T>(url, data, config),

  delete: <T = any>(url: string, config = {}) => httpClient.delete<T>(url, config),
};

export default httpClient;
