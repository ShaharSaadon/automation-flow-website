import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const partners = [
  {
    name: 'Make',
    logo: 'https://cdn.simpleicons.org/make/6D00CC',
  },
  {
    name: 'n8n',
    logo: 'https://cdn.simpleicons.org/n8n/EA4B71',
  },
  {
    name: 'OpenAI',
    logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/openai-icon.png',
  },
  {
    name: 'Anthropic',
    logo: 'https://cdn.simpleicons.org/anthropic/D4A574',
  },
  {
    name: 'Gemini',
    logo: 'https://cdn.simpleicons.org/googlegemini/8E75B2',
  },
  {
    name: 'LangChain',
    logo: 'https://cdn.simpleicons.org/langchain/1C3C3C',
  },
  {
    name: 'Python',
    logo: 'https://cdn.simpleicons.org/python/3776AB',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.simpleicons.org/postgresql/4169E1',
  },
  {
    name: 'Supabase',
    logo: 'https://cdn.simpleicons.org/supabase/3FCF8E',
  },
  {
    name: 'Airtable',
    logo: 'https://cdn.simpleicons.org/airtable/18BFFF',
  },
  {
    name: 'WhatsApp',
    logo: 'https://cdn.simpleicons.org/whatsapp/25D366',
  },
  {
    name: 'Salesforce',
    logo: 'https://cdn.simpleicons.org/salesforce/00A1E0',
  },
  {
    name: 'Slack',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
  },
  {
    name: 'Monday',
    logo: 'https://cdn.brandfetch.io/idHFUcTb1F/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B',
  },
  {
    name: 'Twilio',
    logo: 'https://toppng.com/uploads/preview/twilio-logo-11609380242jwkoktksba.png'
  },
  {
    name: 'HubSpot',
    logo: 'https://cdn.simpleicons.org/hubspot/FF7A59',
  },
];

// No duplication needed - we'll render twice in the JSX for seamless loop

const translations = {
  en: {
    title: 'Powered by Enterprise-Grade Architecture',
    compliance1: 'SOC 2 & GDPR Compliant Standards',
    compliance2: 'Secure Data Handling'
  },
  he: {
    title: 'בשיתוף פעולה עם המערכות המובילות בשוק',
    compliance1: 'תאימות לתקני SOC 2 ו-GDPR',
    compliance2: 'טיפול מאובטח בנתונים'
  }
};

export default function PartnersCarousel() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const isRTL = language === 'he';

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-100">
            {t.title}
          </h2>
          <div className="mt-2 h-0.5 w-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>

        {/* Marquee Container */}
        <div className="relative mb-8 md:mb-10">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

          {/* Scrolling logos */}
          <div className="overflow-hidden py-4">
            <div className="partners-marquee flex gap-6 md:gap-8">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`partner-1-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-7 w-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2'%3E%3Crect x='3' y='3' width='18' height='18' rx='2'/%3E%3Cpath d='M9 9h6v6H9z'/%3E%3C/svg%3E`;
                      }}
                    />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white whitespace-nowrap transition-colors duration-300">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
              {/* Second set of logos (duplicate for seamless loop) */}
              {partners.map((partner, index) => (
                <div
                  key={`partner-2-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-7 w-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2'%3E%3Crect x='3' y='3' width='18' height='18' rx='2'/%3E%3Cpath d='M9 9h6v6H9z'/%3E%3C/svg%3E`;
                      }}
                    />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white whitespace-nowrap transition-colors duration-300">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <div className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-gray-800/30 border border-gray-700/30 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-gray-300">{t.compliance1}</span>
          </div>
          <div className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-gray-800/30 border border-gray-700/30 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-gray-300">{t.compliance2}</span>
          </div>
        </div>
      </div>

      {/* CSS animation */}
      <style>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }

        .partners-marquee {
          display: inline-flex;
          flex-wrap: nowrap;
          animation: ${isRTL ? 'marquee-rtl' : 'marquee-ltr'} 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}