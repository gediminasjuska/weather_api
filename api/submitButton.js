import {fetchData} from './fetchData.js'


const cityName = document.querySelector('input')
const submitButton = document.querySelector('button')
const newArr = ["aaa"]
var cars = [];
const button = document.querySelector('button')
const x = 'labas'
const output1 = document.querySelector('.output')


submitButton.addEventListener('click', function(){
    const badDate = new Date
    const superDate = badDate.getTime()
    if(cityName.value == ""){
        alert('Neįvestas miesto pavadinimas!')
    }else {
    fetchData()
    cars.push(superDate)
    //console.log(cars)    
    
    }
})
cityName.addEventListener('keyup', function(event){
    if (event.keyCode === 13){
        fetchData()
        event.preventDefault()
    }
})

export {submitButton}

// atsiversti arrays paskaitą

// const cardId = document.createElement('div')
//     cardId.setAttribute('class', 'card')
//     cardId.setAttribute('id', 'delete'+superDate)
//     output1.appendChild(cardId)

//     const elementAd = document.getElementsByClassName('card')
//     var arr = Array.from(htmlCollection);
//     console.log(elementAd)
//     console.log(arr)