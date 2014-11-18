$(document).ready(function(){
  
  function getWine(){
    return $.getJSON("http://daretodiscover.net/wine", function(){});
  }

  $(".wineSearch").on("click", function(e){
    e.preventDefault();

    $.when(getWine()).done(function(result){
      console.log(result);

      var compliedTemplate = HandlebarsTemplates['home/home']({result: result});

      $(".wineData").append(compliedTemplate);
      
    });

  });


});