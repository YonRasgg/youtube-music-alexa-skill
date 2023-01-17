const Alexa = require('ask-sdk-core');
const util = require('../util');

const PlayIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PlayIntent';
    },
    async handle(handlerInput) {
        // Get the name of the song to play
        const song = handlerInput.requestEnvelope.request.intent.slots.song.value;