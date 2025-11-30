/* eslint-disable @typescript-eslint/no-explicit-any */
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// MVP IntersectionObserver polyfill for tests (jsdom doesn't provide it)
if (typeof global.IntersectionObserver === 'undefined') {
  // @ts-ignore - augment the global in test environment
  global.IntersectionObserver = class {
    readonly root: Element | null;
    readonly rootMargin: string;
    readonly thresholds: number | number[];
    constructor() {
      this.root = null;
      this.rootMargin = '';
      this.thresholds = 0;
    }
    observe() { return null; }
    unobserve() { return null; }
    disconnect() { return null; }
    takeRecords() { return []; }
  } as any;
}

// Vitest/JSDOM doesn't provide IntersectionObserver - mock it for framer-motion components
class IntersectionObserverMock {
  callback: any;
  constructor(cb: any) {
    this.callback = cb;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}
(globalThis as any).IntersectionObserver = (globalThis as any).IntersectionObserver || IntersectionObserverMock;