import {fetchData} from './fetchData.js'


const cityName = document.querySelector('input')
const submitButton = document.querySelector('button')


submitButton.addEventListener('click', function(){

    if(cityName.value == ""){
        alert('Neįvestas miesto pavadinimas!')
    }else {

    fetchData()
    }
})
cityName.addEventListener('keyup', function(event){
    if (event.keyCode === 13){
        fetchData()
        event.preventDefault()
    }
})

export {submitButton}