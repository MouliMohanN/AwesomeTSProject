import memoize from 'lodash.memoize';
import i18n from 'i18n-js';

const translate = memoize(
  (key: string, config?) => {
    return i18n.t(key, config);
  },
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export {translate};
