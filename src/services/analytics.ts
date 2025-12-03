/**
 * Eclipse Softworks - Analytics & User Experience Service
 * Collects anonymous usage data to improve site experience
 */

// Cookie utility functions
export const cookies = {
  set: (name: string, value: string, days: number = 365): void => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
  },

  get: (name: string): string | null => {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }
    return null;
  },

  remove: (name: string): void => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  },

  exists: (name: string): boolean => {
    return cookies.get(name) !== null;
  }
};

// User preferences interface
export interface UserPreferences {
  theme: 'dark' | 'light' | 'system';
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  lastVisitedSection: string;
  visitCount: number;
  firstVisit: string;
  lastVisit: string;
  preferredContact: 'email' | 'phone' | 'none';
  dismissedBanners: string[];
  viewedPages: string[];
  sessionDuration: number;
}

// Default preferences
const defaultPreferences: UserPreferences = {
  theme: 'dark',
  reducedMotion: false,
  fontSize: 'medium',
  lastVisitedSection: 'home',
  visitCount: 1,
  firstVisit: new Date().toISOString(),
  lastVisit: new Date().toISOString(),
  preferredContact: 'none',
  dismissedBanners: [],
  viewedPages: [],
  sessionDuration: 0
};

// Analytics data interface
export interface AnalyticsData {
  pageViews: Record<string, number>;
  clickEvents: Array<{ element: string; timestamp: string; page: string }>;
  scrollDepth: Record<string, number>;
  timeOnPage: Record<string, number>;
  referrer: string;
  entryPage: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  screenResolution: string;
  browserLanguage: string;
  sessionId: string;
  returningVisitor: boolean;
}

