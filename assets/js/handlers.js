const faqQuestion = document.querySelectorAll('.faq__question');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

faqQuestion.forEach(function(link, index) {
    link.addEventListener('click', function(event) {

        const svg = this.querySelector('svg');
        const path = this.querySelector('svg path');
        
        const faqAnswer = this.nextElementSibling;
        const faqGroup = event.target.parentNode;
        
        if(faqAnswer.classList.contains('open')) {
            faqAnswer.classList.remove('open');
            svg.setAttribute('height', '12');
            svg.setAttribute('viewBox', '0 0 12 12');
            path.setAttribute('d', 'M5.5 6.5H0.5C0.358333 6.5 0.239583 6.45202 0.14375 6.35605C0.0479167 6.2601 0 6.14119 0 5.99932C0 5.85746 0.0479167 5.73877 0.14375 5.64327C0.239583 5.54776 0.358333 5.5 0.5 5.5H5.5V0.5C5.5 0.358333 5.54798 0.239583 5.64395 0.14375C5.7399 0.0479167 5.85881 0 6.00068 0C6.14254 0 6.26123 0.0479167 6.35673 0.14375C6.45224 0.239583 6.5 0.358333 6.5 0.5V5.5H11.5C11.6417 5.5 11.7604 5.54798 11.8562 5.64395C11.9521 5.7399 12 5.85881 12 6.00068C12 6.14254 11.9521 6.26123 11.8562 6.35673C11.7604 6.45224 11.6417 6.5 11.5 6.5H6.5V11.5C6.5 11.6417 6.45202 11.7604 6.35605 11.8562C6.2601 11.9521 6.14119 12 5.99932 12C5.85746 12 5.73877 11.9521 5.64327 11.8562C5.54776 11.7604 5.5 11.6417 5.5 11.5V6.5Z');
            faqGroup.style.borderColor = 'rgba(44, 44, 44, 1)';
        } else {
            faqAnswer.classList.add('open');
            svg.setAttribute('height', '2');
            svg.setAttribute('viewBox', '0 0 12 2');
            path.setAttribute('d', 'M0.5 1.5C0.358333 1.5 0.239583 1.45202 0.14375 1.35605C0.0479167 1.2601 0 1.14119 0 0.999325C0 0.857458 0.0479167 0.738775 0.14375 0.643275C0.239583 0.547758 0.358333 0.5 0.5 0.5H11.5C11.6417 0.5 11.7604 0.547983 11.8562 0.64395C11.9521 0.7399 12 0.858809 12 1.00068C12 1.14254 11.9521 1.26123 11.8562 1.35673C11.7604 1.45224 11.6417 1.5 11.5 1.5H0.5Z');
            faqGroup.style.borderColor = 'rgba(255, 255, 255, 1)';
        }
    });
});

const groups = document.querySelectorAll('.number-input__group');

groups.forEach(group => {
    const minusBtn = group.querySelector('.number-input__minus');
    const plusBtn = group.querySelector('.number-input__plus');
    const input = group.querySelector('.number-input__value');

    function updateInput() {
        let currentValue = parseInt(input.value);
        if (currentValue <= 1) {
            input.value = 1;
            group.classList.remove('minus-active');
        } else {
            minusBtn.removeAttribute('disabled');
            group.classList.add('minus-active');
        }
    }

    minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(input.value);
        if (currentValue > 1) {
            input.value = currentValue - 1;
            updateInput();
        }
    });

    plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(input.value);
        input.value = currentValue + 1;
        updateInput();
    });

    updateInput();
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

const Menu = () => {
    document.querySelector('.dropdown-menu').classList.toggle('active');
    document.querySelector('.header__dropdown-btn').classList.toggle('active');
}

document.querySelector('.header__dropdown-btn').addEventListener('click', Menu);

const burgerButton = document.querySelector('.header__burger');
const burgerSvg = document.querySelector('svg');
const mobileNav = document.querySelector('.mobile-nav');

const burgerMenu = () => {

    document.querySelector('.header__burger').addEventListener('click', function() {
        svgIcon.innerHTML = '<path d="M18.5 18.5L5 5M18.5 5L5 18.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
    });
    
    if(mobileNav.classList.contains('mobile-nav_active')) {
        mobileNav.classList.remove('mobile-nav_active');
        burgerSvg.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H20.25C20.6642 5.25 21 5.58579 21 6C21 6.41421 20.6642 6.75 20.25 6.75H3.75C3.33579 6.75 3 6.41421 3 6ZM3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12ZM3 18C3 17.5858 3.33579 17.25 3.75 17.25H20.25C20.6642 17.25 21 17.5858 21 18C21 18.4142 20.6642 18.75 20.25 18.75H3.75C3.33579 18.75 3 18.4142 3 18Z" fill="white"/>';
    } else {
        mobileNav.classList.add('mobile-nav_active');
        burgerSvg.innerHTML = '<path d="M18.5 18.5L5 5M18.5 5L5 18.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
    }


}

burgerButton.addEventListener('click', burgerMenu);

document.querySelectorAll('[data-goto]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetElement = document.querySelector(this.getAttribute('data-goto'));
        const openMenu = document.querySelector('.dropdown-menu.active');
        const openMenuMobile = document.querySelector('.mobile-nav.mobile-nav_active');

        if(openMenu) {
            Menu()
        }
        if(openMenuMobile) {
            burgerMenu();
        }

        if (targetElement) {
            window.scroll({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

if(document.querySelector('.partnership-page')) {
    const requiredField = []
    const requiredInputs = document.querySelectorAll('.input-info__group.required input');
    const requiredTextareas = document.querySelectorAll('.input-info__group.required textarea');
    const btn = document.querySelector('.partnership-info__btn.btn.disabled');
    
    requiredField.push(...requiredInputs, ...requiredTextareas);

    requiredField.forEach(input => input.addEventListener('input', (event) => {
        checkFields(requiredField, btn);
    }))

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').querySelector('input').value.trim();

        if(!EMAIL_REGEXP.test(email)) {
            document.getElementById('email').classList.add('error');
            document.getElementById('email').querySelector('.error-msg').innerHTML = 'some error text';
            return;
        }

        const popup = document.getElementById('parthership-popup');
        popupOpen(popup);
    });
}

if(document.querySelector('.order-page')) {
    const requiredField = []
    const requiredInputs = document.querySelectorAll('.input-info__group.required input');
    const requiredTextareas = document.querySelectorAll('.input-info__group.required textarea');
    const btn = document.querySelector('.order__btn.btn.disabled');
    
    requiredField.push(...requiredInputs, ...requiredTextareas);

    requiredField.forEach(input => input.addEventListener('input', (event) => {
        checkFields(requiredField, btn);
    }))

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').querySelector('input').value.trim();

        if(!EMAIL_REGEXP.test(email)) {
            document.getElementById('email').classList.add('error');
            document.getElementById('email').querySelector('.error-msg').innerHTML = 'some error text';
            return;
        }

        const popup = document.getElementById('order-popup');
        popupOpen(popup);
    });
}

function checkFields(requiredField, btn) {
    
    let active = true;

    requiredField.forEach(input => {
        if (input.value.trim() === '') {
            active = false;
        }
    });
    
    if(active) {
        btn.classList.remove('disabled');
    } else {
        btn.classList.add('disabled');
    }
}

// валидацию и показать ошибку