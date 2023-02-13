const addToLocal = () => {
    const inputValue = document.querySelector('input').value
    localStorage.setItem('myText', inputValue)
}

const getFromLocal = () => {
    const p = document.querySelector('p')
    p.innerHTML = localStorage.getItem('myText')
}

const clearAllLocalStorage = () => {
    localStorage.clear()
}


const removeItem = () => {
    localStorage.removeItem('myText')
}

const User = {
    id: 1,
    name: 'Narmin',
    age: 19
}

localStorage.setItem('changed', JSON.stringify(User))

const myUserInfo = localStorage.getItem('changed')
console.log(JSON.parse(myUserInfo));






// Dark Light Mode

const btn = document.querySelector('button')
let darkMode = localStorage.getItem('darkMode')

const enableDarkmode = () => {
    document.body.classList.add('dark')
    localStorage.setItem('darkMode', 'menim dark modum aktivdi')
}


const disabledDarkMode = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('darkMode', null)
}

if (darkMode === 'menim dark modum aktivdi') {
    enableDarkmode()
}


const changeMode = () => {
    let darkMode = localStorage.getItem('darkMode')

    if (darkMode === 'menim dark modum aktivdi') {
        disabledDarkMode()
    }
    else {
        enableDarkmode()
    }
}






