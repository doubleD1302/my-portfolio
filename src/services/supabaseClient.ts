import { createClient, SupabaseClient } from '@supabase/supabase-js';

const rawUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim();
const supabaseUrl = rawUrl ? rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '') : '';
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim();

let client: SupabaseClient | null = null;

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith('http') &&
    !supabaseUrl.includes('your-project') &&
    supabaseAnonKey.length > 20
  );
};

export const getSupabaseClient = (): SupabaseClient | null => {
  if (!isSupabaseConfigured()) {
    return null;
  }

  if (!client && supabaseUrl && supabaseAnonKey) {
    try {
      client = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false
        }
      });
    } catch (e) {
      console.warn('Could not initialize Supabase client:', e);
      return null;
    }
  }

  return client;
};
