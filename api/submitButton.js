import {fetchData} from './fetchData.js'


const cityName = document.querySelector('input')
const submitButton = document.querySelector('button')
const loader = document.querySelector('.loader')
var apiArr = []
submitButton.addEventListener('click', function(){
    
        if(cityName.value == ""){
        
            alert('Neįvestas miesto pavadinimas!')
        
        }
        else if (apiArr.includes(cityName.value) == true &&  cityName.value !== ""){
            
            alert('Šio miesto duomenys jau ekrane :)')
               
        }
        else if(apiArr == null || apiArr.includes(cityName.value) !== true){
            submit.style.display = "none"
            loader.style.display = "block"
            
                const cardDel = cityName.value
                apiArr.push(cardDel)
                fetchData()
        }
    
})
cityName.addEventListener('keyup', function(event){
         
        if (cityName.value == "" && event.keyCode === 13){
            alert('Neįvestas miesto pavadinimas!')
        }
        else if (apiArr.includes(cityName.value) == true &&  cityName.value !== "" && event.keyCode === 13){
        
            alert('Šio miesto duomenys jau ekrane :)')
                 
        }
        else if((apiArr.includes(cityName.value) !== true || apiArr == null) && event.keyCode === 13){
            submit.style.display = "none"
            loader.style.display = "block"
            fetchData()
            const cardDel = cityName.value
            apiArr.push(cardDel)
        }
})
export {apiArr}
export {submitButton}