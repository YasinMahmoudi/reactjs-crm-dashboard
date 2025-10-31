const devMode = import.meta.env.VITE_REACT_ENV;

export const API_URL =
  devMode === 'Development'
    ? import.meta.env.VITE_API_URL_DEV
    : import.meta.env.VITE_API_URL_PROD;

export const UPLOAD_URL =
  devMode === 'Development'
    ? import.meta.env.VITE_UPLOAD_URL_DEV
    : import.meta.env.VITE_UPLOAD_URL_PROD;

export const DOWNLOAD_BASE_URL =
  devMode === 'Development'
    ? import.meta.env.VITE_DOWNLOAD_BASE_URL_DEV
    : import.meta.env.VITE_DOWNLOAD_BASE_URL_PROD;
