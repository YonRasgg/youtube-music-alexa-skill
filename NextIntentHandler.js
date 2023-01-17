const NextIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'NextIntent';
    },
    handle(handlerInput) {
        // your logic to play the next song goes here
        const speechText = 'Playing the next song.';

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

module.exports = NextIntentHandler;