// Generate unique session ID
const generateSessionId = (): string => {
  return `es_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Detect device type
const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// User Experience Service
class UserExperienceService {
  private preferences: UserPreferences;
  private analytics: AnalyticsData;
  private sessionStartTime: number;
  private isConsented: boolean;
  private scrollTracking: Map<string, number> = new Map();

  constructor() {
    this.isConsented = this.checkConsent();
    this.preferences = this.loadPreferences();
    this.analytics = this.initAnalytics();
    this.sessionStartTime = Date.now();

    if (this.isConsented) {
      this.initTracking();
    }
  }

  // Check if user has consented to cookies
  private checkConsent(): boolean {
    return localStorage.getItem('cookie-consent') === 'accepted';
  }

  // Load preferences from cookies/localStorage
  private loadPreferences(): UserPreferences {
    try {
      const stored = localStorage.getItem('eclipse-preferences');
      if (stored) {
        const prefs = JSON.parse(stored) as UserPreferences;
        prefs.visitCount += 1;
        prefs.lastVisit = new Date().toISOString();
        return prefs;
      }
    } catch (e) {
      console.warn('Failed to load preferences:', e);
    }
    return { ...defaultPreferences };
  }

  // Initialize analytics data
  private initAnalytics(): AnalyticsData {
    const existingSession = cookies.get('eclipse-session');
    const isReturning = cookies.exists('eclipse-visitor');

    if (!cookies.exists('eclipse-visitor')) {
      cookies.set('eclipse-visitor', 'true', 365);
    }

    return {
      pageViews: {},
      clickEvents: [],
      scrollDepth: {},
      timeOnPage: {},
      referrer: document.referrer || 'direct',
      entryPage: window.location.pathname,
      deviceType: getDeviceType(),
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      browserLanguage: navigator.language,
      sessionId: existingSession || generateSessionId(),
      returningVisitor: isReturning
    };
  }

  // Initialize tracking listeners
  private initTracking(): void {
    // Track page views
    this.trackPageView(window.location.pathname);

    // Track scroll depth
    window.addEventListener('scroll', this.throttle(() => {
      this.trackScrollDepth();
    }, 1000));

    // Track clicks on important elements
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const trackable = target.closest('[data-track]');
      if (trackable) {
        this.trackClick(trackable.getAttribute('data-track') || 'unknown');
      }
    });

    // Track time on page before leaving
    window.addEventListener('beforeunload', () => {
      this.saveSessionData();
    });

    // Track visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.saveSessionData();
      }
    });

    // Set session cookie
    cookies.set('eclipse-session', this.analytics.sessionId, 1 / 24); // 1 hour session
  }

  // Throttle function for scroll tracking
  private throttle<T extends (...args: unknown[]) => void>(func: T, limit: number): T {
    let inThrottle: boolean;
    return ((...args: unknown[]) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    }) as T;
  }

  // Track page view
  trackPageView(page: string): void {
    if (!this.isConsented) return;

    this.analytics.pageViews[page] = (this.analytics.pageViews[page] || 0) + 1;
    
    if (!this.preferences.viewedPages.includes(page)) {
      this.preferences.viewedPages.push(page);
    }
    
    this.preferences.lastVisitedSection = page.replace('/', '') || 'home';
    this.savePreferences();

    // Send to analytics endpoint (if configured)
    this.sendAnalytics('pageview', { page });
  }

  // Track scroll depth
  private trackScrollDepth(): void {
    if (!this.isConsented) return;

    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const depth = Math.round((scrolled / scrollHeight) * 100);
    const page = window.location.pathname;

    const currentDepth = this.scrollTracking.get(page) || 0;
    if (depth > currentDepth) {
      this.scrollTracking.set(page, depth);
      this.analytics.scrollDepth[page] = depth;
    }
  }

  // Track click events
  trackClick(element: string): void {
    if (!this.isConsented) return;

    this.analytics.clickEvents.push({
      element,
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    });

    // Limit stored clicks to last 50
    if (this.analytics.clickEvents.length > 50) {
      this.analytics.clickEvents = this.analytics.clickEvents.slice(-50);
    }

    this.sendAnalytics('click', { element });
  }

  // Track custom events
  trackEvent(category: string, action: string, label?: string, value?: number): void {
    if (!this.isConsented) return;

    this.sendAnalytics('event', { category, action, label, value });
  }

  // Send analytics data
  private sendAnalytics(type: string, data: Record<string, unknown>): void {
    // Google Analytics 4
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
      
      if (type === 'pageview') {
        gtag?.('event', 'page_view', {
          page_path: data.page,
          page_title: document.title
        });
      } else if (type === 'event') {
        gtag?.('event', data.action as string, {
          event_category: data.category,
          event_label: data.label,
          value: data.value
        });
      } else if (type === 'click') {
        gtag?.('event', 'click', {
          event_category: 'engagement',
          event_label: data.element
        });
      }
    }

    // Could also send to custom analytics endpoint
    // this.sendToCustomEndpoint(type, data);
  }

  // Save session data
  private saveSessionData(): void {
    const sessionDuration = Math.round((Date.now() - this.sessionStartTime) / 1000);
    this.preferences.sessionDuration += sessionDuration;
    this.savePreferences();

    // Save time on current page
    const currentPage = window.location.pathname;
    this.analytics.timeOnPage[currentPage] = 
      (this.analytics.timeOnPage[currentPage] || 0) + sessionDuration;
  }

  // Get user preferences
  getPreferences(): UserPreferences {
    return { ...this.preferences };
  }

  // Update preferences
  updatePreferences(updates: Partial<UserPreferences>): void {
    this.preferences = { ...this.preferences, ...updates };
    this.savePreferences();
  }

  // Save preferences to localStorage
  private savePreferences(): void {
    if (!this.isConsented) return;
    
    try {
      localStorage.setItem('eclipse-preferences', JSON.stringify(this.preferences));
    } catch (e) {
      console.warn('Failed to save preferences:', e);
    }
  }

  // Dismiss a banner/notification
  dismissBanner(bannerId: string): void {
    if (!this.preferences.dismissedBanners.includes(bannerId)) {
      this.preferences.dismissedBanners.push(bannerId);
      this.savePreferences();
    }
  }

  // Check if banner is dismissed
  isBannerDismissed(bannerId: string): boolean {
    return this.preferences.dismissedBanners.includes(bannerId);
  }

  // Get personalized recommendations
  getRecommendations(): string[] {
    const recommendations: string[] = [];
    const viewedPages = this.preferences.viewedPages;

    // If they've viewed services but not contact, suggest contact
    if (viewedPages.includes('/services') && !viewedPages.includes('/contact')) {
      recommendations.push('Ready to discuss your project? Contact us!');
    }

    // If they've viewed projects, suggest downloads
    if (viewedPages.includes('/projects') && !viewedPages.includes('/downloads')) {
      recommendations.push('Check out our open source tools');
    }

    // If returning visitor, personalize greeting
    if (this.analytics.returningVisitor && this.preferences.visitCount > 2) {
      recommendations.push('Welcome back! See what\'s new');
    }

    return recommendations;
  }

  // Get visit statistics
  getVisitStats(): { visits: number; firstVisit: string; lastSection: string } {
    return {
      visits: this.preferences.visitCount,
      firstVisit: this.preferences.firstVisit,
      lastSection: this.preferences.lastVisitedSection
    };
  }

  // Check if user prefers reduced motion
  prefersReducedMotion(): boolean {
    if (this.preferences.reducedMotion) return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // Update consent status
  updateConsent(consented: boolean): void {
    this.isConsented = consented;
    if (consented) {
      this.initTracking();
    } else {
      // Clear all cookies and data
      cookies.remove('eclipse-session');
      cookies.remove('eclipse-visitor');
      localStorage.removeItem('eclipse-preferences');
    }
  }

  // Get analytics summary (for internal use)
  getAnalyticsSummary(): {
    totalPageViews: number;
    mostViewedPage: string;
    avgScrollDepth: number;
    deviceType: string;
  } {
    const totalPageViews = Object.values(this.analytics.pageViews).reduce((a, b) => a + b, 0);
    const mostViewedPage = Object.entries(this.analytics.pageViews)
      .sort(([, a], [, b]) => b - a)[0]?.[0] || '/';
    const scrollDepths = Object.values(this.analytics.scrollDepth);
    const avgScrollDepth = scrollDepths.length 
      ? Math.round(scrollDepths.reduce((a, b) => a + b, 0) / scrollDepths.length)
      : 0;

    return {
      totalPageViews,
      mostViewedPage,
      avgScrollDepth,
      deviceType: this.analytics.deviceType
    };
  }
}

// Singleton instance
let uxServiceInstance: UserExperienceService | null = null;

export const getUXService = (): UserExperienceService => {
  if (!uxServiceInstance && typeof window !== 'undefined') {
    uxServiceInstance = new UserExperienceService();
  }
  return uxServiceInstance!;
};

// React hook for using the service
export const useAnalytics = () => {
  const service = getUXService();
  
  return {
    trackPageView: (page: string) => service?.trackPageView(page),
    trackClick: (element: string) => service?.trackClick(element),
    trackEvent: (category: string, action: string, label?: string, value?: number) => 
      service?.trackEvent(category, action, label, value),
    getPreferences: () => service?.getPreferences(),
    updatePreferences: (updates: Partial<UserPreferences>) => service?.updatePreferences(updates),
    dismissBanner: (id: string) => service?.dismissBanner(id),
    isBannerDismissed: (id: string) => service?.isBannerDismissed(id),
    getRecommendations: () => service?.getRecommendations() || [],
    prefersReducedMotion: () => service?.prefersReducedMotion() || false,
  };
};

export default UserExperienceService;
