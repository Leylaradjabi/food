// модальное окно
let buttons = document.querySelectorAll('[data-modal]');
let closeButton = document.querySelector('[data-close]');
let card = document.querySelector('.modal');


buttons.forEach(button => {
    button.onclick = () => {
        card.classList.add('show'); 
    };
});
closeButton.onclick = () => {
    card.classList.remove('show'); 
};
card.onclick = (event) => {
    if (event.target === card) {
        card.classList.remove('show'); 
    }
};

// кнопки и картинки 
const tabs = document.querySelectorAll('.tabheader__item');
const tabsContent = document.querySelectorAll('.tabcontent');
const tabsParent = document.querySelector('.tabheader__items');

function toggleTabs(index = 0) {
    tabs.forEach((tab, i) => {
        tab.classList.toggle('tabheader__item_active', i === index);
        tabsContent[i].classList.toggle('show', i === index);
        tabsContent[i].classList.toggle('hide', i !== index);
    });
}

toggleTabs();

tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((tab, i) => {
            if (target === tab) {
                toggleTabs(i);
            }
        });
    }
});

// скролл
const link = document.querySelector('.header__link');
const orderSection = document.querySelector('.order');

link.addEventListener('click', (event) => {
    event.preventDefault(); 

    orderSection.scrollIntoView({
        behavior: 'smooth' 
    });
});

const secondLink = document.querySelector('.second-link');
const offerSection = document.querySelector('.offer');

secondLink.addEventListener('click', (event) => {
    event.preventDefault(); 

    offerSection.scrollIntoView({
        behavior: 'smooth' 
    });
});
