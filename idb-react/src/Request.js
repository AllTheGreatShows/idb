
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

function getAscending(val, type, page=1) {
    var http_request = new XMLHttpRequest();
    console.log(val)
    console.log(type)
    if(val == "title")
        var url = "http://allthegreatshows.com/api/" + type + "?q={%22order_by%22:[{%22field%22:%22title%22,%20%22direction%22:%22asc%22}]}&page=" + page;
    else
        var url = "http://allthegreatshows.com/api/" + type + "?q={%22order_by%22:[{%22field%22:%22name%22,%20%22direction%22:%22asc%22}]}&page=" + page;    
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getDescending(val, type, page=1) {
    var http_request = new XMLHttpRequest();
    if(val == "title")
        var url = "http://allthegreatshows.com/api/" + type + "?q={%22order_by%22:[{%22field%22:%22title%22,%20%22direction%22:%22desc%22}]}&page=" + page;
    else
        var url = "http://allthegreatshows.com/api/" + type + "?q={%22order_by%22:[{%22field%22:%22name%22,%20%22direction%22:%22desc%22}]}&page=" + page;
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getFilterDataPodcasts(val){
    var url = "http://allthegreatshows.com/api/podcast?q={%22filters%22:[%20{%22name%22:%20%22genres%22,%20%22op%22:%20%22any%22,%20%22val%22:{%22name%22:%20%22name%22,%20%22op%22:%20%22ilike%22,%20%22val%22:%20%22" + val +"%22%20}%20}]}";
    var http_request = new XMLHttpRequest();
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);//Needs to JSON.parse()
    console.log(response);

    return response;
}

function getFilterDataModels(type, val){
    if(type == "provider" || type == "genre")
        var url = "http://allthegreatshows.com/api/" + type+ "?q={%22filters%22:[%20{%22name%22:%20%22name%22,%20%22op%22:%20%22like%22,%20%22val%22:%22" + val + "%%22%20}]}";
    else
        var url = "http://allthegreatshows.com/api/" + type+ "?q={%22filters%22:[%20{%22name%22:%20%22title%22,%20%22op%22:%20%22like%22,%20%22val%22:%22" + val + "%%22%20}]}";
    var http_request = new XMLHttpRequest();
    http_request.open("GET", url, false);
    http_request.send(null);
    try {
        var response = JSON.parse(http_request.responseText);
    }
    catch(err) {
        var response="";
    }
    return response;
}

function getPodcastsID(id) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/podcast/" + id;
    http_request.open("GET", url, false);    
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getEpisodesID(id) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/episode/" + id;
    http_request.open("GET", url, false);    
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getGenresID(id) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/genre/" + id;
    http_request.open("GET", url, false);    
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}

function getProvidersID(id) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/provider/" + id;
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

export {getPodcasts, getEpisodes, getGenres, getProviders, getAscending, getDescending, getFilterDataPodcasts, getFilterDataModels};
export {getPodcastsID, getEpisodesID, getGenresID, getProvidersID};
export {getPodcastSearch, getEpisodeSearch, getGenreSearch, getProviderSearch};
