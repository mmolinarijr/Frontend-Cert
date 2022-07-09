$(document).ready(
    getAppVersion(),
    getQuotes(),
    setQuotes(),
    setBackgroundColor()
)

import packageJson from '/package.json' assert {type: 'json'};

function getAppVersion() {
    const appVersion = packageJson.version;
    return $('#app-version').html(appVersion);
}

function getQuotes() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://type.fit/api/quotes",
        "method": "GET"
    };

    return $.ajax(settings).done(function (response) {
        const data = JSON.parse(response);
        return console.log(data);
    });
}

function setQuotes() {
    const quotes = getQuotes();

    return $('#new-quote').on('click', function (){
        $("#text").html(quotes)
    });
}

function setBackgroundColor() {
    const colors = ['blue', 'black', 'green'];

    return console.log(colors)

}

