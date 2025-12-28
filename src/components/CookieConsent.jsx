import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '../utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const translations = {
  en: {
    title: '🍪 Cookie Time',
    message: 'We use cookies to make your experience smoother, faster, and a little more fun. If you stick around, we\'ll take that as a thumbs-up.',
    learnMore: 'Learn more',
    accept: 'Accept',
    decline: 'Decline'
  },
  he: {
    title: 'Cookies Time 🍪',
    message: 'אנחנו אוספים עוגיות רק כדי לוודא שאתם מקבלים חוויה מהירה, חכמה ומהנה יותר. נשארים איתנו? סימן שאתם בעניין.',
    learnMore: 'למידע נוסף',
    accept: 'כן, לגמרי',
    decline: 'לא כרגע'
  }
};

export default function CookieConsent() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const isRTL = language === 'he';
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShow(false);
    window.location.reload();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50 py-3 px-4 md:px-6"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex-1">
            <h3 className={`font-semibold text-gray-900 mb-1 ${isRTL ? 'text-right' : ''}`}>{t.title}</h3>
            <p className={`text-sm text-gray-600 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {t.message}{' '}
              <a 
                href={createPageUrl('PrivacyPolicy')} 
                className="text-blue-600 hover:text-blue-700 underline"
              >
                {t.learnMore}
              </a>
            </p>
          </div>
          <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="text-sm"
            >
              {t.decline}
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm"
            >
              {t.accept}
            </Button>
          </div>
        </div>
      </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}