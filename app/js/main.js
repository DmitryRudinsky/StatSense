import {isValidForm} from './utils.js';

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
    const notice = document.getElementById('notice');
    notice.classList.add('show-notice');
    setTimeout(() => {
        notice.classList.remove('show-notice')
    }, 2500)
});