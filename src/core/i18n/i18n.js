import strings from './strings.json';
import {lang, defaultLang} from '../../config';

const getString = (key, language = lang) => key.split('.').reduce((res,part) => res && res[part] ,strings[language]);
const valueIterator = (values) => {
    function* generator() {
        for (let i = 0; i < values.length; i++) {
            yield values[i];
        }
    }
    const gen = generator();
    return () => {
        return gen.next().value;
    }
};


export default {
    getString(key) {
        return getString(key) || getString(key, defaultLang) || key;
    },

    formatString(key, ...values) {
        return this.getString(key).replace(/\{\}/g, valueIterator(values));
    }
}