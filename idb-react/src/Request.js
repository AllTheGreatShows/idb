
function getPodcasts() {
    var http_request = new XMLHttpRequest();
    http_request.open("GET", "http://allthegreatshows.com/api/podcast", false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getEpisodes() {
    var http_request = new XMLHttpRequest();
    http_request.open("GET", "http://allthegreatshows.com/api/episode", false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getGenres() {
    var http_request = new XMLHttpRequest();
    http_request.open("GET", "http://allthegreatshows.com/api/genre", false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getProviders() {
    var http_request = new XMLHttpRequest();
    http_request.open("GET", "http://allthegreatshows.com/api/provider", false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

export {getPodcasts, getEpisodes, getGenres, getProviders};