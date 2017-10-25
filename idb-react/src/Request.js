
function getPodcasts() {
    var http_request = new XMLHttpRequest();
    http_request.open("GET", "http://allthegreatshows/api/podcasts", true);
    http_request.send();
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getEpisodes() {
    var http_request = new XMLHttpRequest();
    http_request.open("GET", "http://allthegreatshows/api/episodes", true);
    http_request.send();
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getGenres() {
    var http_request = new XMLHttpRequest();
    http_request.open("GET", "http://allthegreatshows/api/genres", true);
    http_request.send();
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getProviders() {
    var http_request = new XMLHttpRequest();
    http_request.open("GET", "http://allthegreatshows/api/providers", true);
    http_request.send();
    var response = JSON.parse(http_request.responseText);
    return response;
}