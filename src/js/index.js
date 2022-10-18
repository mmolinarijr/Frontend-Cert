import packageJson from '../../package.json' assert {type: 'json'};

$(document).ready(function () {
    getAppVersion();

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://type.fit/api/quotes",
        "method": "GET"
    };

    $.ajax(settings).done(function (response) {
        const data =  JSON.parse(response);
        const quoteText = $('.quote__text');
        const quoteAuthor = $('#author');
        const getNewQuote = $('#new-quote');

        $(getNewQuote).on('click', function () {
            let random = Math.floor(Math.random() * data.length);
            let newQuote = data[random];

            $(quoteText).text(newQuote.text);
            $(quoteAuthor).text(newQuote.author);

            if (newQuote.author === null) {
                $(quoteAuthor).text('Unknown');
            }
        })
    });
});

function getAppVersion() {
    const appVersion = packageJson.version;
    return $('#app-version').html(appVersion);
}



