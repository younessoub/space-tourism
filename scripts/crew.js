// data that is going to change when navigating
const position = document.querySelector('.position')
const person = document.querySelector('.text h2')
const text = document.querySelector('.text p')
const img = document.querySelector('.img img')

// navigation dots
const dots = document.querySelectorAll('.crew-nav div')

fetch('../data.json')
    .then(res => res.json())
    .then(data => {
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = dot.id;
                removeActiveClass();
                dot.classList.add('active')
                displayData(data.crew, index)
            })
        })
    })

function displayData(data, index) {
    position.innerText = data[index].role;
    person.innerText = data[index].name;
    text.innerText = data[index].bio;
    img.src = '.' + data[index].images.webp;
    img.alt = data[index].name + ' image';
}


function removeActiveClass() {
    dots.forEach(dot => {
        dot.classList.remove('active')
    })
}

