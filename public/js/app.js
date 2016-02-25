var weatherData = {};
$(document).ready(function(){
  $('#get-weather').on('click', getWeather);
  var baseUrl = 'https://api.forecast.io/forecast/';
  //console.log('here') //This is for testing the link.
  console.log(geoplugin_countryName());

  function buildUrl(lat, lon){
        return baseUrl + apiKey+'/'+lat+','+lon;

      }

//All waether data
function getWeather(){
  // console.log('I am running!');
  var lat = $('#latitude').val();
  var lon = $('#longitude').val();
   var options = {
     url: buildUrl(lat,lon),
     dataType: 'jsonp',
     success: showData,
     error: errorHandler
   };

   $.ajax(options);


}


function errorHandler(err){
    console.log(err);
}


//handlebars function to populate form
    function showData(data){
        var source= $('#weatherStuff').html();
        var template= Handlebars.compile(source);

        var viewData ={
          city: geoplugin_city(),
          lat: data.latitude,
          lon: data.longitude,
          icon: data.currently.icon,
          summary: data.currently.summary,
          time: moment().format('LT'),
          temp: data.currently.temperature
        };
        console.log(viewData);

        var html = template(viewData);
        $('#output').html(html);
        console.log(data);

      }
});
