$(document).ready(function() {
var units = 'metric';
  var temperature = 0;
  var label;
  getLocation();

  function getLocation() {
    $.getJSON('http://ip-api.com/json', function(location) {

      
      $('#location').append(location.city + ', '+location.country);
      
      if(location.countryCode === 'US'){
        units = 'imperial';
        getWeather(location, units);
      } else{
        units = 'metric';
        getWeather(location, units);
      }
      getForecast(location);
    });
  }

  function getWeather(loc, units) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + loc.lat + '&lon=' + loc.lon + '&units='+units+'&appid=1a42227474367ab5f28cac1dbe0b755d', function(weather) {
      
      temperature = parseFloat((weather.main.temp).toFixed(1));
      var tempIcon = weather.weather[0].icon;
      if(units === 'metric'){
        label = '°C';
      } else{
        label = '°F';
      }
      
      $('#temp').html(temperature + ' ' + label);
      $('#icon').html('<img src="http://openweathermap.org/img/w/'+ tempIcon+'.png">');
      $('#description').html(weather.weather[0].main);
      $('#wind').append(weather.wind.speed+' m/s');
      $('#min').append(weather.main.temp_min+ ' '+label);
      $('#max').append(weather.main.temp_max+ ' '+label);
      
      if(tempIcon === '01d' || tempIcon === '01n' || tempIcon === '02d' || tempIcon === '02n'){
        $('body').css('background-image', 'url("https://snap-photos.s3.amazonaws.com/img-thumbs/960w/U3PFFSOTTP.jpg")');
      } else if(tempIcon === '03d' || tempIcon === '03n' || tempIcon === '04d' || tempIcon === '04n' ){
        $('body').css('background-image', 'url("https://snap-photos.s3.amazonaws.com/img-thumbs/960w/UV542Y42CW.jpg")');
      } else if(tempIcon === '09d' || tempIcon === '09n' || tempIcon === '10d' || tempIcon === '10n' || tempIcon === '11d' || tempIcon === '11n'){
        $('body').css('background-image', 'url("https://snap-photos.s3.amazonaws.com/img-thumbs/960w/HURPJAWUZC.jpg")');
      } else if(tempIcon === '13d' || tempIcon === '13n'){
        $('body').css('background-image', 'url("https://snap-photos.s3.amazonaws.com/img-thumbs/960w/0NJLBJIOCB.jpg")');
      } else if(tempIcon === '50d' || tempIcon === '50n'){
        $('body').css('background-image', 'url("https://snap-photos.s3.amazonaws.com/img-thumbs/960w/GU0XKOZWB2.jpg")');
      }
      
      
    });
  }
  
 $('#btn').on('click', function(){
   
   if(units === 'metric'){
     units = 'imperial';
     label = '°F';
     temperature = temperature * 1.8 + 32;
     $('#temp').html(temperature+ ' ' + label);
   } else{
     units = 'metric';
     label = '°C';
     temperature = parseFloat(((temperature - 32) * (5/9)).toFixed(1));
     $('#temp').html(temperature+ ' ' + label);
   }
   
 });
  
});