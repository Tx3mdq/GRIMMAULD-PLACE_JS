const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        
        showWeatherData(data);
        })

    })
}

function showWeatherData (data){
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

    timezone.innerHTML = data.timezone;
    countryEl.innerHTML = data.lat + 'N ' + data.lon+'E'

    currentWeatherItemsEl.innerHTML = 
    `<div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed}</div>
    </div>
    <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    </div>
    
    
    `;

    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if(idx == 0){
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
                <div class="temp">Minima : ${day.temp.min}&#176; C</div>
                <div class="temp">Maxima : ${day.temp.max}&#176; C</div>
            </div>
            
            `
        }else{
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Minima : ${day.temp.min}&#176; C</div>
                <div class="temp">Maxima : ${day.temp.max}&#176; C</div>
            </div>
            
            `
        }
    })


    weatherForecastEl.innerHTML = otherDayForcast;
}
// let  input = document.querySelector('.input_text');
// let  main = document.querySelector('#name');
// let  temp = document.querySelector('.temp');
// let  desc = document.querySelector('.desc');
// let  clouds = document.querySelector('.clouds');
// let  button= document.querySelector('.submit');


// button.addEventListener('click', function(name){
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
// .then(response => response.json())
// .then(data => {
//   let  tempValue = data['main']['temp'];
//   let nameValue = data['name'];
//   let descValue = data['weather'][0]['description'];
  

//   main.innerHTML = nameValue;
//   desc.innerHTML = "Desc - "+descValue;
//   temp.innerHTML = "Temp - "+tempValue;
//   input.value ="";

// })

// .catch(err => alert("Wrong city name!"));
// })



// document.getElementById('apiBTN').addEventListener('click', cargarFOOD)


// function cargarFOOD(){
//     fetch()
//       .then(function(res) {
//         return res.json();
//       })
//       .then(function(imagenes){
//         let html ='';

//         imagenes.forEach(function(imagen) {
//             html += `
//                 <li>
//                     <a target="_blank" href="${imagen.post_url}"> Ver Imagen </a>
//                     ${imagen.author}
//                     </li>
//             `;
//         });
//         document.getElementById('resultado').innerHTML = html;
//       })


//     }


// // const form1 = document.getElementById('form')
// // const sendMail = document.getElementById('emailA')



// // async function handleSendEmail(event) {
// //     event.preventDefault()
// //     const fd = new FormData(this)

// //     const response = await fetch('https://formspree.io/f/mknyladk', {
// //         method: 'POST',
// //         body: fd,
// //         headers:{
// //             'Accept': 'application/json'
// //         }
// //     })

// //     if (response.ok){
// //         this.reset()
// //         alert('Reserva Realizada con exito')
// //     }else{
// //         alert('Error en la reserva')
// //     }
// // }
    

// // form.addEventListener('submit', handleSendEmail)

