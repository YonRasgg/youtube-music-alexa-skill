const PreviousIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PreviousIntent';
    },
    handle(handlerInput) {
        // your logic to play the previoussong goes here
        const speechText = 'Playing the previoussong.';

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

module.ex