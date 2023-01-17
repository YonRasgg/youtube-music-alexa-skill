const ResumeIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ResumeIntent';
    },
    handle(handlerInput) {
        // your logic to resume the music goes here
        const speechText = 'Resuming the music.';

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

module.exports = ResumeIntentHandler;