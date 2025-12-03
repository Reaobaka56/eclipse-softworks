import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

// Route to readable label mapping
const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/solutions': 'Solutions',
  '/projects': 'Projects',
  '/team': 'Team',
  '/downloads': 'Downloads',
  '/contact': 'Contact',
  '/docs': 'Documentation',
  '/blog': 'Blog',
  '/status': 'System Status',
  '/changelog': 'Changelog',
  '/security': 'Security',
  '/careers': 'Careers',
  '/case-studies': 'Case Studies',
  '/press': 'Press Kit',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from current path if items not provided
  const breadcrumbItems = items || (() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const generatedItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];
    
    let currentPath = '';
    for (const segment of pathSegments) {
      currentPath += `/${segment}`;
      const label = routeLabels[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      generatedItems.push({ label, href: currentPath });
    }
    
    // Last item should not have href (current page)
    if (generatedItems.length > 1) {
      delete generatedItems[generatedItems.length - 1].href;
    }
    
    return generatedItems;
  })();

  // Don't render if only home
  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center text-sm ${className}`}
    >
      <ol className="flex items-center gap-1 flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
        {breadcrumbItems.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <ChevronRight size={14} className="mx-1 text-gray-600" aria-hidden="true" />
            )}
            {item.href ? (
              <Link
                to={item.href}
                itemProp="item"
                className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
              >
                {index === 0 && <Home size={14} aria-hidden="true" />}
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span 
                className="text-gray-300 font-medium"
                itemProp="name"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
