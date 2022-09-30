export const getEnvVariables = () => {
  return {
    VITE_MODE: import.meta.env.VITE_MODE,
    VITE_SERVICE_ID: import.meta.env.VITE_SERVICE_ID,
    VITE_PUBLIC_KEY: import.meta.env.VITE_PUBLIC_KEY,
    VITE_TEMPLATE_ID: import.meta.env.VITE_TEMPLATE_ID
  }
}
