import {apiArr} from './submitButton.js'


const units = 'metric'
const cityName = document.querySelector('input')

const fetchData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=${units}&appid=93222b93865e98e9f99d18eaf4715fbb`)
        
        

        .then(function(response) {
            return response.json();

            
        })
        .then(function(body) {
            const inputValue = document.querySelector('#search')
            inputValue.value = ''
            console.log(apiArr)
            const date = new Date
            const del = date.getTime()
            
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
            
            document.querySelector('.loader').style.display = 'none'
            document.querySelector('#submit').style.display = 'block'  


            const iconLink = `http://openweathermap.org/img/wn/${weatherIcon}.png`
            const weatherImage1 = document.createElement('img')
            const weatherImage2 = document.createElement('img')
            const weatherImage3 = document.createElement('img')
            const weatherImage4 = document.createElement('img')
            weatherImage1.src = iconLink
            weatherImage2.src = iconLink
            weatherImage3.src = iconLink
            weatherImage4.src = iconLink
            weatherImage1.setAttribute('id', 'weatherId')
            weatherImage2.setAttribute('id', 'weatherId')
            weatherImage3.setAttribute('id', 'weatherId')
            weatherImage4.setAttribute('id', 'weatherId')
        

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
                
            
                cityInfo.setAttribute('class', 'card')
                const cardId = 'delete' + del
                deleteBtn.setAttribute('id', 'deleteBtn')
                infoLi1.innerHTML = city
                infoLi2.innerHTML = weatherImage1
                infoLi2.innerHTML = weatherImage2
                infoLi2.innerHTML = weatherImage3
                infoLi2.innerHTML = weatherImage4
                infoLi3.innerHTML = `Temperature: ${temp}&#176;C `
                infoLi4.innerHTML = `Description: ${weather}`
                infoLi5.innerHTML = `Humidity: ${humidity}%`
                infoLi6.innerHTML = `Retrieved on: ${date}`

                infoLi1.setAttribute('id', 'miestas')

                output.appendChild(cityInfo)
                cityInfo.appendChild(deleteBtn)
                cityInfo.appendChild(infoUl)
                infoUl.appendChild(infoLi1)
                infoUl.appendChild(weatherImage1)
                infoUl.appendChild(weatherImage2)
                infoUl.appendChild(weatherImage3)
                infoUl.appendChild(weatherImage4)
                infoUl.appendChild(infoLi3)
                infoUl.appendChild(infoLi4)
                infoUl.appendChild(infoLi5)
                infoUl.appendChild(infoLi6)


                const showMore = document.querySelector('.show-more')
                const c = document.querySelector('.output').childElementCount;
                const body = document.querySelector('body')
                const showMoreBtn = document.querySelector(".show_more_btn")


                const inputValue = document.querySelector('#search')
                inputValue.value = ''

                let showMoreValue = true
                function showMoreHide(){
                    if( c === 7 ){
                        body.style.overflow = "hidden"
                        showMore.style.height = "220px"
                    }
                    
                }
                showMoreHide()
                let a = city
                a = a.toLowerCase()
                const ac = apiArr.indexOf(a)
                showMoreBtn.addEventListener('click', function(){
                    body.style.overflow = "auto"
                    showMore.style.height = "0px"
                    showMoreValue = false
                })
                deleteBtn.addEventListener('click', function(){
                    cityInfo.remove()
                    apiArr.splice(ac, 1, "")
                })

            }
            
            newCityWeather()
        })
        .catch(function(error){
                alert("ERROR404\nNeteisingai įvestas miesto pavadinimas!", error)
                document.querySelector('.loader').style.display = 'none'
                document.querySelector('#submit').style.display = 'block'
        })
}

export {fetchData}

