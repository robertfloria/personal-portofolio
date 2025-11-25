import axios from 'axios';
import { devConsole } from '../../../packages/shared-utils/src/dev-console';

const NEST_API_URL = process.env.NEST_API_URL || 'http://localhost:4000/api';

export const httpClient = axios.create({
  baseURL: NEST_API_URL,
  timeout: 30_000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: minimal error logging
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    devConsole.error('[Server HTTP Error]', {
      url: error.config?.url,
      status: error.response?.status,
      message: error.message,
    });
    return Promise.reject(error);
  },
);
