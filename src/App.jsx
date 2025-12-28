import './App.css'
import { Suspense } from 'react'
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import NavigationTracker from '@/lib/NavigationTracker'
import LanguageRouter, { SUPPORTED_LANGUAGES } from '@/lib/LanguageRouter'
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LayoutWrapper = ({ children, currentPageName }) => {
  const content = (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      {children}
    </Suspense>
  );

  return Layout ?
    <Layout currentPageName={currentPageName}>{content}</Layout>
    : content;
};

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <NavigationTracker />
        <LanguageRouter />
        <Routes>
          {/* Default language routes (no prefix) */}
          <Route path="/" element={
            <LayoutWrapper currentPageName={mainPageKey}>
              <MainPage />
            </LayoutWrapper>
          } />
          {Object.entries(Pages).map(([path, Page]) => (
            <Route
              key={path}
              path={`/${path}`}
              element={
                <LayoutWrapper currentPageName={path}>
                  <Page />
                </LayoutWrapper>
              }
            />
          ))}

          {/* Language-prefixed routes */}
          {SUPPORTED_LANGUAGES.map(lang => (
            <Route key={`${lang}-root`} path={`/${lang}`} element={
              <LayoutWrapper currentPageName={mainPageKey}>
                <MainPage />
              </LayoutWrapper>
            } />
          ))}
          {SUPPORTED_LANGUAGES.map(lang =>
            Object.entries(Pages).map(([path, Page]) => (
              <Route
                key={`${lang}-${path}`}
                path={`/${lang}/${path}`}
                element={
                  <LayoutWrapper currentPageName={path}>
                    <Page />
                  </LayoutWrapper>
                }
              />
            ))
          )}

          {/* 404 Page */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  )
}

export default App
