const IS_PROD_ENV = true;

const DEV_API_URL = 'http://localhost:8080';
const PROD_API_URL = 'https://api.gestion-notes.com';

const API_URL = IS_PROD_ENV ? PROD_API_URL : DEV_API_URL;

export const environment = {
  production: IS_PROD_ENV,
  apiBaseUrl: '/api',
  apiUrl: API_URL,
} as const;
