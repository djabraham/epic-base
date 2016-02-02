/* index.js */
import { default as Debug } from 'react-debugger';

// load valid locales (according to ISO)
const _localeList = require('./locales.js');  // {}

// var _availableLocales = [];
const _availableLocales = {
  'default': require('./en.js'),
  'en-GB': require('./en-gb.js'),
  'fr-BE': require('./fr-be.js')
};

let _activeLocale = 'default';

// var findMin = function(src) {
const findMin = function(src) {
  var min = -1;
  var idx;
  idx = src.search(/{(\w+)}/);
  if( idx !== -1 && (min === -1 || idx < min )){
    min = idx;
  }
  if( min === -1 ) {
    min = src.length;
  }
  return min;
};

// var parse = function(src, props) {
const parse = function(src, props) {
  var ended = false;
  var tokens = [];

  do {
    var min = findMin(src);
    var plain = src.slice(0, min);
    tokens.push(plain);
    src = src.slice(min).replace(/{(\w+)}/, function(all) {
      var name = all.substring(1,all.length-1).trim();
      var subs = props[name];
      if (!subs) {
        throw new Error('Could not find property for: ' + name);
      }
      tokens.push(subs);
      return '';
    });
    if(!src) {
      ended = true;
    }
  }
  while(!ended);

  var result = tokens.join('');
  return result;
};

// Create an object
module.exports = {

  // getLocalesNames: function() {
  //   var array = [];
  //   _availableLocales.forEach( function(code, index){
  //     var name = _localeList[code];
  //     array.push({code:code, name:name});
  //   });
  //   return array;
  // },

  orderLocalesByRFC4647: function() {

    var locales = [];

    // if the the locale does not already exist in the list and it is one
    // of the available locales then we add it into the list at the end.
    function insertLocale(l) {
      if (locales.indexOf(l) === -1 && _availableLocales[l]) {
        locales.push(l);
      }
    }

    // use RFC 4647 => (locales & how to match laguages)
    // en-GB,en;q=0.8,en-US;q=0.6;es-ES,es;q=0.1
    var langs = navigator.languages || [] + navigator.browserLanguage || [] + navigator.userLanguage;

    langs.forEach(function(locale) {

      insertLocale(locale);

      // if its a full locale then also check the language part only
      if ( locale.indexOf('-') ) {
        var lang = locale.split('-')[0];
        insertLocale(lang);
      }
    });

    // [ 'en-GB', 'en', 'en-US', 'es-ES' , 'es']
    return locales;
  },

  setLocale: function(locale) {

    // ensure locale format
    // locale.split('-')[0].toLowerCase()+'-'+locale.split('-')[1].toUpperCase(;)
    // if (_availableLocales.indexOf(locale) !== -1) {
    //   _activeLocale = locale;
    //   return;
    // }

    // If there is an Exact MATCH for the full locale
    if ( _availableLocales[locale] ) {
      _activeLocale = locale;
      Debug( 'Strings', 'Set locale to ' + _activeLocale);
      return;
    }

    // then just consider the language part of the locale
    if( locale.indexOf('-') !== -1 ) {
      var lang = locale.split('-')[0].toLowerCase;

      // is there an exact 'generic' version of the language file ?
      if ( _availableLocales[lang] ) {
        _activeLocale = lang;
        Debug( 'Strings', 'Set locale to ' + _activeLocale);
        return;
      }

      // with the language part find the first 'matching' partial locale from
      // the list of available locales and langs ordered by user prefeence...
      var locales = orderLocalesByRFC4647();
      for(var i=0; i<locales.length ; i++) {
        var value = locales[i];
        if (value.indexOf(lang) === 0) {
          _activeLocale = value;
          Debug( 'Strings', 'Set locale to ' + _activeLocale);
          return;
        }
      }
    }

    // leave whatever was previoulsy set unchanged;
    Debug( 'Strings', 'Left locale set at ' + _activeLocale);
  },

  get: function (name, props) {
    var res, text;
    var key = name.toLowerCase().trim();

    // use the 'locale' or 'language' that has been set previously and
    // match a string if one can be matched
    if (_activeLocale !== undefined && _activeLocale !== 'default' ) {
      res = _availableLocales[_activeLocale];
      text = res[key];
      if (text) {
        return parse(text,props);
      }
    }

    // use the default  (if no locale set) or as a fallback if no 'match' found in explicit locale
    res = _availableLocales['default'];
    text = res[key];
    if (text) {
      return parse(text,props);
    }

    throw new Error('Did not get translation for: ' + key);
  },

  getCurrentLocale: function() {
    return _activeLocale || 'default';
  }

};
