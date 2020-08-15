// ALL SELECTORS
const searchButton = document.getElementById('search-btn');
const weatherInput = document.querySelector('.weather-input');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const degree = document.querySelector('.degree');
const lead = document.querySelector('.lead');

// FETCH API
searchButton.addEventListener('click',function(){
      
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+weatherInput.value+'&appid=7032c71b73e37ea354bfc52eadcf21b7')
    .then(response => response.json())
    .then(data => {
        
        const temperature = data.main.temp;
        parseFloat(temperature);
        const tempValue = (temperature - 273.15);
        temp.innerText =`${tempValue.toFixed(2)}°C`;
        city.innerText = `${data.name} , ${data.sys.country}`;
        console.log(data)
        lead.innerText = data.weather[0].main;
    })


})

