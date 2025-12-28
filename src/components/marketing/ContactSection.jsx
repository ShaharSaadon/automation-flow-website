import React, { useState } from 'react';
import { Send, Loader2, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '../LanguageContext';

const translations = {
  en: {
    title1: 'Ready to',
    title2: 'Transform',
    title3: 'Your Business?',
    subtitle: 'Book your free 30-minute consultation. No sales pitch - just an honest conversation about how automation can help your business.',
    bullets: [
      'Free 30-minute consultation',
      'Custom solution roadmap',
      'No obligation, just insights',
    ],
    placeholders: {
      name: 'Full Name',
      email: 'Work Email',
      company: 'Company',
      budget: 'Select budget range',
      message: 'Tell us about your automation goals, current challenges, or any specific workflows you\'d like to improve...',
    },
    budgetOptions: [
      { value: 'small', label: 'Small (<$10K)' },
      { value: 'medium', label: 'Medium ($10K-$50K)' },
      { value: 'large', label: 'Large ($50K+)' },
      { value: 'enterprise', label: 'Enterprise ($100K+)' },
    ],
    submitButton: 'Submit',
    submitting: 'Sending...',
    successTitle: 'Message sent successfully!',
    successText: 'We\'ll get back to you within 24 hours to schedule your consultation.',
  },
  he: {
    title1: 'איך',
    title2: 'מתחילים?',
    title3: '',
    subtitle: '',
    meetingTitle: 'שנקבע פגישה?',
    contactTitle: 'שנחזור אליכם?',
    contactSubtitle: 'מלאו פרטים ונתקשר בהקדם האפשרי',
    bookButton: 'לתיאום פגישה',
    bullets: [
      'ייעוץ חינם של 30 דקות',
      'מפת דרכים לפתרון מותאם אישית',
      'בלי התחייבות, רק תובנות',
    ],
    placeholders: {
      name: 'שם מלא',
      email: 'אימייל עבודה',
      company: 'חברה',
      budget: 'בחרו טווח תקציב',
      message: 'ספרו לנו על מטרות האוטומציה שלכם, האתגרים הנוכחיים, או תהליכי עבודה ספציפיים שתרצו לשפר...',
    },
    budgetOptions: [
      { value: 'small', label: 'קטן (פחות מ-$10K)' },
      { value: 'medium', label: 'בינוני ($10K-$50K)' },
      { value: 'large', label: 'גדול ($50K+)' },
      { value: 'enterprise', label: 'ארגוני ($100K+)' },
    ],
    submitButton: 'Submit',
    submitting: 'שולח...',
    successTitle: 'ההודעה נשלחה בהצלחה!',
    successText: 'ניצור איתכם קשר תוך 24 שעות כדי לתאם את הייעוץ.',
  }
};

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const isRTL = language === 'he';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectSize: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with your email service (FormSpree, EmailJS, SendGrid, etc.)
      // Example with FormSpree: fetch('https://formspree.io/f/YOUR_FORM_ID', {...})
      // Example with EmailJS: emailjs.send('service_id', 'template_id', formData)

      const emailData = {
        to: 'heli@automationsflow.com',
        subject: `New Consultation Request from ${formData.name}`,
        name: formData.name,
        email: formData.email,
        company: formData.company,
        projectSize: formData.projectSize,
        message: formData.message
      };

      console.log('Form submission:', emailData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', projectSize: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or contact us directly at heli@automationsflow.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/20 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t.title1}{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {isRTL ? 'קבעו ייעוץ חינם של 30 דקות. בלי מצגת מכירה - רק שיחה כנה על איך אוטומציה יכולה לעזור לעסק שלכם.' : 'Book your free 30-minute consultation. No sales pitch - just an honest conversation about how automation can help your business.'}
          </p>
        </div>

        {/* Two Options Side by Side */}
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Option 1: Schedule Meeting */}
          <div className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col ${isRTL ? 'text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
            <h3 className={`text-2xl font-bold text-gray-900 mb-6 ${isRTL ? 'text-right' : ''}`}>
              {isRTL ? t.meetingTitle : 'Schedule a Meeting?'}
            </h3>

            <div className={`mb-8 flex-grow ${isRTL ? 'flex flex-col items-end gap-3' : 'space-y-3'}`}>
              {t.bullets.map((item, idx) => (
                <div key={idx} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <Button
              onClick={() => window.open('https://calendar.app.google/gWZpQiCnDu9vfGiu8', '_blank')}
              className="w-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-base font-medium shadow-lg"
            >
              <Calendar className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {isRTL ? t.bookButton : 'Book a Meeting'}
            </Button>
          </div>

          {/* Option 2: Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col">
            <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${isRTL ? 'text-right' : ''}`}>
              {isRTL ? t.contactTitle : 'We\'ll Contact You?'}
            </h3>
            <p className={`text-gray-600 mb-6 ${isRTL ? 'text-right' : ''}`}>
              {isRTL ? t.contactSubtitle : 'Fill in your details and we\'ll get back to you soon'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
              <div>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder={t.placeholders.name}
                  className="bg-gray-50 border-gray-200"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              <div>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder={t.placeholders.email}
                  className="bg-gray-50 border-gray-200"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              <div className="flex-grow">
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder={t.placeholders.message}
                  rows={3}
                  className="bg-gray-50 border-gray-200 resize-none h-full"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-base font-medium shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'} animate-spin`} />
                    {t.submitting}
                  </>
                ) : (
                  <>
                    <Send className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t.submitButton}
                  </>
                )}
              </Button>
            </form>

            {isSubmitted && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-2xl">
                <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">{t.successTitle}</h4>
                    <p className="text-sm text-green-700">{t.successText}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}