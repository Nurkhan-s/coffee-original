import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';

let i18n: any;

export const SUPPORT_LOCALES = ['kaz', 'ru', 'en', 'uz'];

export function setI18nLanguage(locale: any) {
  loadLocaleMessages(locale);

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale.value = locale;
  }
  const htmlDoc = document.querySelector('html');
  htmlDoc?.setAttribute('lang', locale);
  localStorage.setItem('lang', locale);
}

export async function loadLocaleMessages(locale: any) {
  // load locale messages with dynamic import
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`
    );

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
}

export default function setupI18n() {
  if(!i18n) {
    let locale = localStorage.getItem('lang') || 'kaz';

    i18n = createI18n({
      globalInjection: true,
      legacy: false,
      locale: locale,
      fallbackLocale: 'kaz'
    });

    setI18nLanguage(locale);
  }
  return i18n;
}
