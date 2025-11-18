// dev-console.ts
// Utility to log only in development mode

const isDev = process.env.NODE_ENV === 'development';

export const devConsole = {
  log: (...args: any[]) => {
    if (isDev) console.log(...args);
  },
  warn: (...args: any[]) => {
    if (isDev) console.warn(...args);
  },
  error: (...args: any[]) => {
    if (isDev) console.error(...args);
  },
};