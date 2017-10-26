
function getPodcasts() {
    var http_request = new XMLHttpRequest();
    http_request.open("GET", "http://allthegreatshows.com/api/podcast", true);
    http_request.send();
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getEpisodes() {
    var http_request = new XMLHttpRequest();
    http_request.open("GET", "http://allthegreatshows.com/api/episodes", true);
    http_request.send();
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getGenres() {
    var http_request = new XMLHttpRequest();
    http_request.open("GET", "http://allthegreatshows.com/api/genres", true);
    http_request.send();
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getProviders() {
    var http_request = new XMLHttpRequest();
    http_request.open("GET", "http://allthegreatshows.com/api/providers", true);
    http_request.send();
    var response = JSON.parse(http_request.responseText);
    return response;
}

export {getPodcasts, getEpisodes, getGenres, getProviders};