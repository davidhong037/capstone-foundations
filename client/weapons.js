const swordBtn = document.getElementById('sword-btn')
const axeBtn = document.getElementById('axe-btn')
const crossbowBtn = document.getElementById('crossbow-btn')

function selectSword(){
    alert('You have equipped the sword and shield! Please choose your path.')
}

function selectAxe(){
    alert('You have equipped the double bladed battle axe! Please choose your path.')
}

function selectCrossbow(){
    alert('You have equipped the repeating crossbow! Please choose your path.')
}

swordBtn.addEventListener('click', selectSword)
axeBtn.addEventListener('click', selectAxe)
crossbowBtn.addEventListener('click', selectCrossbow)