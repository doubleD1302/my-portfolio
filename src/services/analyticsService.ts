import { getSupabaseClient, isSupabaseConfigured } from './supabaseClient';

export class AnalyticsService {
  /**
   * Dispatches non-blocking analytics event to Supabase if configured.
   */
  public static trackEvent(eventType: string, metadata: Record<string, unknown> = {}): void {
    if (!isSupabaseConfigured()) {
      return;
    }

    const client = getSupabaseClient();
    if (!client) return;

    // Run asynchronously without waiting or throwing
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
