$(document).ready(function() {
    $.getJSON('http://hawttrends.appspot.com/api/terms/', function(data) {
        var hotTrends = [];

        $.each(data, function(key, val) {
            if (key == 38) {
                $.each(val, function(rank, text) {
                    hotTrends.push(text);
                    $("#trends").append('<li>' + text + '</li>');  
                });    
            };
        });

        
    });
});
