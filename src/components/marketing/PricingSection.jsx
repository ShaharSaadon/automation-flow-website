import React from 'react';
import { Check, Zap, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const translations = {
  en: {
    title: 'Transparent Pricing',
    subtitle: 'Every project is custom-scoped based on your unique needs. You\'ll receive a detailed proposal with a Fixed-Price Guarantee - no surprises, no overruns.',
    benefits: [
      { label: '100% IP Ownership', description: 'You own the code we build.' },
      { label: 'White-glove Service', description: 'Senior engineers, no juniors.' },
      { label: 'No Hidden Fees', description: 'Clear SOW and timelines.' },
    ],
    consultingTitle: 'Consulting & Optimization Bank',
    consultingDesc: 'Already have automations? We offer \'Hours Bank\' packages for consulting, fixing, and optimizing existing Make/n8n workflows.',
    cta: 'Get a custom proposal',
    popularBadge: 'Popular',
    plans: [
      {
        name: 'Starter (Pilot)',
        tag: 'Small Biz / MVP',
        description: 'Automate a single process or build a proof of concept. Ideal for testing automation potential before scaling.',
        popular: false,
      },
      {
        name: 'Growth',
        tag: 'Scale-ups',
        description: 'End-to-end departmental automation with multiple workflows, integrations, and AI-powered agents.',
        popular: true,
      },
      {
        name: 'Enterprise',
        tag: 'Corporations',
        description: 'Custom AI agents, private LLMs, dedicated infrastructure, and SLA-backed premium support.',
        popular: false,
      },
    ]
  },
  he: {
    title: 'תמחור שקוף והוגן',
    subtitle: 'בלי הפתעות ובלי אותיות קטנות. אנחנו בונים הצעה שתפורה בול לצרכים שלכם, עם התחייבות למחיר קבוע מראש ולוחות זמנים ברורים.',
    benefits: [
      { label: 'הקוד שלכם. (IP מלא)', description: 'בסיום הפרויקט אתם מקבלים בעלות מלאה על כל מה שבנינו.' },
      { label: 'נבחרת של מומחים בלבד', description: 'הצוות שמורכב ממפתחים בכירים (Seniors) עם ניסיון.' },
      { label: 'שקיפות מלאה (בלי טריקים)', description: 'מקבלים מראש מסמך אפיון ותכולה (SOW) ולוחות זמנים מדויקים. המחיר שסגרנו זה המחיר שתשלמו.' },
    ],
    consultingTitle: 'צריכים רק חיזוק נקודתי? (בנק שעות ייעוץ)',
    consultingDesc: 'כבר יש לכם אוטומציות אבל משהו חורק? אנחנו מציעים חבילת שעות גמישה לייעוץ, תיקון ושדרוג תהליכים קיימים (ב-Make או n8n).',
    cta: 'לקבלת הצעת מחיר מותאמת אישית',
    popularBadge: 'הפופולרי ביותר',
    plans: [
      {
        name: 'צעד ראשון (MVP)',
        tag: 'עסקים בתחילת הדרך',
        description: 'מתחילים בקטן ובטוח. אוטומציה לתהליך ספציפי או בניית הוכחת היתכנות (POC) כדי לראות את הקסם קורה לפני שמתרחבים.',
        popular: false,
      },
      {
        name: 'חברות בצמיחה (Scale)',
        tag: 'חברות בצמיחה',
        description: 'לוקחים את העסק לשלב הבא. אוטומציה מלאה (End-to-End) למחלקות שלמות, עם ,תהליכי עבודה חכמים שמתחברים למערכת אחת יעילה.',
        popular: true,
      },
      {
        name: 'ארגונים ותאגידים (Enterprise)',
        tag: 'תאגידים',
        description: 'התותחים הכבדים. סוכני AI חכמים (LLMs) מותאמים אישית, רצים על תשתיות פרטיות ומאובטחות, עם תמיכה צמודה ומורחבת (SLA).',
        popular: false,
      },
    ]
  }
};

export default function PricingSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const isRTL = language === 'he';
  
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-br from-[#0a1628] via-[#0d1d38] to-[#0a1628] relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-4 ${isRTL ? 'text-right' : ''}`}>
              {t.title}
            </h2>
            <p className={`text-gray-400 text-base mb-8 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {t.subtitle}
            </p>
            
            <div className="space-y-3 mb-8">
              {t.benefits.map((benefit, idx) => (
                <div key={idx} className={`flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className={`text-sm leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                    <span className="text-white font-semibold">{benefit.label}:</span>
                    <span className="text-gray-300"> {benefit.description}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-3xl px-6 py-4 border border-blue-500/20 mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
              <div className={`relative flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-2">
                    {t.consultingTitle}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t.consultingDesc}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
            >
              {t.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {t.plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-white/5 backdrop-blur-md rounded-3xl px-6 py-4 border transition-all duration-300 cursor-pointer group hover:scale-[1.02] ${
                  plan.popular
                    ? 'border-blue-500/30 hover:border-blue-500/50 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20'
                    : 'border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
                onClick={scrollToContact}
              >
                {plan.popular && (
                  <div className={`absolute -top-3 ${isRTL ? '-left-3' : '-right-3'}`}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                      {t.popularBadge}
                    </span>
                  </div>
                )}
                <div className={`flex items-start justify-between gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className={`flex items-center gap-2 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <h3 className={`text-xl font-bold text-white ${isRTL ? 'text-right' : ''}`}>
                        {plan.name}
                      </h3>
                      <span className={`text-blue-400 text-sm font-medium ${isRTL ? 'order-first' : ''}`}>· {plan.tag}</span>
                    </div>
                    <p className={`text-gray-300 text-sm leading-relaxed ${isRTL ? 'text-right' : ''}`}>{plan.description}</p>
                  </div>

                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 flex items-center justify-center transition-all">
                      <ArrowRight className={`w-4 h-4 text-gray-400 group-hover:text-white transition-colors ${isRTL ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}