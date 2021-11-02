const message = document.querySelector('#message')

function giveFeedback(event){
    event.preventDefault()

    const inputField = document.querySelector('input')
    const inputList = document.createElement('li')
    const inputs = document.createElement('span')
    inputs.textContent = inputField.value
    inputList.appendChild(inputs) 

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteFeedback)
    inputList.appendChild(deleteBtn) 

    const list = document.querySelector('ul')
    list.appendChild(inputList)

    inputField.value = ''

}
function deleteFeedback(event){
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.childNodes[0].textContent} deleted!`

    revealMessage()
}


const formList = document.querySelector('form')
formList.addEventListener('submit', addMovie)