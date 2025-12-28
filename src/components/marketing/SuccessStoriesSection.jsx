import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const translations = {
  en: {
    title1: 'Our Clients\'',
    title2: 'Success Stories',
    subtitle: 'See how we\'ve helped businesses transform their operations with AI and automation',
    result: 'RESULT'
  },
  he: {
    title1: 'סיפורי',
    title2: 'הצלחת הלקוחות שלנו',
    subtitle: 'תשמעו מהלקוחות שלנו איך אוטומציה ו-AI הקפיצו להם את העסק',
    result: 'תוצאה'
  }
};

const caseStudiesData = {
  en: [
    {
      client: 'Windmill Growth',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/31c41560f_windmill_growth_logo.jpeg',
      category: 'Digital Marketing',
      categoryColor: 'bg-purple-100 text-purple-700',
      icon: '🎯',
      description: 'We built an AI-powered lead generation engine that automated their entire outreach process. The system combines intelligent web scraping, custom ICP targeting, and personalized email campaigns - transforming hours of manual work into instant, scalable results.',
      results: [
        '35 meetings booked',
        '$24K revenue generated',
        '100% automation rate',
      ],
      testimonial: 'The AI lead generation system delivered extraordinary results. This completely transformed how we approach outbound sales.',
      author: 'Ben Buaron',
      role: 'CEO & Founder, Windmill Growth',
      avatar: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/1515d4cc6_BenBuaron.jpeg',
    },
    {
      client: 'SaleUp',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/345a49066_saleuplogo.png',
      category: 'Sales Automation',
      categoryColor: 'bg-blue-100 text-blue-700',
      icon: '💼',
      description: 'We migrated their entire lead routing system from Make.com to n8n, building a robust infrastructure with centralized control, automated notifications, custom landing pages, and error handling. The new system eliminated all incidents and saved countless operational hours.',
      results: [
        '100K+ automated messages monthly',
        '15+ hours saved per week',
        '100% system uptime',
      ],
      testimonial: 'The new system eliminated all incidents and saved us countless hours every week. Lead response time improved dramatically - it\'s completely stable now.',
      author: 'Elad Barak',
      role: 'Co-Founder & CEO, SaleUp',
      avatar: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/da7c0a041_-1.jpg',
    },
    {
      client: 'SuperPower',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/5dd697af2_superpowerlogo.png',
      category: 'Community Tech',
      categoryColor: 'bg-pink-100 text-pink-700',
      icon: '⚡',
      description: 'We built a complete WhatsApp automation system for managing kibbutz community communication. The system handles message routing, smart tags, automated reminders, registration processes, and real-time updates - all without manual intervention.',
      results: [
        '100+ active users managed',
        '20+ hours saved monthly',
        '100% communication centralized',
      ],
      testimonial: 'This WhatsApp system handles all our community communication seamlessly. It\'s completely automated and saves us so much time every day.',
      author: 'Lior Vaknin',
      role: 'CEO & Co-Founder, SuperPower',
      avatar: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/a314ef64c_-.jpg',
    },
  ],
  he: [
    {
      client: 'SuperPower',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/5dd697af2_superpowerlogo.png',
      category: 'טכנולוגיה לקהילות',
      categoryColor: 'bg-pink-100 text-pink-700',
      icon: '⚡',
      description: 'בנינו מערכת אוטומציה מלאה ב-WhatsApp לניהול תקשורת בקיבוצים. המערכת יודעת לנתב הודעות, לתייג פניות בצורה חכמה, לשלוח תזכורות אוטומטיות ולנהל תהליכי הרשמה ועדכונים בזמן אמת – הכל בצורה עצמאית וללא צורך במגע יד אדם.',
      results: [
        'קהילה פעילה עם מאות משתמשים בחודש',
        'חיסכון של מעל 20 שעות עבודה בשבוע',
        '100% ריכוז של התקשורת במקום אחד',
      ],
      testimonial: 'מערכת ה-WhatsApp הזו מנהלת את כל התקשורת בקהילה שלנו בצורה חלקה. הכל עובד על אוטומט וזה חוסך לנו המון זמן ביום-יום.',
      author: 'ליאור ועקנין',
      role: 'מנכ"ל ומייסד שותף',
      avatar: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/a314ef64c_-.jpg',
    },
    {
      client: 'SaleUp',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/345a49066_saleuplogo.png',
      category: 'אוטומציה למכירות',
      categoryColor: 'bg-blue-100 text-blue-700',
      icon: '💼',
      description: 'העברנו את כל מערך ניתוב הלידים שלהם מ Make ל-n8n ובנינו תשתיות יציבות עם שליטה מרכזית. המערכת כוללת התראות אוטומטיות, דפי נחיתה מותאמים וטיפול בשגיאות. המעבר פתר לחלוטין תקלות טכניות וחסך אינספור שעות תפעול.',
      results: [
        'מעל 100,000 הודעות אוטומטיות בחודש',
        'חיסכון של מעל 15 שעות עבודה בשבוע',
        '100% זמינות מערכת (Uptime)',
      ],
      testimonial: 'המערכת החדשה פתרה את כל התקלות וחסכה לנו שעות על גבי שעות בכל שבוע. זמן התגובה ללידים השתפר פלאים – המערכת פשוט יציבה לגמרי.',
      author: 'אלעד ברק',
      role: 'מייסד שותף ומנכ״ל, SaleUp',
      avatar: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/da7c0a041_-1.jpg',
    },
    {
      client: 'Windmill Growth',
      logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/31c41560f_windmill_growth_logo.jpeg',
      category: 'שיווק דיגיטלי',
      categoryColor: 'bg-purple-100 text-purple-700',
      icon: '🎯',
      description: 'מנוע לידים מבוסס AI שמנהל את כל תהליך הפנייה ללקוחות (Outreach). המערכת משלבת סריקת חכמה של לידים על גבי פלטפורמות שונות כמו לינקדאין, פייסבוק וכו׳, מציאת פרופיל לקוח מדויק (ICP) ושליחת קמפיינים מותאמים אישית במייל / ברשתות. הפכנו שעות של עבודה ידנית למכונה שמציירת לידים איכותיים לעסק.',
      results: [
        '35 פגישות נקבעו בשבוע 1 להרצה',
        'נוצרו הכנסות של למעלה מ-$24,000',
        '100% אוטומציה בתהליך',
      ],
      testimonial: 'מערכת הלידים מבוססת ה-AI הביאה תוצאות יוצאות דופן. זה שינה לחלוטין את הדרך שבה אנחנו ניגשים למכירות יוצאות (Outbound Sales).',
      author: 'בן בוארון',
      role: 'מנכ"ל ומייסד',
      avatar: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/1515d4cc6_BenBuaron.jpeg',
    },
  ]
};

