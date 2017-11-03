
// this function should be call so that it responds with data in required format

import request from 'request';
const base_url = 'http://api.openweathermap.org/data/2.5/';
import config from '../../config';

export default function callWeatherApi (city, template) {
  return new Promise((resolve, reject) => {
    let responseText = "the weather report say";
    request({
      url: base_url+'weather',
      qs: {
        appid: config.OWM_API_KEY,
        q: city
      }
    }, function (error, response, body) {
      if(!error && response.statusCode == 200){
        let weather = JSON.parse(body);
        if (weather.hasOwnProperty("weather")) {
          let reply= `${template} ${weather["weather"][0]["description"]}`;
          resolve(reply);
        }else {
          let reply = `No weather forcast available for ${city}`;
          resolve(reply);
        }
      }else {
        reject(error);
      }
    }
  );
  });
}
