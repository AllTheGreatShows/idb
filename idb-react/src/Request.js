
function getPodcasts(page=1) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/podcast?page=" + page;
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getEpisodes(page=1) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/episode?page=" + page;
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getGenres(page=1) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/genre?page=" + page;
    http_request.open("GET", url, false);    
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getProviders(page=1) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/provider?page=" + page;
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

export {getPodcasts, getEpisodes, getGenres, getProviders};