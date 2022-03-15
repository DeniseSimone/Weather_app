const api = '25082e9de79f1dc6631bcf65dc2345c8'; // weather api key

window.addEventListener('load', () => {
    let long; // store longitude and latitude of user
    let lat;
    // Accessing geolocation of the user // check navigator
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( position => {
            // Storing Longitude and Latitude in variables
            console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // Storing base URL of OpenWeather API which will receive some arguments and return the info we need
            const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
            console.log(base); 
            fetch(base)
                .then( response => {
                    return response.json(); // convert response to JSON
                })
                .then( data => {
                    console.log(data)
                    const { temp } = data.main;
                    const place = data.name;
                    const { description, icon } = data.weather[0];
                    const { sunrise, sunset } = data.sys;
                })
        });
    }
})


/* 
1. get api key from 'OpenWeather', do not share it with anyone 
2. create a variable to store your api key  
3. create an event listener that will fire up when the page loads
*/

/* 
FORMULA TO CONVERT EPOCH TIME FORMAT INTO GTM TIME FORMAT IS:
const timeInGMT = new Date(epochTime * 1000); 
*/