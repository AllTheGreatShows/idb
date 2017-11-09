
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

function getAscending(val, type) {
    var http_request = new XMLHttpRequest();
    console.log(val)
    console.log(type)
    if(val == "title")
        var url = "http://allthegreatshows.com/api/" + type + "?q={%22order_by%22:[{%22field%22:%22title%22,%20%22direction%22:%22asc%22}]}";
    else
        var url = "http://allthegreatshows.com/api/" + type + "?q={%22order_by%22:[{%22field%22:%22name%22,%20%22direction%22:%22asc%22}]}";    
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getDescending(val, type) {
    var http_request = new XMLHttpRequest();
    if(val == "title")
        var url = "http://allthegreatshows.com/api/" + type + "?q={%22order_by%22:[{%22field%22:%22title%22,%20%22direction%22:%22desc%22}]}";
    else
        var url = "http://allthegreatshows.com/api/" + type + "?q={%22order_by%22:[{%22field%22:%22name%22,%20%22direction%22:%22desc%22}]}";
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getPodcastSearch(term, page=1) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/search/podcast/" + term+ "?page=" + page;
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = http_request.responseText;//Needs to JSON.parse()
    console.log(response);
    return response;
}
function getEpisodeSearch(term, page=1) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/search/episode/" + term +"?page=" + page;
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = http_request.responseText;//Needs to JSON.parse()
    console.log(response);
    return response;
}
function getGenreSearch(term, page=1) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/search/genre/" + term + "?page=" + page;
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = http_request.responseText;//Needs to JSON.parse()
    console.log(response);
    return response;
}
function getProviderSearch(term, page=1) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/search/provider/" + term + "?page=" + page;
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = http_request.responseText;//Needs to JSON.parse()
    console.log(response);
    return response;
}

export {getPodcasts, getEpisodes, getGenres, getProviders, getAscending, getDescending, getEpisodeSearch,
     getGenreSearch, getPodcastSearch, getProviderSearch};