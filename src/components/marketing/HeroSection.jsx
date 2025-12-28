import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../LanguageContext';

const translations = {
  en: {
    title1: 'Automate your workflow with AI,',
    title2: 'amplify your results',
    subtitle: 'Seamless AI and automation solutions to scale your business efficiently',
    button: 'Book a free consultation',
    subtext: 'Schedule a free 30-min consultation to see how we can help'
  },
  he: {
    title1: 'הטמיעו אוטומציה חכמה עם AI',
    title2: 'ושדרגו את תוצאות העסק.',
    subtitle: 'פתרונות אוטומציה ובינה מלאכותית שיעזרו לעסק שלכם לצמוח בקלות וביעילות.',
    button: 'לשיחת יעוץ חינם',
    subtext: 'קבעו שיחת יעוץ חינם של 30 דק׳ להבין איך אנחנו יכולים לעזור'
  }
};

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const isRTL = language === 'he';

  const handleBooking = () => {
    window.open('https://calendar.app.google/gWZpQiCnDu9vfGiu8', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/30 to-white">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6 text-center">
            {t.title1}{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
            {t.subtitle}
          </p>
          
          <div className="flex flex-col items-center gap-3">
            <Button
              onClick={handleBooking}
              className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg shadow-xl shadow-purple-500/25 transition-all hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105"
            >
              <Calendar className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t.button}
            </Button>
            <p className="text-gray-500 text-sm">
              {t.subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}