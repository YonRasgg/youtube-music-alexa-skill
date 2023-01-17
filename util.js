const youtube = require('youtube-api');

// Autenticate YouTube API key
youtube.authenticate({
    type: 'key',
    key: 'YOUTUBE_API_KEY'//GOOGLE DEVELOPER ACCOUNT IS NEEDED 
});

exports.searchAndPlay = async function(song) {
    // Search for the song on YouTube using youtube-api
    const searchResults = await youtube.search.list({
        q:song,
        part:'id'
    });
    
    // play the song on YouTube using youtube-api
    youtube.play(searchResults.items[0].id.videoId);
    return `Playing ${song} on YouTube Music`;
}

exports.pause = function() {
    // Pause playback on YouTube using youtube-api
    youtube.pause();
    return 'Pausing music on YouTube Music';
}