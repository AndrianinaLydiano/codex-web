import axios from 'axios';
import { toast } from 'sonner';
import { supabase } from './supabaseClient';

const baseURL =
  import.meta.env.VITE_USE_FAKE_API === 'true'
    ? 'https://example.com'
    : import.meta.env.VITE_API_BASE_URL;

export const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.request.use(async (config) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session?.access_token) {
    config.headers = config.headers ?? {};
    (config.headers as Record<string, string>).Authorization =
      `Bearer ${session.access_token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message;
    toast.error(message);
    return Promise.reject(error);
  },
);
