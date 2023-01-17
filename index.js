const Alexa = require('ask-sdk-core');
const handlers = require('./handlers');
const LocalizationInterceptor = require('./LocalizationInterceptor');
const ErrorHandler = require('./ErrorHandler');
const i18n = require('i18n');
const sprintf = require('i18n-sprintf-js').sprintf;
const {S3PersistenceAdapter} = require('ask-sdk-s3-persistence-adapter');

const skillBuilder = Alexa.SkillBuilders.custom()
const languageStrings = {
    en: {
        translation: {
            WELCOME_MESSAGE: 'Welcome to youtube, please request your song or video'
        }
    },
    es: {
        translation: {
            WELCOME_MESSAGE: "Bienvenido a youtube, solicita tu canción o video"
        }
    }
};

exports.handler = skillBuilder
    .addRequestHandlers(
        handlers.LaunchRequestHandler,
        handlers.PlayIntentHandler,
        handlers.PauseIntentHandler,
        handlers.ResumeIntentHandler,
        handlers.NextIntentHandler,
        handlers.PreviousIntentHandler,
    )
    .addErrorHandlers(ErrorHandler)
    .addRequestInterceptors(LocalizationInterceptor)
    .withCustomUserAgent('sample/This is Youtube Skill')
    .withApiClient(new Alexa.DefaultApiClient())
    .withPersistenceAdapter(new S3PersistenceAdapter({bucketName:process.env.S3_PERSISTENCE_BUCKET}))
    .lambda();
