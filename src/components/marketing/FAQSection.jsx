import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const faqsContent = {
  en: [
  {
    question: 'How long does a typical project take?',
    answer: 'Most projects are completed within 4-8 weeks, from discovery to launch. We work in an agile process with weekly check-ins, so you see progress every step of the way. More complex enterprise solutions may take 10-12 weeks.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We work across all industries - from real estate and e-commerce to finance, healthcare, and more. Our approach is industry-agnostic because we custom-build every solution from scratch. If you have a unique challenge, we\'d love for you to challenge us with it.',
  },
  {
    question: 'Do I need technical expertise to work with you?',
    answer: 'No technical background is required. We handle all the technical complexity. You bring your business knowledge and goals, and we translate them into a fully functioning automated system. We also provide training and documentation so your team can use everything confidently.',
  },
  {
    question: 'What happens after the project is delivered?',
    answer: 'After delivery, you own 100% of the code and IP. We offer ongoing support packages that include optimization hours, feature enhancements, and technical assistance. You can choose a monthly retainer for continuous improvements, or manage the system internally - whichever works best for you.',
  },
  {
    question: 'How is pricing determined?',
    answer: 'Pricing is project-based and depends on scope, complexity, and timeline. After our discovery call, we provide a detailed proposal with transparent pricing, milestones, and deliverables. No hidden fees and no surprises.',
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Yes. We specialize in integrations. Whether it\'s your CRM, ERP, databases, or custom internal tools - we ensure seamless connectivity. We work with APIs, webhooks, and direct database connections.',
  },
],
  he: [
    {
      question: 'כמה זמן לוקח לפתח פרויקט?',
      answer: 'רוב הפרויקטים נמסרים תוך 4-8 שבועות, משלב האיפיון ועד העלייה לאוויר. אנחנו עובדים בתהליך אג\'ילי עם פגישות סטטוס שבועיות, כך שאתם רואים התקדמות בכל שלב. פתרונות מורכבים יותר ברמת Enterprise עשויים לקחת 10-12 שבועות.',
    },
    {
      question: 'עם אילו תעשיות אתם עובדים?',
      answer: 'אנחנו עובדים עם חברות מכל התעשיות - נדל״ן, e-commerce, פיננסים, בריאות ועוד. התשתית שלנו אינה תלויה בענף, משום שאנחנו בונים כל פתרון מאפס ובהתאמה מלאה לעסק שלכם. עד היום, אין אתגר שלא הצלחנו לפתור :)',
    },
    {
      question: 'האם צריך ידע טכני כדי לעבוד איתכם?',
      answer: 'אין צורך ברקע טכני. אנחנו מטפלים בכל המורכבות הטכנית. אתם מביאים את הידע העסקי והמטרות שלכם - ואנחנו מתרגמים אותם למערכת אוטומציה מלאה שעובדת בשבילכם. בנוסף, אנחנו מספקים הדרכה ותיעוד כדי שהצוות שלכם יוכל להשתמש במערכת בקלות ובביטחון.',
    },
    {
      question: 'מה קורה אחרי שהפרויקט נמסר?',
      answer: 'לאחר מסירת הפרויקט, כל הקוד וה-IP הם בבעלותכם המלאה. אנחנו מציעים חבילות תמיכה שוטפות הכוללות שעות אופטימיזציה, הוספת פיצ\'רים וסיוע טכני. תוכלו לבחור בבנק שעות חודשי לשדרוגים מתמשכים - או לנהל את המערכת פנימית - מה שהכי נוח ומתאים לכם.',
    },
    {
      question: 'איך נקבע המחיר?',
      answer: 'המחיר נקבע לפי היקף, מורכבות ולוחות זמנים של הפרויקט. לאחר שיחת האיפיון נשלח לכם הצעת מחיר מפורטת הכוללת עלויות, אבני דרך ורשימת תוצרים ברורים - ככה שאין עלויות נסתרות ואין הפתעות בסוף.',
    },
    {
      question: 'האם תוכלו להתחבר למערכות הקיימות שלנו?',
      answer: 'כן. אנחנו מתמחים באינטגרציות. בין אם מדובר ב-CRM, מערכת ERP, בסיסי נתונים או כלים פנימיים מותאמים - אנו דואגים לחיבור מלא וחלק. אנחנו עובדים עם APIs, Webhooks וחיבורי דאטה ישירים.',
    },
  ]
};

const translations = {
  en: {
    title1: 'Frequently Asked',
    title2: 'Questions',
    subtitle: 'Everything you need to know about working with us'
  },
  he: {
    title1: 'שאלות',
    title2: 'נפוצות',
    subtitle: 'כל מה שצריך לדעת על עבודה איתנו'
  }
};

function FAQItem({ faq, isOpen, onClick, isRTL }) {
  return (
    <div className="bg-white/50 backdrop-blur-md rounded-2xl border border-gray-200/50 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <h3 className={`text-lg font-semibold text-gray-900 ${isRTL ? 'pl-8 text-right' : 'pr-8'}`}>
          {faq.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right' : ''}`}>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const t = translations[language] || translations.en;
  const faqs = faqsContent[language] || faqsContent.en;

  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/20 relative overflow-hidden" dir={language === 'he' ? 'rtl' : 'ltr'}>
      {/* Aurora Background */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              isRTL={language === 'he'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}