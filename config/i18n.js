const i18next = require('i18next');
const backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');


const PATH_TRANSLATIONS_FILE="i18nlocals/{{lng}}/translations.json"



i18next.use(backend).use(middleware.LanguageDetector)
    .init({
        fallbackLng:'en',
        backend:{
            loadPath:PATH_TRANSLATIONS_FILE,
        }
})

module.exports = middleware.handle(i18next);