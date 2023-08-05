import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import i18next from 'i18next'
import { initReactI18next, I18nextProvider } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { UserContextProvider } from "../src/Account/authContext/AuthContext";
import { Suspense } from 'react';
import Loading from './components/loading/Loading.tsx';

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['EN', 'AR', 'FR', "DE", "ES", "IT", "PT", "RU", "TR", "ZH"],
    fallbackLng: 'EN',
    debug: false,
    detection: {
      order: ['queryString', 'path', 'cookie'],
      caches: ['cookie'],
      lookupCookie: 'website#lang',
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    wait: true, // Add this line to wait for i18next initialization

    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false
    },
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <I18nextProvider i18n={i18next}>
          <Suspense fallback={<Loading height={100} />}>
            <App />
          </Suspense>
        </I18nextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode >
);

reportWebVitals();
