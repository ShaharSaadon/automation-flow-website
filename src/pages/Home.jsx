import React from 'react';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/marketing/Navbar';
import HeroSection from '@/components/marketing/HeroSection';
import MetricsSection from '@/components/marketing/MetricsSection';
import SolutionsSection from '@/components/marketing/SolutionsSection';
import ProcessSection from '@/components/marketing/ProcessSection';
import SuccessStoriesSection from '@/components/marketing/SuccessStoriesSection';
import PartnersCarousel from '@/components/marketing/PartnersCarousel';
import PricingSection from '@/components/marketing/PricingSection';
import FAQSection from '@/components/marketing/FAQSection';
import ContactSection from '@/components/marketing/ContactSection';
import Footer from '@/components/marketing/Footer';
import { useLanguage } from '@/components/LanguageContext';

const seoContent = {
  en: {
    title: "Automation Flow - Business Automation Solutions",
    description: "Transform your business with intelligent automation solutions. Expert workflow optimization, custom integrations, and AI-powered tools to boost productivity and efficiency.",
    keywords: "business automation, workflow automation, process automation, custom integrations, AI automation, productivity tools, workflow optimization, business efficiency",
    ogTitle: "Automation Flow - Transform Your Business with Intelligent Automation",
    ogDescription: "Expert business automation solutions including workflow optimization, custom integrations, and AI-powered tools. Free consultation available."
  },
  he: {
    title: "Automation Flow - פתרונות אוטומציה לעסקים",
    description: "שנו את העסק שלכם עם פתרונות אוטומציה חכמים. אופטימיזציה של תהליכי עבודה, אינטגרציות מותאמות אישית וכלי AI לשיפור הפרודוקטיביות והיעילות.",
    keywords: "אוטומציה לעסקים, אוטומציית תהליכים, אינטגרציות מותאמות אישית, אוטומציה AI, כלי פרודוקטיביות, אופטימיזציה של תהליכים, יעילות עסקית",
    ogTitle: "Automation Flow - שנו את העסק שלכם עם אוטומציה חכמה",
    ogDescription: "פתרונות אוטומציה מקצועיים לעסקים כולל אופטימיזציה של תהליכים, אינטגרציות מותאמות אישית וכלי AI. ייעוץ חינם זמין."
  }
};

export default function Home() {
  const { language } = useLanguage();
  const seo = seoContent[language] || seoContent.en;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        ogType="website"
        lang={language}
      />
      <Navbar />
      <main>
        <HeroSection />
        <MetricsSection />
        <SolutionsSection />
        <ProcessSection />
        <SuccessStoriesSection />
        <PartnersCarousel />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}