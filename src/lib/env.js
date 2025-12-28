/**
 * Environment variables helper
 * Access environment variables with proper typing and validation
 */

/**
 * Get environment variable with fallback
 * @param {string} key - Environment variable key (without VITE_ prefix)
 * @param {string} fallback - Fallback value if not found
 * @returns {string} - Environment variable value
 */
export function getEnv(key, fallback = '') {
  const value = import.meta.env[`VITE_${key}`];
  return value !== undefined ? value : fallback;
}

/**
 * Get boolean environment variable
 * @param {string} key - Environment variable key (without VITE_ prefix)
 * @param {boolean} fallback - Fallback value if not found
 * @returns {boolean} - Boolean value
 */
export function getEnvBool(key, fallback = false) {
  const value = import.meta.env[`VITE_${key}`];
  if (value === undefined) return fallback;
  return value === 'true' || value === '1';
}

/**
 * Environment configuration object
 */
export const env = {
  // Site Configuration
  siteUrl: getEnv('SITE_URL', 'https://automationsflow.com'),
  siteName: getEnv('SITE_NAME', 'Automation Flow'),
  contactEmail: getEnv('CONTACT_EMAIL', 'heli@automationsflow.com'),

  // Analytics
  gaMeasurementId: getEnv('GA_MEASUREMENT_ID', ''),

  // Email Service
  formspreeFormId: getEnv('FORMSPREE_FORM_ID', ''),
  emailjsServiceId: getEnv('EMAILJS_SERVICE_ID', ''),
  emailjsTemplateId: getEnv('EMAILJS_TEMPLATE_ID', ''),
  emailjsPublicKey: getEnv('EMAILJS_PUBLIC_KEY', ''),
  sendgridApiUrl: getEnv('SENDGRID_API_URL', ''),

  // Stripe
  stripePublishableKey: getEnv('STRIPE_PUBLISHABLE_KEY', ''),

  // Feature Flags
  enableChatWidget: getEnvBool('ENABLE_CHAT_WIDGET', false),
  enableAnalytics: getEnvBool('ENABLE_ANALYTICS', true),
  enablePWA: getEnvBool('ENABLE_PWA', true),

  // Development
  debugMode: getEnvBool('DEBUG_MODE', false),
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  mode: import.meta.env.MODE
};

export default env;
