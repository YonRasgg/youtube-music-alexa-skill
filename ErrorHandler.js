const Alexa = require('ask-sdk-core');

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak('Sorry, an error occurred. Please try again later.')
            .reprompt('Sorry, an error occurred. Please try again later.')
            .getResponse();
    },
};

module.exports = ErrorHandler;