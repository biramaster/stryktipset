(function (app) {
    var stryket = $.getJSON(
        "https://api.www.svenskaspel.se/draw/stryktipset/draws/result?callback=?");
    stryket.done(function (result) {
        result["result"]["events"].forEach(function (game,i) {
            console.log(game["participants"][0]["name"]+ " -VS- " +
                        game["participants"][1]["name"]+ " Result: " + 
                        game["outcome"]);
            var tr = $("<tr/>");
            tr.append("<td>" + (i+1) + "</td>");
            tr.append("<td>" + game["participants"][0]["name"] + " -VS- " +
                               game["participants"][1]["name"] + 
                      "</td>");
            tr.append("<td>" + game["outcome"] + "</td>");
            tr.append("<td>" + game["outcome"] + "</td>");
            tr.append("<td>" + game["outcome"] + "</td>");
            $("#table").append(tr);
        });
        console.log(result["result"]);
    });
})();