import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'
import en from './en';
import pl from './pl';

i18next
    .use(initReactI18next)
    .init({
        fallbackLng: 'pl',
        lng: 'pl',
        resources: {
            en: {
                translation: en
            },
            pl: {
                translation: pl
            },
        }
    })