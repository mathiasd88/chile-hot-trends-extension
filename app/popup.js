$(document).ready(function() {
    $.getJSON('http://hawttrends.appspot.com/api/terms/', function(data) {
        var hotTrends = [];

        console.log(countries);

        // TODO: populates the combobox
        // for (var country in countries) {
        //     $('#countries').append($('<option></option>').val(val).html(val);
        // };



        $.each(data, function(key, val) {
            if (key == 38) {

                // All the searches from the API (20)
                // $.each(val, function(rank, text) {
                //     $("#trends").append('<li>' + text + '</li>');
                // });    
                
                for (var i = 1; i <= 10; i++) {
                    $("#trends").append('<li>' + val[i] + '</li>');
                };
                return;
            };
        });

        
    });
});
