import {fetchData} from './fetchData.js'


const cityName = document.querySelector('input')
const submitButton = document.querySelector('button')


submitButton.addEventListener('click', function(){
    const badDate = new Date
    const superDate = badDate.getTime()
    if(cityName.value == ""){
        alert('Neįvestas miesto pavadinimas!')
    }else {
    fetchData()
    cars.push(superDate)
    
    }
})
cityName.addEventListener('keyup', function(event){
    if (event.keyCode === 13){
        fetchData()
        event.preventDefault()
    }
})

export {submitButton}