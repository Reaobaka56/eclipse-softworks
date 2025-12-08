<div align="center">
<img width="4205" height="3960" alt="Eclipse Logo " src="https://github.com/user-attachments/assets/160eac42-82d0-4bca-90b9-0459bd77b4e6" />
</div>

# Eclipse Softworks — Enterprise-Grade Business Website

[![CI/CD](https://github.com/Reaobaka56/eclipse-softworks/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/Reaobaka56/eclipse-softworks/actions/workflows/ci-cd.yml)
[![codecov](https://codecov.io/gh/Reaobaka56/eclipse-softworks/branch/main/graph/badge.svg)](https://codecov.io/gh/Reaobaka56/eclipse-softworks)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-90%2B-brightgreen)](https://developers.google.com/web/tools/lighthouse)

A modern, enterprise-grade corporate website for Eclipse Softworks — an AI and software engineering startup based in South Africa. Built with cutting-edge technologies and following industry best practices for performance, accessibility, security, and maintainability.

## 🚀 Features

- **Enterprise Performance**: Optimized bundle splitting, lazy loading, and caching strategies
- **Accessibility First**: WCAG 2.1 AA compliant with comprehensive screen reader support
- **Security Hardened**: Content Security Policy, secure headers, and input validation
- **SEO Optimized**: Structured data, comprehensive meta tags, and sitemap
- **Modern UX**: Glass morphism design, smooth animations, and responsive layouts
- **Type-Safe**: Full TypeScript coverage with strict type checking
- **Tested**: Comprehensive test suite with 90%+ code coverage
- **CI/CD Ready**: Automated testing, building, and deployment pipelines

## 🛠 Tech Stack

### Core Technologies
- **React 19** - Modern React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework

### Enterprise Features
- **ESLint + Prettier** - Code quality and formatting
- **Vitest** - Fast unit testing framework
- **Testing Library** - Component testing utilities
- **Sentry** - Error monitoring and reporting
- **React Helmet Async** - Dynamic meta tag management
- **React Router** - Client-side routing
- **Intersection Observer** - Performance-optimized animations

### 3D & Visual Effects
- **Three.js** - 3D graphics and animations
- **@react-three/fiber** - React renderer for Three.js
- **Font Awesome** - Icon library

## 📦 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Reaobaka56/eclipse-softworks.git
   cd eclipse-softworks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🧪 Development Workflow

### Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build           # Production build
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run format          # Format code with Prettier
npm run type-check      # TypeScript type checking

# Testing
npm run test            # Run tests
npm run test:ui         # Run tests with UI
npm run test:coverage   # Run tests with coverage

# Analysis
npm run build:analyze   # Bundle analyzer
```

### Code Quality Standards

- **ESLint**: Airbnb config with TypeScript support
- **Prettier**: Consistent code formatting
- **TypeScript**: Strict mode enabled
- **Testing**: 90%+ code coverage required
- **Accessibility**: WCAG 2.1 AA compliance

## 🚀 Deployment

### Automated CI/CD

The project includes GitHub Actions for automated:
- Testing (unit, integration, e2e)
- Code quality checks
- Performance monitoring
- Security scanning
- Automated deployment

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy to Netlify/Vercel
# Connect your GitHub repo and set:
# Build command: npm run build
# Publish directory: dist
```

### Environment Variables

Create a `.env.local` file for local development:

```env
# Formspree or custom contact endpoint
VITE_CONTACT_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Analytics (optional)
VITE_GA_TRACKING_ID=GA_MEASUREMENT_ID

# Sentry DSN (optional)
VITE_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
```

## 🔒 Security

### Content Security Policy
- Strict CSP headers implemented
- XSS protection enabled
- Secure external resource loading

### Data Protection
- GDPR compliant contact form
- Secure form submission
- Privacy policy and terms included

### Infrastructure Security
- HTTPS enforcement
- Secure headers configuration
- Regular dependency updates

## 📊 Performance

### Core Web Vitals
- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Optimizations
- Code splitting and lazy loading
- Image optimization and WebP support
- Bundle analysis and tree shaking
- Critical CSS inlining
- Service worker for caching

## ♿ Accessibility

### Standards Compliance
- **WCAG 2.1 AA** certified
- **Section 508** compliant
- Full keyboard navigation support
- Screen reader optimized

### Features
- Semantic HTML structure
- ARIA labels and descriptions
- Focus management
- Color contrast ratios > 4.5:1
- Reduced motion support

## 🔍 SEO & Analytics

### Search Engine Optimization
- Comprehensive meta tags
- Structured data (JSON-LD)
- XML sitemap generation
- Robots.txt configuration
- Open Graph and Twitter Cards

### Analytics Integration
- Google Analytics 4 support
- Performance monitoring
- User behavior tracking
- Conversion funnel analysis

## 🧪 Testing Strategy

### Test Coverage
- **Unit Tests**: Component logic and utilities
- **Integration Tests**: Component interactions
- **E2E Tests**: Critical user journeys
- **Accessibility Tests**: Automated a11y checks
- **Performance Tests**: Lighthouse CI

### Testing Stack
- **Vitest**: Fast test runner
- **Testing Library**: Component testing utilities
- **Playwright**: E2E testing (future)
- **Lighthouse CI**: Performance monitoring

## 📚 Documentation

### API Documentation
- Component prop interfaces
- Service function signatures
- TypeScript definitions

### Development Guide
- Contributing guidelines
- Code review checklist
- Deployment procedures

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Standards
- Follow conventional commits
- Write tests for new features
- Update documentation
- Ensure accessibility compliance
- Maintain code coverage > 90%

## 📄 License

This project is proprietary software owned by Eclipse Softworks.

## 👥 Team

- **Moon Khumalo** - Founder & CEO
- **Reaobaka Mogajane** - Lead Developer

## 📞 Support

For support or inquiries:
- Email: info@eclipse-softworks.com
- Website: [eclipse-softworks.com](https://www.eclipse-softworks.com)

---

**Built with ❤️ in South Africa for the world**

