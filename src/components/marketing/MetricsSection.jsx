import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';

const translations = {
  en: {
    metrics: [
      { value: 78, suffix: '%', label: 'Average time saved' },
      { value: 3, suffix: 'x', label: 'Revenue growth multiplier' },
      { value: 50, suffix: '+', label: 'Successful implementations' },
      { value: 24, suffix: '/7', label: 'Automation uptime' },
    ]
  },
  he: {
    metrics: [
      { value: 78, suffix: '%', label: 'חיסכון ממוצע בזמן' },
      { value: 3, suffix: 'x', label: 'גידול בהכנסות' },
      { value: 50, prefix: '+', label: 'פרויקטים שהוטמעו בהצלחה' },
      { value: 24, suffix: '/7', label: 'זמינות המערכת' },
    ]
  }
};

function MetricCounter({ value, suffix, prefix, label, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
        {prefix}{count}{suffix}
      </div>
      <p className="text-sm sm:text-base text-gray-500 font-medium">{label}</p>
    </div>
  );
}

export default function MetricsSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {t.metrics.map((metric, index) => (
            <MetricCounter
              key={index}
              value={metric.value}
              suffix={metric.suffix}
              prefix={metric.prefix}
              label={metric.label}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}