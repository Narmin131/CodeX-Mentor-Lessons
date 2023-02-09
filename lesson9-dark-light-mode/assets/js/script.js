const modeBtn = document.querySelector('.modeBtn')

// modeBtn.addEventListener('click', () => {
//     if (document.body.className === 'light') {
//         document.body.className = 'dark'
//     }
//     else {
//         document.body.className = 'light'
//     }
// })


const changeMode = () => {
    if (document.body.className === 'light') {
        document.body.className = 'dark'
    }
    else {
        document.body.className = 'light'
    }
}


modeBtn.addEventListener('click', changeMode)



const func = (c, d) => {
    console.log(c + d)
}

func(4, 10)

function myFunc(a, b) {
    console.log(a * b)
}

myFunc(5, 7)


const menu = document.querySelector('.menu')
const showMenuBtn = document.querySelector('.ShowMenu')

const showMyMenu = () => {
    if (menu.style.opacity === '0') {
        menu.style.opacity = '1'
    }
    else {
        menu.style.opacity = '0'
    }
}


const h4= document.querySelector('h4')
h4.style.color = 'red'
h4.style.border = '2px solid blue'