(function (app) {
    var stryket = $.getJSON(
        "https://api.www.svenskaspel.se/draw/stryktipset/draws/result?callback=?");
    stryket.done(function (result) {
        console.log(result["result"]);
    });
})();