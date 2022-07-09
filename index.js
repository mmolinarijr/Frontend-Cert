import packageJson from '/package.json' assert {type: 'json'};

$(document).ready( function (){
    getAppVersion()
    getQuotes()
    setQuotes()
    setBackgroundColor()
    temp()
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

function setQuotes() {
    const quotes = getQuotes();

    return console.log('quotes')

    // return $('#new-quote').on('click', function (){
    //     $("#text").html(quotes);
    // });
}

function setBackgroundColor() {
    // const randomColor = Math.floor(Math.random()*16777214).toString(16);
    // const configRandomColor = `#${randomColor}`;
    // const btn = document.getElementById('new-quote');
    //
    // return btn.addEventListener('click', function onClick(event) {
    //     document.body.style.backgroundColor = '#' + randomColor;
    // })

    // return document.getElementById("new-quote").style.backgroundColor = '#' + randomColor;
}

