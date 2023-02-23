const url = 'https://fakestoreapi.com/products'

// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))

const row = document.querySelector('.row')

const getData = async () => {
    try {
        const res = await fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.forEach(element => {
                    const div = document.createElement('div')
                    div.className = 'col-lg-4 col-md-4 p-3'
                    div.innerHTML = `
                        <div class="card" style = "width: 100%; height:100%" >
                            <img src=${element.image} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text">${element.description}</p>
                                    <p>Price : ${element.price}</p>
                                </div>
                    </div>
                    `
                    row.appendChild(div)
                });

            })
            .catch(err => console.log(err))
    }
    catch {
        alert('Some problems')
    }
}

getData()


// function myText() {
//     setTimeout(()=>{
//           console.log('Mytext');
//     },2000)
// }

// myText()

// console.log('Salam');


// Call, apply, bind

let person = {
    name: "Narmin",
    surname: "Mammadova"
}

function FullName() {
    console.log(this.name + ' ' + this.surname);
}

FullName.call(person)
FullName.apply(person)


const newFunction = FullName.bind(person)
newFunction()

let country = {
    city :'Baku'
}

function getCountryInfo(language){
    console.log(this.city + ' ' + language);
}

getCountryInfo.call(country, 'azerbaijani')
getCountryInfo.apply(country, ['azerbaijani'])

const newCountry = getCountryInfo.bind(country)
newCountry('azerbaijani')

const todoItems = localStorage.getItem('Tasks');
const myTodo = todoItems ? JSON.parse(localStorage.getItem('Tasks')) : []