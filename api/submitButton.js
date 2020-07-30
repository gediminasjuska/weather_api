import {fetchData} from './fetchData.js'


const cityName = document.querySelector('input')
const submitButton = document.querySelector('button')
const loaderParent = document.querySelector('.search-button')
// const loader = document.querySelector('#paejo')


submitButton.addEventListener('click', function(){
    
    
    const badDate = new Date
    const superDate = badDate.getTime()
    if(cityName.value == ""){
        alert('Neįvestas miesto pavadinimas!')
    }else {
    document.getElementById('paejo').innerText = 'paejo'
    fetchData()
    }
    
})
cityName.addEventListener('keyup', function(event){
    if (event.keyCode === 13){
        document.getElementById('paejo').innerText = 'paejo'
        fetchData()
        event.preventDefault()
    }
})

export {submitButton}