import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../LanguageContext';

const translations = {
  en: {
    navLinks: [
      { label: 'Solutions', href: '#solutions' },
      { label: 'Process', href: '#process' },
      { label: 'Success Stories', href: '#success-stories' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: 'Talk with us'
  },
  he: {
    navLinks: [
      { label: 'פתרונות', href: '#solutions' },
      { label: 'תהליך', href: '#process' },
      { label: 'סיפורי הצלחה', href: '#success-stories' },
      { label: 'תמחור', href: '#pricing' },
      { label: 'שאלות נפוצות', href: '#faq' },
    ],
    cta: 'דברו איתנו'
  }
};

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const t = translations[language] || translations.en;
  const navLinks = t.navLinks;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
      dir={language === 'he' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/0ba8a7114_logo.png"
              alt="Automation Flow Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Automation Flow
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {language === 'en' ? (
                  <img src="https://flagcdn.com/w40/us.png" alt="English" className="w-6 h-4 object-cover rounded" />
                ) : (
                  <img src="https://flagcdn.com/w40/il.png" alt="עברית" className="w-6 h-4 object-cover rounded" />
                )}
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[120px]">
                  <button
                    onClick={() => {
                      toggleLanguage(language === 'en' ? 'he' : 'en');
                      setIsLangMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    {language === 'en' ? (
                      <>
                        <img src="https://flagcdn.com/w40/il.png" alt="עברית" className="w-6 h-4 object-cover rounded" />
                        <span>עברית</span>
                      </>
                    ) : (
                      <>
                        <img src="https://flagcdn.com/w40/us.png" alt="English" className="w-6 h-4 object-cover rounded" />
                        <span>English</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 shadow-lg shadow-green-500/25 transition-all hover:shadow-xl hover:shadow-green-500/30"
              asChild
            >
              <a href="https://wa.me/972559958398" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
                {t.cta}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Language Selector */}
            <button
              onClick={() => {
                toggleLanguage(language === 'en' ? 'he' : 'en');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {language === 'en' ? (
                <>
                  <img src="https://flagcdn.com/w40/il.png" alt="עברית" className="w-6 h-4 object-cover rounded" />
                  <span>עברית</span>
                </>
              ) : (
                <>
                  <img src="https://flagcdn.com/w40/us.png" alt="English" className="w-6 h-4 object-cover rounded" />
                  <span>English</span>
                </>
              )}
            </button>
            
            <Button
              className="w-full rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white mt-4"
              asChild
            >
              <a href="https://wa.me/972559958398" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
                {t.cta}
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}