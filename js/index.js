// Problem: retrieve content from the NYT top stories API and add it to our site.
//If we don't get a response, let the user know.

//1a.Listen for the select menu to change (watching value)
//1b. If we select value is "" do nothing and return from the function immediately
//1c.Show the loader and clear out old stories
//2.Send a request to the NYT API for data based on the value of the select menu.
//3.If successful, parse the data and decide what parts we want to append to our DOM.
//4.Append that stuff to the DOM.
//5.If unsuccessful, append and show a helpful to the user in the UI.
//6.Hide the loader again.

$(function(){
    $("#button").on("change", function(){
        const button = $(this).val();
        //console.log(button);
        //make our ajax request
        $.ajax({
            method: "GET",
            url: "https://api.nytimes.com/svc/topstories/v2/" + button + "",
            dataType: "json",
        }).done(function(response){
            console.log(response)//it is an object!
            console.log(response.results);
        }).fail(function(){

        }).always(function(data){

        });
    });
});

