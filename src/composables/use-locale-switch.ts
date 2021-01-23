/* istanbul ignore file */
export const useLocaleSwitch = (i18n: any) => {
  const loadedMessages: any = {};

  const setI18nLocale = (locale: string, messages: any) => {
    i18n.locale = locale;
    document.querySelector('html').setAttribute('lang', locale.substr(0, 2));
    i18n.setLocale(locale);
    i18n.setLocaleCookie(locale);
    i18n.setLocaleMessage(locale, messages);
  };

  const switchLocaleTo = async (locale: string) => {
    let messages = loadedMessages[locale];

    if (i18n.locale !== locale && !messages) {
      const module = await import(/* webpackChunkName: "lang-[request]" */ `~/../i18n/${locale}.json`);

      messages = module.default;
      loadedMessages[locale] = messages;
    }

    setI18nLocale(locale, messages);
  };

  return {
    switchLocaleTo,
  };
};
