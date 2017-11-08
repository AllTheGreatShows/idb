
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

function getFilterDataPodcasts(val){
    var url = "http://allthegreatshows.com/api/podcast?q={%22filters%22:[%20{%22name%22:%20%22genres%22,%20%22op%22:%20%22any%22,%20%22val%22:{%22name%22:%20%22name%22,%20%22op%22:%20%22ilike%22,%20%22val%22:%20%22" + val +"%22%20}%20}]}";
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
export {getPodcasts, getEpisodes, getGenres, getProviders, getAscending, getDescending, getFilterDataPodcasts, getFilterDataModels};