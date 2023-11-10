const term = document.querySelector('h2');
const text = document.querySelector('.text p');
const img = document.querySelector('.img img');
const sourceImgTag = document.querySelector('.img source');

// navigation
const navs = document.querySelectorAll('.nav div');

fetch('../data.json')
    .then(res => res.json())
    .then(data => {
        navs.forEach(nav => {
            nav.addEventListener('click', () => {
                const index = nav.id;
                removeActiveClass();
                nav.classList.add('active')
                displayData(data.technology[index])
            })
        })

    })

function displayData(data) {
    term.innerText = data.name;
    text.innerText = data.description;
    sourceImgTag.srcset = '.' + data.images.portrait;
    img.src = '.' + data.images.landscape;
    img.alt = data.name + ' image'
}


function removeActiveClass() {
    navs.forEach(nav => {
        nav.classList.remove('active')
    })
}


