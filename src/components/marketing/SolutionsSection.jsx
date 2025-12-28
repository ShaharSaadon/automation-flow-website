import React from 'react';
import { Bot, Users, MessageCircle, Database, FileText, BarChart3 } from 'lucide-react';
import CountUp from './CountUp';
import { useLanguage } from '../LanguageContext';

const solutionsData = {
  en: {
    title1: 'Custom-Scoped',
    title2: 'AI & Automation Solutions',
    subtitle: 'Tailor-made solutions that fit your business exactly - not generic SaaS',
    popularBadge: 'Popular',
    keyOutcomesTitle: 'Key Outcomes',
    solutions: [
      {
        icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/bdeb9bed2_brain.png',
        title: 'Custom AI Agents',
        popular: true,
        description: 'AI agents built to think and work like your experts - automating complex tasks and freeing your team to focus on what matters.',
        outcomes: [
          { value: 70, suffix: '%', label: 'reduction in manual processing time' },
          { value: 24, suffix: '/7', label: 'autonomous task execution' },
          { value: 85, suffix: '%', label: 'decrease in human error rates' },
        ],
      },
      {
        icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/51372e52f_Gemini_Generated_Image_hdeviwhdeviwhdev.png',
        title: 'CRM & Sales Automation',
        description: 'Automate your lead flow end-to-end - so every lead is enriched, followed up, and converted faster.',
        outcomes: [
          { value: 3, suffix: 'x', label: 'faster lead response time' },
          { value: 40, suffix: '%', label: 'increase in qualified opportunities' },
          { value: 60, suffix: '%', label: 'reduction in manual data entry' },
        ],
      },
      {
        icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/099537dd4_Gemini_Generated_Image_xr0lqtxr0lqtxr0l.png',
        title: 'Customer Support Agent',
        description: 'Smart WhatsApp and web AI agents that deliver human-level support, handle FAQs, and automate complex workflows 24/7.',
        outcomes: [
          { value: 90, suffix: '%', label: 'of queries resolved automatically' },
          { value: 30, suffix: 's', label: 'average response time', prefix: '<' },
          { value: 50, suffix: '%', label: 'reduction in support costs' },
        ],
      },
      {
        icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/281cf3b36_Gemini_Generated_Image_yt9ay9yt9ay9yt9a.png',
        title: 'Data Enrichment & BI',
        description: 'AI that gathers, cleans, and enriches your data - so you always work with a complete, real-time picture.',
        outcomes: [
          { value: 95, suffix: '%', label: 'data accuracy guaranteed' },
          { value: 60, suffix: '%', label: 'reduction in data maintenance costs' },
          { value: 100, suffix: '%', label: 'real-time sync across all platforms' },
        ],
      },
      {
        icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/4870749f2_Gemini_Generated_Image_zezl7zzezl7zzezl.png',
        title: 'Document Processing (OCR)',
        description: 'AI that reads invoices, contracts, and reports for you - extracting the details instantly and saving your team hours of work.',
        outcomes: [
          { value: 99, suffix: '%', label: 'extraction accuracy' },
          { value: 80, suffix: '%', label: 'faster document processing' },
          { value: 100, suffix: '%', label: 'audit trail compliance' },
        ],
      },
      {
        icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/818a9e262_Gemini_Generated_Image_pyn3x1pyn3x1pyn3.png',
        title: 'Analytics & Insights',
        description: 'Get automatic insights and real-time alerts - no more digging through reports to find what needs your attention.',
        outcomes: [
          { value: 100, suffix: '%', label: 'real-time KPI dashboards' },
          { value: 75, suffix: '%', label: 'faster report generation' },
          { value: 90, suffix: '%', label: 'predictive insights accuracy' },
        ],
      },
    ]
  },
  he: {
    title1: 'פתרונות AI ואוטומציה',
    title2: 'מותאמים אישית',
    subtitle: 'פתרונות מותאמים אישית שמתאימים בדיוק לעסק שלכם - לא עוד SaaS גנרי',
    popularBadge: 'פופולרי',
    keyOutcomesTitle: 'תוצאות',
    solutions: [
      {
        icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/bdeb9bed2_brain.png',
        title: 'סוכני AI מותאמים אישית',
        popular: true,
        description: 'סוכני AI שבנויים לחשוב ולעבוד כמו המומחים שלכם - אוטומציה למשימות מורכבות שמפנה את הצוות להתמקד במה שחשוב באמת.',
        outcomes: [
          { value: 70, suffix: '%', label: 'קיצור זמני תהליכים ידניים' },
          { value: 24, suffix: '/7', label: 'ביצוע משימות ללא הפסקה' },
          { value: 85, suffix: '%', label: 'ירידה בשיעור טעויות אנוש' },
        ],
      },
      {
        icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/51372e52f_Gemini_Generated_Image_hdeviwhdeviwhdev.png',
        title: 'אוטומציית CRM ומכירות',
        description: 'הפכו את ניהול הלידים שלכם לאוטומטי מקצה לקצה – כך שכל ליד מעובד, מתועדף ומקבל מעקב מהיר עד לסגירה.',
        outcomes: [
          { value: 3, suffix: 'x', label: 'זמן תגובה מהיר יותר ללידים' },
          { value: 40, suffix: '%', label: 'עלייה באיכות הלידים' },
          { value: 60, suffix: '%', label: 'הפחתה בהזנת נתונים ידנית' },
        ],
      },
      {
        icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/099537dd4_Gemini_Generated_Image_xr0lqtxr0lqtxr0l.png',
        title: 'סוכן תמיכת לקוחות',
        description: 'סוכני AI חכמים בוואטסאפ ובאינטרנט שמספקים תמיכה אנושית, מטפלים בשאלות נפוצות ומבצעים תהליכים מורכבים 24/7.',
        outcomes: [
          { value: 90, suffix: '%', label: 'מהפניות נפתרות אוטומטית' },
          { value: 30, suffix: 's', label: 'זמן תגובה ממוצע', prefix: '<' },
          { value: 50, suffix: '%', label: 'הפחתה בעלויות תמיכה' },
        ],
      },
      {
        icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/281cf3b36_Gemini_Generated_Image_yt9ay9yt9ay9yt9a.png',
        title: 'העשרת נתונים וBI',
        description: 'AI שאוסף, מנקה ומעשיר את הנתונים שלכם - כך שתמיד תעבדו עם תמונה מלאה ובזמן אמת.',
        outcomes: [
          { value: 95, suffix: '%', label: 'דיוק נתונים מובטח' },
          { value: 60, suffix: '%', label: 'הפחתה בעלויות תחזוקת נתונים' },
          { value: 100, suffix: '%', label: 'סנכרון בזמן אמת בכל הפלטפורמות' },
        ],
      },
      {
        icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/4870749f2_Gemini_Generated_Image_zezl7zzezl7zzezl.png',
        title: 'עיבוד מסמכים (OCR)',
        description: 'AI שקורא חשבוניות, חוזים ודוחות בשבילכם - מחלץ את הפרטים מיידית וחוסך לצוות שלכם שעות עבודה.',
        outcomes: [
          { value: 99, suffix: '%', label: 'דיוק חילוץ נתונים' },
          { value: 80, suffix: '%', label: 'עיבוד מסמכים מהיר יותר' },
          { value: 90, suffix: '%', label: 'חיסכון בזמן עיבוד מסמכים' },
        ],
      },
      {
        icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930916a3a9372b61c053eb3/818a9e262_Gemini_Generated_Image_pyn3x1pyn3x1pyn3.png',
        title: 'אנליטיקה ותובנות',
        description: 'קבלו תובנות אוטומטיות והתראות בזמן אמת - בלי לחפור בדוחות כדי למצוא מה דורש את תשומת ליבכם.',
        outcomes: [
          { value: 100, suffix: '%', label: 'לוחות KPI בזמן אמת' },
          { value: 75, suffix: '%', label: 'יצירת דוחות מהירה יותר' },
          { value: 90, suffix: '%', label: 'דיוק תחזיות תובנות' },
        ],
      },
    ]
  }
};

