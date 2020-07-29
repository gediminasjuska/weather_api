import {submitButton} from './submitButton.js'
import {newCityWeather} from './newCityWeather.js'
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
            const humidity1 = JSON.stringify(body.main.humidity)
            const weather1 = JSON.stringify(body.weather[0].description)
            const weatherIcon1 = JSON.stringify(body.weather[0].icon)
            let city = JSON.parse(city1)
            let temp = JSON.parse(temp1)
            let humidity = JSON.parse(humidity1)
            let weather = JSON.parse(weather1)
            let weatherIcon = JSON.parse(weatherIcon1)

            const date = new Date()
            const bandymasTemp = document.getElementById('demo').innerHTML = city+temp+weather+weatherIcon+date
            const iconLink = `http://openweathermap.org/img/wn/${weatherIcon}.png`
            const weatherImage = document.createElement('img')
            const weatherImage1 = document.createElement('img')
            weatherImage.src = iconLink
            weatherImage1.src = iconLink
            console.log(iconLink)
            
            const output = document.querySelector('.output')
            function newCityWeather(){
                output.innerHTML = ''
                const cityInfo = document.createElement('div')
                const deleteBtn = document.createElement('button')
                const infoUl = document.createElement('ul')
                const infoLi1 = document.createElement('li')
                const infoLi2 = document.createElement('li')
                const infoLi3 = document.createElement('li')
                const infoLi4 = document.createElement('li')
                const infoLi5 = document.createElement('li')
                const infoLi6 = document.createElement('li')
                cityInfo.style.border = '2px solid purple'

                infoLi1.innerHTML = city
                infoLi2.innerHTML = weatherImage
                infoLi2.innerHTML = weatherImage1
                infoLi3.innerHTML = `Temperature: ${temp}C`
                infoLi4.innerHTML = `Description: ${weather}`
                infoLi5.innerHTML = `Humidity: ${humidity}%`
                infoLi6.innerHTML = `Retrieved on ${date}`

                output.appendChild(cityInfo)
                cityInfo.appendChild(deleteBtn)
                cityInfo.appendChild(infoUl)
                infoUl.appendChild(infoLi1)
                infoUl.appendChild(weatherImage)
                infoUl.appendChild(weatherImage1)
                infoUl.appendChild(infoLi3)
                infoUl.appendChild(infoLi4)
                infoUl.appendChild(infoLi5)
                infoUl.appendChild(infoLi6)
            }
            newCityWeather()

        })
        .catch(function(error){
                alert("ERROR404\nNeteisingai įvestas miesto pavadinimas!", error)
        })
}

export {fetchData}
