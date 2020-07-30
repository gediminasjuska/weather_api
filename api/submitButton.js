import {fetchData} from './fetchData.js'


const cityName = document.querySelector('input')
const submitButton = document.querySelector('button')
const loader = document.querySelector('.loader')
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
         
          if (cityName.value == "" && event.keyCode === 13){
            alert('Neįvestas miesto pavadinimas!')
         }else if (event.keyCode === 13){
            submit.style.display = "none"
            loader.style.display = "block"
       fetchData()
       event.preventDefault()
         }
})

export {submitButton}