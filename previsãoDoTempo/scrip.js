

const key = '6441d6efdc0d13798f0ae3213f22aca3'


function displayWeatherData(dados) {
    console.log(dados)
    document.querySelector('.city').innerHTML = `Tempo em ${dados.name}`
    document.querySelector('.temperature').innerHTML = Math.floor(dados.main.temp) + 'ºC'
    document.querySelector('.description').innerHTML = dados.weather[0].description
    document.querySelector('.humidity').innerHTML = 'Umidade: ' + dados.main.humidity + '%'
    document.querySelector('.prevision').src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

function getCityName() {
    // Implementation for fetching city weather data
    const input = document.querySelector('.city-input').value.trim(); 
    
    lookForCity(input);
}
async function lookForCity(input) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt&units=metric`).then(resposta => resposta.json())

    displayWeatherData(dados)
}
