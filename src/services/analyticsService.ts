import { getSupabaseClient, isSupabaseConfigured } from './supabaseClient';

export class AnalyticsService {
  public static trackEvent(eventType: string, metadata: Record<string, unknown> = {}): void {
    if (!isSupabaseConfigured()) {
      return;
    }

    const client = getSupabaseClient();
    if (!client) return;

    Promise.resolve(
      client.from('analytics_events').insert([
        {
          event_type: eventType,
          page_path: window.location.pathname + window.location.hash,
          metadata: {
            ...metadata,
            userAgent: navigator.userAgent,
            screenResolution: `${window.innerWidth}x${window.innerHeight}`,
            timestamp: new Date().toISOString()
          }
        }
      ])
    ).catch(() => {
      // Ignore background analytics network interruptions
    });
  }
}
