import { ContactMessage } from '../types';
import { getSupabaseClient, isSupabaseConfigured } from './supabaseClient';

export interface SubmitResult {
  success: boolean;
  message: string;
  isMock?: boolean;
}

export class ContactService {
  private static lastSubmissionTime = 0;

  public static async submitMessage(payload: ContactMessage): Promise<SubmitResult> {
    // chong spam
    const now = Date.now();
    if (now - this.lastSubmissionTime < 5000) {
      return {
        success: false,
        message: 'Please wait a few seconds before sending another message.'
      };
    }

    // validate form
    if (!payload.name || payload.name.trim().length < 2) {
      return { success: false, message: 'Please provide a valid name (at least 2 characters).' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!payload.email || !emailRegex.test(payload.email.trim())) {
      return { success: false, message: 'Please enter a valid email address.' };
    }

    if (!payload.subject || payload.subject.trim().length < 3) {
      return { success: false, message: 'Please provide a subject line (at least 3 characters).' };
    }

    if (!payload.message || payload.message.trim().length < 10) {
      return { success: false, message: 'Message must be at least 10 characters long.' };
    }

    this.lastSubmissionTime = now;

    // luu vao supabase
    if (isSupabaseConfigured()) {
      const client = getSupabaseClient();
      if (client) {
        try {
          const { error } = await client.from('contact_messages').insert([
            {
              name: payload.name.trim(),
              email: payload.email.trim(),
              subject: payload.subject.trim(),
              message: payload.message.trim(),
              status: 'unread'
            }
          ]);

          if (error) {
            console.error('Supabase contact submission error:', error);
            return {
              success: false,
              message: `Could not save message to database: ${error.message}`
            };
          }

          return {
            success: true,
            message: 'Thank you! Your message has been safely received and stored in Supabase.'
          };
        } catch (err) {
          console.error('Network error during Supabase contact submission:', err);
          return {
            success: false,
            message: 'A network error occurred while transmitting your message.'
          };
        }
      }
    }

    // fallback neu chua co key
    await new Promise(resolve => setTimeout(resolve, 600));
    console.info('[Contact Form Fallback] Recorded message locally:', payload);

    return {
      success: true,
      isMock: true,
      message: 'Thank you! Your message has been sent successfully. (Demo mode: Supabase keys not set).'
    };
  }
}
