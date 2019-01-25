$(function() {
  console.log("Welcome to Instanews!");
});

$(".button").one("click", function() {
  $.ajax({
    method: "GET",
    url: ""
  })
    .done(function(data) {
      $(".results").empty();
      $.each(data.weather, function(key, value) {
        $(".results").append("<p>" + iconurl + "</p>"),
          $(".results").append("<p class='main'>" + value.main + "</p>"),
          $(".results").append(
            "<p class='description'>" + value.description + "</p>"
          );
        console.log(value);
      });
    })
    .fail(function() {
      $(".results").append(
        "<p>" + "Sorry, there was a problem, please try again." + "</p>"
      );
    });
});

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
  console.log("welcom");
  $("#button").on("change", function() {
    $("").before("<p class='wait'>Loading</p>");
    const button = $(this).val();
    $.ajax({
      method: "GET",
      url:
        "https://api.nytimes.com/svc/topstories/v2/" +
        button +
        "0cbWw4XNAHN4q9bMbGDVkoV11QQKTUCJ",
      dataType: "json"
    })
      .done(function(response) {})
      .fail(function() {})
      .always(function(data) {});
  });
});
