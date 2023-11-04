const img = document.querySelector('.img img');

const h1 = document.querySelector('h1')
const text = document.querySelector('.text-wrapper p')
const avg = document.querySelector('.avg-dis-wrap span')
const time = document.querySelector('.travel-time-wrap span')


const listItems = document.querySelectorAll('.destinations-nav li');


const data = fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        fillDom(data.destinations, 0)
        listItems.forEach(item => {

            item.addEventListener('click', () => {
                fillDom(data.destinations, item.id)
                removeActiveClass();
                item.classList.add('active')
            })
        })
    })



function fillDom(data, index) {
    img.src = '.' + data[index].images.webp;
    img.alt = data[index].name;
    h1.innerText = data[index].name;
    text.innerText = data[index].description;
    avg.innerText = data[index].distance;
    time.innerText = data[index].travel;
}

function removeActiveClass() {
    listItems.forEach(item => {
        item.classList.remove('active')
    })
}

