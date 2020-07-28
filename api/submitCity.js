// const units = 'metric'

// const cityName = document.querySelector('input')

// const submitButton = document.querySelector('button')
// submitButton.addEventListener('click', function(){

//     if(cityName.value == ""){
//         alert('Neivestas miestas')
//     }else {

//     fetchData()
// }
// })





// const fetchData = () => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=${units}&appid=93222b93865e98e9f99d18eaf4715fbb`)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(body) {          
//             const toJSON = JSON.stringify(body.name)
//             const temp = JSON.stringify(body.main.temp)
//             const weather = JSON.stringify(body.weather[0].description)
//             const weatherIcon = JSON.stringify(body.weather[0].icon)
//             const notesArr = []
//             let x = JSON.parse(toJSON)
//             let y = JSON.parse(temp)
//             let b = JSON.parse(weather)
//             let a = JSON.parse(weatherIcon)
//                 const bandymasTemp = document.getElementById('demo').innerHTML = x+y+b+a
//             console.log(`http://openweathermap.org/img/wn/${a}.png`)
            
            
//         })
        
    
// }

// export {fetchData}