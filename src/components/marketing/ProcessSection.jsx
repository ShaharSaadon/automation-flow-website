import React from 'react';
import { Phone, FileText, Rocket, TrendingUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const translations = {
  en: {
    title1: 'Idea to Launch in',
    title2: '4 Steps',
    subtitle: 'Our agile methodology ensures you go live in weeks, not months',
    steps: [
      {
        number: 1,
        icon: Phone,
        title: 'Discovery Call',
        description: 'We understand your challenges, goals, and current workflow in a 30-minute consultation.',
      },
      {
        number: 2,
        icon: FileText,
        title: 'Custom Blueprint',
        description: 'Receive a detailed roadmap with timelines, deliverables, and transparent pricing.',
      },
      {
        number: 3,
        icon: Rocket,
        title: 'Rapid Deployment',
        description: 'Our senior engineers build and deploy your solution in weeks.',
      },
      {
        number: 4,
        icon: TrendingUp,
        title: 'Optimization',
        description: 'Continuous monitoring, refinement, and support to maximize your ROI.',
      },
    ]
  },
  he: {
    title1: 'מרעיון להשקה ב-',
    title2: '4 שלבים',
    subtitle: 'תהליך פשוט ומובנה שיאפשר לכם לראות תוצאות תוך שבועות בודדים',
    steps: [
      {
        number: 1,
        icon: Phone,
        title: 'שיחת איפיון',
        description: 'אנחנו מבינים את האתגרים, המטרות ותהליך העבודה הנוכחי שלכם בייעוץ של 30 דקות.',
      },
      {
        number: 2,
        icon: FileText,
        title: 'תוכנית מותאמת אישית',
        description: 'קבלו מפת דרכים מפורטת עם לוחות זמנים, תוצרים ותמחור שקוף.',
      },
      {
        number: 3,
        icon: Rocket,
        title: 'פריסה מהירה',
        description: 'המהנדסים הבכירים שלנו בונים ומפרסים את הפתרון שלכם תוך שבועות.',
      },
      {
        number: 4,
        icon: TrendingUp,
        title: 'אופטימיזציה',
        description: 'ניטור מתמיד, שיפור ותמיכה למקסום תשואת ההשקעה שלכם.',
      },
    ]
  }
};

export default function ProcessSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const isRTL = language === 'he';

  return (
    <section id="process" className="py-20 md:py-32 bg-white relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.title1}{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className={`absolute -top-3 ${isRTL ? '-right-3' : '-left-3'} w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg`}>
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              
              <div className="mt-4 mb-4">
                <step.icon className="w-7 h-7 text-purple-600 stroke-[1.5]" />
              </div>
              
              <h3 className={`text-xl font-bold text-gray-900 mb-2 ${isRTL ? 'text-right' : ''}`}>
                {step.title}
              </h3>
              <p className={`text-gray-600 text-sm leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}