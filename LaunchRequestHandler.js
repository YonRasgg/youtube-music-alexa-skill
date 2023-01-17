const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    async handle(handlerInput) {
        let speakOutput = 'Welcome to YouTube Music. ';
        let previous_state = await getPreviousState();
        if(previous_state){
            speakOutput += `You were last listening to ${previous_state}. `
        }
        speakOutput += 'You can ask me to play a song, pause, skip, or ask for the current song. What would you like to do?';
        let suggestions = await getSuggestions();
        speakOutput += ` Here are some popular suggestions ${suggestions.join(', ')}.`
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};