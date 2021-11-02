const message = document.querySelector('#message')
const formList = document.querySelector('form')
const signUp = document.querySelector('.sign-up')
const signatureInput = document.querySelector('input')
const acceptBtn = document.querySelector('#accept-quest')
const footer = document.querySelector('footer')

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
} 

function emailSubmitHandler() {
    const confirmationMsg = document.createElement('p')
    confirmationMsg.textContent = "Thank you for signing up for our next quest!"
    signUp.remove()
    footer.appendChild(confirmationMsg)
}

formList.addEventListener('submit', giveFeedback)
acceptBtn.addEventListener('click', emailSubmitHandler);