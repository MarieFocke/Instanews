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
$(function() {
  console.log("Good evening!");
  $("#drop-down").on("change", function() {
    const section = $(this).val();
    console.log(section);
    $(".loading").before("<img src='./assets/images/ajax-loader.gif' width=50px;>");
    $(".results").empty();
    $.ajax({
      method: "GET",
      url:
        "https://api.nytimes.com/svc/topstories/v2/" +
        section +
        ".json?api-key=0cbWw4XNAHN4q9bMbGDVkoV11QQKTUCJ",
      dataType: "json"
    })
      .done(function(response) {
        $(response).slice(0, 12);
        console.log(response);
        $.each(response.results, function(key, value) {
          if (value.multimedia[0] !== undefined);
          $(".articles").append(
            "<li>"+ "<a href= " + value.url + ">" + "<img src=" + value.multimedia[4] + "/>" + "<span>" + value.abstract + "</span>" + "</a>" + "</li>"
          );
        });
      })
      .fail(function(response) {
        $(".articles").append(
          "<span> Sorry the articles were unable to be found </span>"
        );
      })
      .always(function(response){
        $(".loading").remove("<img src='./assets/images/ajax-loader.gif' width=50px;>"); 
      })
  });
});