function CaseStudyCard({ study, resultLabel, isRTL }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="mb-4 h-8">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${study.categoryColor}`}>
          {study.category}
        </span>
      </div>
      
      <div className="flex items-center gap-3 mb-3 h-12">
        {study.logo && (
          <img 
            src={study.logo} 
            alt={study.client}
            className="h-10 w-auto rounded-lg object-contain"
          />
        )}
        <h3 className="text-xl font-bold text-gray-900">
          {study.client}
        </h3>
      </div>
      
      <p className={`text-gray-600 text-sm mb-6 leading-relaxed h-32 ${isRTL ? 'text-right' : ''}`}>
        {study.description}
      </p>
      
      <div className="mb-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100 h-40">
        <div className={`text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ${isRTL ? 'text-right' : ''}`}>
          {resultLabel}
        </div>
        <div className="space-y-2.5">
          {study.results.map((result, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 font-semibold">{result}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-4 pt-4 border-t border-gray-100 h-24">
        <p className={`text-gray-600 italic text-sm leading-relaxed mb-3 ${isRTL ? 'text-right' : ''}`}>
          "{study.testimonial}"
        </p>
      </div>
      
      <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <img 
          src={study.avatar} 
          alt={study.author}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
        />
        <div className={isRTL ? 'text-right' : ''}>
          <p className="font-semibold text-gray-900 text-sm">{study.author}</p>
          <p className="text-xs text-gray-500">{study.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function SuccessStoriesSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const caseStudies = caseStudiesData[language] || caseStudiesData.en;
  const isRTL = language === 'he';

  return (
    <section id="success-stories" className="py-20 md:py-32 bg-gradient-to-br from-purple-50/30 via-white to-blue-50/30 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.title1}{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} resultLabel={t.result} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
}