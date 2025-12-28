import React, { useEffect } from 'react';
import CookieConsent from './components/CookieConsent';
import { LanguageProvider } from './components/LanguageContext';

export default function Layout({ children }) {
  useEffect(() => {
    // Google Analytics - base scripts
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-8ZJDBC58W7';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    `;
    document.head.appendChild(script2);

    // Microsoft Clarity
    const clarityScript = document.createElement('script');
    clarityScript.innerHTML = `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "umvd0lnd4l");
    `;
    document.head.appendChild(clarityScript);

    // Only configure GA if user accepted cookies
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      const script3 = document.createElement('script');
      script3.innerHTML = `gtag('config', 'G-8ZJDBC58W7');`;
      document.head.appendChild(script3);
    }
  }, []);
  return (
    <LanguageProvider>
    <div className="font-sans antialiased">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        :root {
          --color-primary: #3B82F6;
          --color-secondary: #8B5CF6;
        }
      `}</style>
      {children}
      <CookieConsent />
      </div>
      </LanguageProvider>
      );
      }