import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Supported languages
 */
export const SUPPORTED_LANGUAGES = ['en', 'he'];
export const DEFAULT_LANGUAGE = 'en';

/**
 * Extract language from pathname
 * @param {string} pathname - Current pathname
 * @returns {Object} - { language, pathWithoutLang }
 */
export function extractLanguageFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (SUPPORTED_LANGUAGES.includes(firstSegment)) {
    return {
      language: firstSegment,
      pathWithoutLang: '/' + segments.slice(1).join('/')
    };
  }

  return {
    language: DEFAULT_LANGUAGE,
    pathWithoutLang: pathname
  };
}

/**
 * Language Router Hook
 * Syncs URL language with i18next
 */
export function useLanguageRouter() {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const { language } = extractLanguageFromPath(location.pathname);

    // Sync i18n language with URL language
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [location.pathname, i18n]);

  /**
   * Change language and update URL
   * @param {string} newLanguage - Target language code
   */
  const changeLanguage = (newLanguage) => {
    if (!SUPPORTED_LANGUAGES.includes(newLanguage)) {
      console.warn(`Language ${newLanguage} is not supported`);
      return;
    }

    const { pathWithoutLang } = extractLanguageFromPath(location.pathname);

    // Build new path with language prefix (except for default language)
    const newPath = newLanguage === DEFAULT_LANGUAGE
      ? pathWithoutLang
      : `/${newLanguage}${pathWithoutLang}`;

    // Update i18n language
    i18n.changeLanguage(newLanguage);

    // Navigate to new path
    navigate(newPath, { replace: true });
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    languages: SUPPORTED_LANGUAGES
  };
}

/**
 * LanguageRouter Component
 * Place this inside <Router> to sync URL language with i18next
 */
export default function LanguageRouter() {
  useLanguageRouter();
  return null;
}
