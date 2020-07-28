import {submitButton} from './submitButton.js'

const units = 'metric'
const cityName = document.querySelector('input')

const fetchData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=${units}&appid=93222b93865e98e9f99d18eaf4715fbb`)

        .then(function(response) {
            return response.json();
        })
        .then(function(body) {          
            const city1 = JSON.stringify(body.name)
            const temp1 = JSON.stringify(body.main.temp)
            const weather1 = JSON.stringify(body.weather[0].description)
            const weatherIcon1 = JSON.stringify(body.weather[0].icon)
            let city = JSON.parse(city1)
            let temp = JSON.parse(temp1)
            let weather = JSON.parse(weather1)
            let weatherIcon = JSON.parse(weatherIcon1)

            const date = new Date()
            const bandymasTemp = document.getElementById('demo').innerHTML = city+temp+weather+weatherIcon+date
            const iconLink = `http://openweathermap.org/img/wn/${weatherIcon}.png`
            console.log(iconLink)
            
        }).catch(function(error){
                alert("ERROR404\nNeteisingai įvestas miesto pavadinimas!", error)
        })
}

export {fetchData}
