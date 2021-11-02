const forestBtn = document.getElementById('forest-btn')
const minesBtn = document.getElementById('mines-btn')
const wastedCityBtn = document.getElementById('wasted-city-btn')

function selectForest(){
    alert('You have decided to venture forth into The Terrorlake Forest.')
}

function selectMines(){
    alert('You have decided to venture forth into The Bloodhill Mines.')
}

function selectWastedCity(){
    alert('You have decided to venture forth into The Wasted City.')
}

forestBtn.addEventListener('click', selectForest)
minesBtn.addEventListener('click', selectMines)
wastedCityBtn.addEventListener('click', selectWastedCity)

