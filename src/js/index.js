import packageJson from '../../package.json' assert {type: 'json'};
import {getColors, setBackgroundColor} from "./colors.js";

$(document).ready( function (){
    getAppVersion()
    getQuotes()
    setQuotes()
    setBackgroundColor()
    getColors()
})

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

function setQuotes(data) {
    let quoteText = $('.quote__text')
    let quotes = getQuotes(data);

    console.log('1', quotes);

    return $('#new-quote').on('click', function () {
        $('.quote__text').text(getQuotes(text));
    })

    // return $('#new-quote').on('click', function (){
    //     $("#text").html(quotes);
    // });
}



