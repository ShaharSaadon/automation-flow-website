import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { useLanguage } from '../LanguageContext';

const translations = {
  en: {
    navLinks: [
      { label: 'Solutions', href: '#solutions' },
      { label: 'Process', href: '#process' },
      { label: 'Success Stories', href: '#success-stories' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy & Accessibility', href: '/PrivacyPolicy', isPage: true },
    ],
    copyright: '© 2025 Automation Flow. All rights reserved.'
  },
  he: {
    navLinks: [
      { label: 'פתרונות', href: '#solutions' },
      { label: 'תהליך', href: '#process' },
      { label: 'סיפורי הצלחה', href: '#success-stories' },
      { label: 'תמחור', href: '#pricing' },
      { label: 'שאלות נפוצות', href: '#faq' },
      { label: 'צור קשר', href: '#contact' },
      { label: 'פרטיות ונגישות', href: '/PrivacyPolicy', isPage: true },
    ],
    copyright: '© 2025 Automation Flow. כל הזכויות שמורות.'
  }
};

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/automations-flow/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@automationsflow.com', label: 'Email' },
];

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const isRTL = language === 'he';
  
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className="flex items-center gap-2">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/0ba8a7114_logo.png"
              alt="Automation Flow Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Automation Flow
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {t.navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.label}
                  to={createPageUrl('PrivacyPolicy')}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}