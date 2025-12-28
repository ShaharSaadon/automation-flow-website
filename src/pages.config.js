import { lazy } from 'react';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "PrivacyPolicy": PrivacyPolicy,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};