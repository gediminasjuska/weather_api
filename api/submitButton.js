import {fetchData} from './fetchData.js'


const cityName = document.querySelector('input')
const submitButton = document.querySelector('button')
const loader = document.querySelector('.loader')
const submit = document.querySelector('#submit')
submitButton.addEventListener('click', function(){
    
    const badDate = new Date
    const superDate = badDate.getTime()
    if(cityName.value == ""){
        alert('Neįvestas miesto pavadinimas!')
    }else {
    submit.style.display = "none"
    loader.style.display = "block"
    fetchData()
    }
    
})
cityName.addEventListener('keyup', function(event){
    if (event.keyCode === 13){
        submit.style.display = "none"
        loader.style.display = "block"
        fetchData()
        event.preventDefault()
    }
})

export {submitButton}