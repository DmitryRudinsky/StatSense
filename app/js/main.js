import {isValidForm} from './utils.js';

const pageId = document.body.id;

console.log(pageId);
console.log(localStorage);

if (pageId === 'indexPage') {
    document.addEventListener('DOMContentLoaded', () => {
        const animatedTitle = document.getElementById('animatedTitle');
        const animatedSubTitle = document.getElementById('animatedSubTitle');
        const animatedForm = document.getElementById('animatedForm');
        setTimeout(() => {
            animatedTitle.classList.add('visible');
        }, 1000);
        setTimeout(() => {
            animatedSubTitle.classList.add('visible');
            animatedForm.classList.add('visible');
        }, 1500);
    });

    document.getElementById('animatedForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const emailError = document.getElementById('emailError');
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData.entries());
        const [nonField, isMailValid] = isValidForm(formValues);

        if (!isMailValid) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }

        if (!nonField.length && isMailValid) {
            Object.entries(formValues).forEach(([key, value]) => {
                const field = document.getElementById(key);
                field.classList.remove('emptyField')
                localStorage.setItem(key, value);
            });
            window.location.href = 'profile.html';
        } else {
            nonField.forEach((event) => {
                const field = document.getElementById(event);
                field.classList.add('emptyField');
            })
        }
    });

    document.querySelector('.dashboard__list').addEventListener('click', () => {
        const notice = document.getElementById('notice');
        notice.classList.add('show-notice');
        setTimeout(() => {
            notice.classList.remove('show-notice')
        }, 2500)
    });

    document.querySelector('.exit').addEventListener('click', () => {
        console.log(window.location.href);
        const notice = document.getElementById('notice');
        notice.classList.add('show-notice');
        setTimeout(() => {
            notice.classList.remove('show-notice')
        }, 2500)
    });
}

if (pageId === 'profilePage' || pageId === 'aboutPage' || pageId === 'settingsPage' || pageId === 'statisticsPage') {
    document.querySelector('.profile').addEventListener('click', () => {
        window.location.href = 'profile.html';
    })
    document.querySelector('.statistics').addEventListener('click', () => {
        window.location.href = 'statistics.html';
    })
    document.querySelector('.settings').addEventListener('click', () => {
        window.location.href = 'settings.html';
    })
    document.querySelector('.about').addEventListener('click', () => {
        window.location.href = 'about.html';
    })
    document.querySelector('.exit').addEventListener('click', () => {
        localStorage.clear()
        window.location.href = 'index.html';
    })
}

if (pageId === 'profilePage') {
    const subTitle = document.querySelector('.mainContent__subTitle');
    if (subTitle) {
        subTitle.textContent = `Здравствуйте, ${localStorage.name}!`;
    }

    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const username = document.getElementById('username');
    const language = document.getElementById('language');
    if (name && surname && username && localStorage){
        name.value = localStorage.name;
        surname.value = localStorage.surname;
        username.value = localStorage.username;
        language.value = localStorage.language;
    }

    const animatedProfile = document.getElementById('animatedProfile');
    setTimeout(() => {
        animatedProfile.classList.add('visible')
    }, 750);

    document.getElementById('changeData__form').addEventListener('submit', (event) => {
        event.preventDefault();
        const emailError = document.getElementById('emailError');
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData.entries());
        const [nonField, isMailValid] = isValidForm(formValues);

        if (!isMailValid) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }

        if (!nonField.length && isMailValid) {
            Object.entries(formValues).forEach(([key, value]) => {
                const field = document.getElementById(key);
                field.classList.remove('emptyField')
                localStorage.setItem(key, value);
            });
            window.location.href = location.href;
        } else {
            nonField.forEach((event) => {
                const field = document.getElementById(event);
                field.classList.add('emptyField');
            })
        }
    });
}

if (pageId === 'aboutPage') {
    const animatedAbout = document.getElementById('animatedAbout');
    setTimeout(() => {
        animatedAbout.classList.add('visible')
    }, 750);
}