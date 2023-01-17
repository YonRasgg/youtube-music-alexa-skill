const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Welcome, you can say play or pause to control the audio').getResponse();
    }
};

const PlayIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PlayIntent';
    },
    handle(handlerInput) {
        // Code to play audio or video here
        return handlerInput.responseBuilder.speak('Playing...').getResponse();
    }
};

const PauseIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PauseIntent';
    },
    handle(handlerInput) {
        // Code to pause audio or video here
        return handlerInput.responseBuilder.speak('Pausing...').getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.standard()
    .addRequestHandlers(
        LaunchRequestHandler,
        PlayIntentHandler,
        PauseIntentHandler
    )
    .lambda();