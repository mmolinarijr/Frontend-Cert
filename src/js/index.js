import packageJson from '../../package.json' assert {type: 'json'};

$(document).ready(function () {
    getAppVersion();
});

function getAppVersion() {
    const appVersion = packageJson.version;
    return $('#app-version').html(appVersion);
}



