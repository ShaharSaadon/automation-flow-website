import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import env from '@/lib/env';

/**
 * SEOHead component for managing dynamic meta tags
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - SEO keywords (comma-separated)
 * @param {string} props.ogTitle - Open Graph title (defaults to title)
 * @param {string} props.ogDescription - Open Graph description (defaults to description)
 * @param {string} props.ogImage - Open Graph image URL
 * @param {string} props.ogType - Open Graph type (default: 'website')
 * @param {string} props.twitterCard - Twitter card type (default: 'summary_large_image')
 * @param {string} props.canonicalUrl - Canonical URL (auto-generated if not provided)
 * @param {string} props.lang - Page language (default: 'en')
 */
export default function SEOHead({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = '/images/og-image.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  lang = 'en'
}) {
  const location = useLocation();
  const baseUrl = env.siteUrl;
  const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (property, content, isProperty = false) => {
      if (!content) return;

      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Update link tags
    const updateLinkTag = (rel, href) => {
      if (!href) return;

      let element = document.querySelector(`link[rel="${rel}"]`);

      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }

      element.setAttribute('href', href);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph meta tags
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:image', ogImage ? `${baseUrl}${ogImage}` : null, true);
    updateMetaTag('og:locale', lang === 'he' ? 'he_IL' : 'en_US', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);
    updateMetaTag('twitter:image', ogImage ? `${baseUrl}${ogImage}` : null);

    // Canonical URL
    updateLinkTag('canonical', fullUrl);

    // Language and direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';

    // Cleanup function (optional - meta tags typically stay)
    return () => {
      // We don't remove meta tags on unmount as they should persist
      // until replaced by the next page
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, twitterCard, canonicalUrl, lang, fullUrl]);

  return null; // This component doesn't render anything
}
