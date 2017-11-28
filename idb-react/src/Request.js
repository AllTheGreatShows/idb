
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
// *******************************
function getFilterDataPodcast(val, page=1){
    // console.log("val is: " + val);
    if (val == null) {
        return getPodcasts(page);
    }
    // one word starts with the letter
    var url = "http://allthegreatshows.com/api/podcast?q={%22filters%22:[{%22or%22:[{%22val%22:%22% " + val + "%%22,%22name%22:%22title%22,%22op%22:%22ilike%22}]}]}&page=1";
    console.log("querying url " + url);
    var http_request = new XMLHttpRequest();
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = "";
    try {
        response = JSON.parse(http_request.responseText);
        // the response is correct
        // does it get to Grid just fine though?
        console.log(response);

        // adding a force update here does nothing
        // this.forceUpdate();
    }
    catch(err) {
    }
    return response;
}

// URL does not work with genre
function getFilterDataGenre(val, page=1){
    if (val == null) {
        return getGenres(page);
    }
    // this does not work
    var url = "http://allthegreatshows.com/api/genre?q={%22filters%22:[{%22or%22:[{%22val%22:%22% " + val + "%%22,%22name%22:%22title%22,%22op%22:%22ilike%22}]}]}&page=1";
    console.log("querying url " + url);
    var http_request = new XMLHttpRequest();
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = "";
    try {
        response = JSON.parse(http_request.responseText);
        console.log(response);
    }
    catch(err) {
    }
    return response;
}

// URL does not work with genre
function getFilterDataProvider(val, page=1){
    if (val == null) {
        return getProviders(page);
    }
    // this does not work
    var url = "http://allthegreatshows.com/api/provider?q={%22filters%22:[{%22or%22:[{%22val%22:%22% " + val + "%%22,%22name%22:%22title%22,%22op%22:%22ilike%22}]}]}&page=1";
    console.log("querying url " + url);
    var http_request = new XMLHttpRequest();
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = "";
    try {
        response = JSON.parse(http_request.responseText);
        console.log(response);
    }
    catch(err) {
    }
    return response;
}

// URL does not work with genre
function getFilterDataEpisode(val, page=1){
    if (val == null) {
        return getEpisodes(page);
    }
    // this does not work
    var url = "http://allthegreatshows.com/api/episode?q={%22filters%22:[{%22or%22:[{%22val%22:%22% " + val + "%%22,%22name%22:%22title%22,%22op%22:%22ilike%22}]}]}&page=1";
    console.log("querying url " + url);
    var http_request = new XMLHttpRequest();
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = "";
    try {
        response = JSON.parse(http_request.responseText);
        console.log(response);
    }
    catch(err) {
    }
    return response;
}
// *******************************

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

// Search Functions
function getPodcastSearch(term, page=1) {
    var http_request = new XMLHttpRequest();
    //var url = "http://allthegreatshows.com/api/search/podcast/" + term+ "?page=" + page;
    var url = "http://allthegreatshows.com/api/podcast?q={%22filters%22:[{%22or%22:[{%22op%22:%22ilike%22,%22name%22:%22title%22,%22val%22:%22%"+term+"%%22}]}]}&page=" + page;
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}
function getEpisodeSearch(term, page=1) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/episode?q={%22filters%22:[{%22or%22:[{%22val%22:%22%"+term+"%%22,%22name%22:%22title%22,%22op%22:%22ilike%22}]}]}&page=" + page;
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}
function getGenreSearch(term, page=1) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/genre?q={%22filters%22:[{%22or%22:[{%22name%22:%22name%22,%22op%22:%22ilike%22,%22val%22:%22%"+term+"%%22}]}]}&page=" + page;
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}
function getProviderSearch(term, page=1) {
    var http_request = new XMLHttpRequest();
    var url = "http://allthegreatshows.com/api/provider?q={%22filters%22:[{%22or%22:[{%22name%22:%22name%22,%22op%22:%22ilike%22,%22val%22:%22%"+term+"%%22}]}]}&page=" + page;
    http_request.open("GET", url, false);
    http_request.send(null);
    var response = JSON.parse(http_request.responseText);
    return response;
}


export {getPodcasts, getEpisodes, getGenres, getProviders, getAscending, getDescending, getFilterDataPodcast, getFilterDataGenre, getFilterDataEpisode, getFilterDataProvider, getFilterDataModels};
export {getPodcastsID, getEpisodesID, getGenresID, getProvidersID};
export {getProviderSearch, getPodcastSearch, getEpisodeSearch, getGenreSearch};

