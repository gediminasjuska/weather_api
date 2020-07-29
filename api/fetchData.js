import {submitButton} from './submitButton.js'
const units = 'metric'
const cityName = document.querySelector('input')

const fetchData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=${units}&appid=93222b93865e98e9f99d18eaf4715fbb`)

        

        .then(function(response) {
            return response.json();
        })
        .then(function(body) {
            const citiesArr = []  
            const date = new Date()
            citiesArr.push(date)
            console.log(citiesArr)

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

            
            
            const iconLink = `http://openweathermap.org/img/wn/${weatherIcon}.png`
            const weatherImage = document.createElement('img')
            const weatherImage1 = document.createElement('img')
            weatherImage.src = iconLink
            weatherImage1.src = iconLink
            
            const output = document.querySelector('.output')
            function newCityWeather(){
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
                cityInfo.setAttribute('id', 'card')
                deleteBtn.setAttribute('id', 'deleteBtn')
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
                
                const showMore = document.querySelector('.show-more')
                const c = document.querySelector('.output').childElementCount;
                const body = document.querySelector('body')
                const showMoreBtn = document.querySelector(".show_more_btn")
                
                let turinys = true
                function veikia(){
                    if( c === 7 ){
                        console.log('labas')
                        showMore.style.display = "block"
                        body.style.overflow = "hidden"
                    }
                    
                }
                veikia()
                showMoreBtn.addEventListener('click', function(){
                    showMore.style.display = "none"
                    body.style.overflow = "auto"
                    turinys = false
                })
                console.log(turinys)
                deleteBtn.addEventListener('click', function(){
                    cityInfo.remove()
                })

            }
            newCityWeather()
        
        })
        .catch(function(error){
                alert("ERROR404\nNeteisingai įvestas miesto pavadinimas!", error)
        })
}

export {fetchData}

// tikrinti id korteliu per submit, nes info jau bus localstorage
//tikrinti pasikartojancias korteles pagal time id
//suteikti ir klase ir id atskirai