function SolutionCard({ solution, isRTL, popularBadge, keyOutcomesTitle }) {
  return (
    <div className="group relative bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      {solution.popular && (
        <div className={`absolute -top-3 ${isRTL ? '-right-3' : '-right-3'}`}>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
            {popularBadge}
          </span>
        </div>
      )}
      
      <div className={`mb-4 ${isRTL ? 'flex justify-start' : 'flex justify-start'}`}>
        {typeof solution.icon === 'string' ? (
          <img src={solution.icon} alt={solution.title} className="w-10 h-10 object-contain" />
        ) : (
          <solution.icon className="w-10 h-10 text-purple-600 stroke-[1.5]" />
        )}
      </div>

      <h3 className={`text-xl font-bold text-gray-900 mb-2 min-h-[2.5rem] ${isRTL ? 'text-right' : 'text-left'}`}>
        {solution.title}
      </h3>
      <p className={`text-gray-600 text-sm mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
        {solution.description}
      </p>

      <div className={`space-y-3`}>
        <h4 className={`text-xs font-bold text-purple-600 uppercase tracking-wider mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
          {keyOutcomesTitle}
        </h4>
        {solution.outcomes.map((outcome, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <div className="flex-shrink-0 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            </div>
            <p className="text-sm text-gray-700 flex-1">
              <span className="font-bold text-purple-600">
                <CountUp
                  end={outcome.value}
                  suffix={outcome.suffix}
                  prefix={outcome.prefix || ''}
                />
              </span>
              {' '}{outcome.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SolutionsSection() {
  const { language } = useLanguage();
  const content = solutionsData[language] || solutionsData.en;
  const isRTL = language === 'he';

  return (
    <section id="solutions" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/20 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {content.title1}{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {content.title2}
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.solutions.map((solution, index) => (
            <SolutionCard 
              key={index} 
              solution={solution} 
              isRTL={isRTL}
              popularBadge={content.popularBadge}
              keyOutcomesTitle={content.keyOutcomesTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}