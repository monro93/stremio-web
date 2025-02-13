// Copyright (C) 2017-2023 Smart code 203358507
import 'intl-pluralrules'

if (typeof process.env.SENTRY_DSN === 'string') {
    const Sentry = require('@sentry/browser');
    Sentry.init({ dsn: process.env.SENTRY_DSN });
}

const Bowser = require('bowser');
const browser = Bowser.parse(window.navigator?.userAgent || '');
if (browser?.platform?.type === 'desktop') {
    document.querySelector('meta[name="viewport"]')?.setAttribute('content', '');
}

const React = require('react');
const ReactDOM = require('react-dom/client');
const i18n = require('i18next');
const { initReactI18next } = require('react-i18next');
const stremioTranslations = require('stremio-translations');
const App = require('./App');

function fromEntries (iterable) {
    return [...iterable].reduce((obj, [key, val]) => {
        obj[key] = val;
        return obj;
    }, {});
}

const translations = fromEntries(Object.entries(stremioTranslations()).map(([key, value]) => [key, {
    translation: value
}]));

i18n
    .use(initReactI18next)
    .init({
        resources: translations,
        lng: 'en-US',
        fallbackLng: 'en-US',
        interpolation: {
            escapeValue: false
        }
    });

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

if (process.env.NODE_ENV === 'production2' && 'serviceWorker' in navigator) {
    function getWorkerURL( url ) {
        const content = `importScripts( "${ url }" );`;
        return URL.createObjectURL( new Blob( [ content ], { type: "text/javascript" } ) );
      }
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(getWorkerURL("https://monro93.github.io/stremio-web/public/service-worker.js"))
            .catch((registrationError) => {
                console.error('SW registration failed: ', registrationError);
            });
    });
}
