import {isValidForm} from './utils.js';

const pageId = document.body.id;

const statisticsData = [
    {
        title: 'Скока надо деняк',
        currentValue: 11,
        necessaryValue: 500,
    },
    {
        title: 'Скока надо',
        currentValue: 22,
        necessaryValue: 100,
    },
    {
        title: 'Скоко',
        currentValue: 33,
        necessaryValue: 100,
    },
    {
        title: 'деняк',
        currentValue: 44,
        necessaryValue: 100,
    },
    {
        title: 'надо',
        currentValue: 55,
        necessaryValue: 100,
    },
];


if (pageId === 'indexPage') {
    document.body.style.overflow = 'hidden';
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
    const statisticsTitle = document.querySelector('.statisticsTitle');
    if (subTitle && statisticsTitle) {
        subTitle.textContent = `Здравствуйте, ${localStorage.name}!`;
        statisticsTitle.textContent = `Количество отслеживаемой статистики: ${statisticsData.length}`
    }

    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const username = document.getElementById('username');
    const language = document.getElementById('language');
    if (name && surname && username && localStorage) {
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

if (pageId === 'statisticsPage') {

    const mainContent = document.querySelector('.mainContent');
    mainContent.style.backgroundColor = '#eaf0f6';

    document.body.style.backgroundColor = '#eaf0f6';

    const animatedProfile = document.getElementById('animatedProfile');
    setTimeout(() => {
        animatedProfile.classList.add('visible');
    }, 750);

    const progressBars = document.getElementById('progressBars');

    statisticsData.forEach((data, index) => {
        const block = document.createElement('div');
        block.classList.add('progress-container');

        const title = document.createElement('h2');
        title.textContent = data.title;
        title.classList.add('progress-container__title');

        const subTitle = document.createElement('p');
        subTitle.textContent = `${data.currentValue} / ${data.necessaryValue}`;
        subTitle.classList.add('progress-container__subTitle');

        const buttonBlock = document.createElement('div');
        buttonBlock.classList.add('buttonBlock');

        const minusButton = document.createElement('button');
        minusButton.textContent = 'Убавить';
        minusButton.setAttribute('id','minusButton');

        const plusButton = document.createElement('button');
        plusButton.textContent = 'Добавить';
        plusButton.setAttribute('id','plusButton');

        const inputNumber = document.createElement('input');
        inputNumber.placeholder = 'Введите число';
        inputNumber.setAttribute('id', 'inputNumber');
        inputNumber.setAttribute('type', 'number');

        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkboxContainer');

        const checkboxLabel = document.createElement('label');
        checkboxLabel.classList.add('switch');
        checkboxLabel.setAttribute('htmlFor','checkbox');

        const checkboxInput = document.createElement('input');
        checkboxInput.setAttribute('type','checkbox');
        checkboxInput.setAttribute('id','checkbox');

        const checkboxDiv = document.createElement('div');
        checkboxDiv.classList.add('slider');
        checkboxDiv.classList.add('round');

        const checkBoxText = document.createElement('label');
        checkBoxText.classList.add('checkBox__text');
        checkBoxText.textContent = 'Animated';

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('progress-svg');
        svg.setAttribute('viewBox', '0 0 100 100');

        const progressBg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        progressBg.classList.add('progress-bg');
        progressBg.setAttribute('cx', '50');
        progressBg.setAttribute('cy', '50');
        progressBg.setAttribute('r', '20');

        const progressBar = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        progressBar.classList.add('progress-bar');
        progressBar.setAttribute('cx', '50');
        progressBar.setAttribute('cy', '50');
        progressBar.setAttribute('r', '20');

        const progressText = document.createElement('div');
        progressText.classList.add('progress-text');

        const updateProgress = () => {
            const progress = Math.min(Math.max(Math.floor((data.currentValue / data.necessaryValue) * 100), 0), 100);
            progressText.textContent = `${progress}%`;
            subTitle.textContent = `${data.currentValue} / ${data.necessaryValue}`;
            const offset = 283 - Math.floor(125 / 100 * progress);
            progressBar.style.strokeDashoffset = String(offset);
            inputNumber.value = data.currentValue;
        };

        minusButton.addEventListener('click', () => {
            if (data.currentValue > 0) {
                data.currentValue -= 1;
                updateProgress();
            }
        });

        plusButton.addEventListener('click', () => {
            if (data.currentValue < data.necessaryValue) {
                data.currentValue += 1;
                updateProgress();
            }
        });

        inputNumber.addEventListener('input', (e) => {
            const inputValue = e.target.value;

            if (inputValue === '') {
                data.currentValue = 0;
                updateProgress();
            } else {
                const newValue = parseInt(inputValue, 10);
                if (!isNaN(newValue) && newValue >= 0 && newValue <= data.necessaryValue) {
                    data.currentValue = newValue;
                    updateProgress();
                } else {
                    e.target.value = data.currentValue;
                }
            }
        });

        updateProgress();

        checkboxLabel.appendChild(checkboxInput);
        checkboxLabel.appendChild(checkboxDiv);

        svg.appendChild(progressBg);
        svg.appendChild(progressBar);

        buttonBlock.appendChild(minusButton);
        buttonBlock.appendChild(inputNumber);
        buttonBlock.appendChild(plusButton);

        checkboxContainer.appendChild(checkboxLabel)
        checkboxContainer.appendChild(checkBoxText)

        block.appendChild(title);
        block.appendChild(subTitle);
        block.appendChild(buttonBlock);
        block.appendChild(checkboxContainer);
        block.appendChild(svg);
        block.appendChild(progressText);
        progressBars.appendChild(block);
    });
}

