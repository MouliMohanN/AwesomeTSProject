import memoize from 'lodash.memoize';
import i18n from 'i18n-js';
import {I18nManager} from 'react-native';
import * as RNLocalize from 'react-native-localize';

const translationGetters = {
  en: () => require('../translations/en.json'),
  fr: () => require('../translations/fr.json'),
};

const translate = memoize(
  (key: string, config?) => {
    return i18n.t(key, config);
  },
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const setI18nConfig = () => {
  const {languageTag, isRTL} = RNLocalize.findBestAvailableLanguage(
    Object.keys(translationGetters),
  ) || {
    languageTag: 'en',
    isRTL: false,
  };

  I18nManager.forceRTL(isRTL);
  i18n.translations = {
    [languageTag]: (translationGetters as any)[languageTag](),
  };
  i18n.locale = languageTag;
};

export {setI18nConfig, translate};
