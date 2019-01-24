$(function() {
  console.log("Welcome to Instanews!");
});

$(".button").one("click", function() {
    $.ajax({
      method: 'GET',
       url:
      ''})
      .done(function(data) {
          $('.results').empty();
          $.each(data.weather, function(key,value){
            const iconurl="<img src=http://openweathermap.org/img/w/" + value.icon + ".png">"
            
            $(".results").append("<p>"+ iconurl +"</p>"),
            $(".results").append("<p class='main'>"+ value.main +"</p>"),
            $(".results").append("<p class='description'>"+ value.description +"</p>");
            console.log(value);
            });    
          })
            .fail(function() {
             $(".results").append("<p>"+ "Sorry, there was a problem, please try again." + "</p>")
              })
  });