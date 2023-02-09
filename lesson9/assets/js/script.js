// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// document.querySelector
// document.querySelectorAll


const p = document.querySelector('p')
// p.setAttribute('class', 'mytext')
// p.setAttribute('id', 'myId')

// p.className = 'newClass'
// p.classList.add('myClass')
// p.classList.remove('newClass')

// const btn = document.createElement('button')
// btn.innerHTML = 'Add button'

// const myContent = document.querySelector('.myDiv')

// myContent.appendChild(btn)



const input = document.querySelector('input')
const addBtn = document.querySelector('.addNewTask')
const ol = document.querySelector('ol')

const newTask = () => {

    if (input.value === '') {
        alert('Xanani doldurun')
    }

    else {
        // ol.innerHTML += `
        //    <li>${input.value} <button class="deleteTodo">Delete this task</button></li>
        // `

        // input.value = ''

        const li = document.createElement('li')
        li.innerHTML = input.value
        const btn = document.createElement('button')
        btn.innerHTML = 'Delete this task'
        btn.className = 'deleteTodo'
        li.appendChild(btn)
        ol.appendChild(li)

        input.value = ''
    }

    const deleteBtns = document.querySelectorAll('.deleteTodo')
    for (var i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].onclick = function () {
            this.parentElement.remove()
        }
    }

}

addBtn.addEventListener('click', newTask)

input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        addBtn.click()
    }
})



document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.usrplaceholder').placeholder = data[event.currentTarget.checked ? 'japanese' : 'english'].usrplaceholder;
    document.querySelector('.pwplaceholder').placeholder = data[event.currentTarget.checked ? 'japanese' : 'english'].pwplaceholder;
});

var data = {
    "english": {
        "usrplaceholder": "Username",
        "pwplaceholder": "Password"
    },
    "japanese": {
        "usrplaceholder": "အသုံးပြုသူအမည်",
        "pwplaceholder": "စကားဝှက်",
    }
}



