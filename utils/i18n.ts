import { I18n } from 'i18n-js';
import en from '../locales/en.json';
import tk from '../locales/tk.json';

const i18n = new I18n({
  en,
  tk,
});

// Set the locale once at the beginning of your app
i18n.locale = 'tk'; // Default to Turkmen
i18n.enableFallback = true;
i18n.defaultLocale = 'tk';

export default i18n;

export const t = (key: string, options?: any) => i18n.t(key, options);
