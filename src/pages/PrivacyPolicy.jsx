import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to={createPageUrl('Home')} 
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy & Accessibility</h1>
          <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString('en-US')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          {/* Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. General</h3>
                <p>
                  Automation Flow ("the Company", "we", "our") respects your privacy and is committed to protecting your personal information. 
                  This privacy policy explains how we collect, use, and protect your information in accordance with applicable privacy laws and regulations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Information Collection</h3>
                <p className="mb-2">We collect information in the following ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Information you provide: name, email address, company details, and message content submitted through contact forms</li>
                  <li>Automatically collected information: IP address, browser type, operating system, pages visited, and access times</li>
                  <li>Cookies: We use cookies to improve user experience, analyze site traffic, and personalize content</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Use of Information</h3>
                <p className="mb-2">We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and improve our services</li>
                  <li>To respond to your inquiries and requests</li>
                  <li>To send marketing communications (only with your explicit consent)</li>
                  <li>To analyze and improve website performance</li>
                  <li>To comply with legal and regulatory requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Information Sharing</h3>
                <p>
                  We do not sell or share your personal information with third parties, except in the following cases:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Service providers who assist in operating the website and our services</li>
                  <li>When required by law or court order</li>
                  <li>To protect our rights, property, or safety</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h3>
                <p>
                  We implement reasonable security measures to protect your information from unauthorized access, modification, disclosure, or destruction. 
                  However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h3>
                <p className="mb-2">In accordance with privacy laws, you have the following rights:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The right to access your information</li>
                  <li>The right to correct inaccurate or incomplete information</li>
                  <li>The right to delete your information (subject to legal exceptions)</li>
                  <li>The right to object to the use of your information for marketing purposes</li>
                  <li>The right to withdraw consent previously given</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Cookies</h3>
                <p>
                  This website uses cookies to improve your browsing experience. Cookies are small text files stored on your computer. 
                  You can refuse cookies through your browser settings, but this may limit the use of certain website features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Policy Changes</h3>
                <p>
                  We reserve the right to update this policy from time to time. Material changes will be posted on the website 
                  and will include the last updated date.
                </p>
              </div>
              </div>
              </section>

          {/* Accessibility Statement */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Statement</h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. General</h3>
                <p>
                  Automation Flow is committed to making our website accessible to people with disabilities and enabling them to browse 
                  the site comfortably, in accordance with accessibility standards and regulations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Accessibility Features</h3>
                <p className="mb-2">The website is accessible through several measures:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Keyboard-only navigation support</li>
                  <li>Clear hierarchical page structure with marked headings</li>
                  <li>Structured content with proper semantic HTML tags</li>
                  <li>Appropriate color contrast according to WCAG guidelines</li>
                  <li>Alternative text (Alt Text) for images</li>
                  <li>Screen reader compatibility</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Accessibility Level</h3>
                <p>
                  The website conforms to Level AA of the WCAG 2.1 (Web Content Accessibility Guidelines). 
                  We continuously work to improve and expand accessibility on the site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Supported Browsers</h3>
                <p className="mb-2">The website supports the latest versions of the following browsers:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Google Chrome</li>
                  <li>Mozilla Firefox</li>
                  <li>Microsoft Edge</li>
                  <li>Safari</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Issues and Limitations</h3>
                <p>
                  Despite our efforts to make the website fully accessible, some parts may not yet be completely accessible. 
                  We continue to work on improving accessibility and welcome your feedback.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Accessibility Coordinator</h3>
                <p>
                  If you encounter an accessibility issue on the site, please contact us:
                </p>
                <ul className="list-none space-y-1 ml-4 mt-2">
                  <li><strong>Accessibility Coordinator:</strong> Automation Flow</li>
                  <li><strong>Email:</strong> hello@automationsflow.com</li>
                  <li><strong>Response Time:</strong> We will make every effort to respond within 7 business days</li>
                </ul>
              </div>
              </div>
              </section>

          {/* Contact Section */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-2">
              <p className="text-gray-700">
                For questions, clarifications, or requests regarding privacy and accessibility, please contact:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> hello@automationsflow.com
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong> automationsflow.com
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}