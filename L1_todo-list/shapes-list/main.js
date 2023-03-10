// 1. Найти все элементы, которые отвечают за "действия" на странице
const btnAdd = document.querySelector('#btn_add');

const inputCircle = document.querySelector('#radio_circle');
const inputSquare = document.querySelector('#radio_square');

const select = document.querySelector('#select');

const output = document.querySelector('#output');

// 2. Вешаем обработчик действия
btnAdd.addEventListener('click', () => {
    // 3. Соберем необходимые данные
    const color = select.value;

    let shape;
    if (inputCircle.checked) {
        shape = inputCircle.value;
    } else {
        shape = inputSquare.value;
    }

    console.log(color, shape);

    // 4. Модифицируем имеющиеся данные
    const figureEl = document.createElement('li');
    output.append(figureEl);
    figureEl.classList.add('output-list-item');
    figureEl.classList.add(shape);
    figureEl.classList.add(color);

    const contentEl = document.createElement('span');
    contentEl.classList.add('content');
    contentEl.textContent = shape + ' ' + color;

    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add('remove-btn');

    figureEl.append(contentEl, removeBtnEl);

    removeBtnEl.addEventListener('click', () => {
        figureEl.remove();
    })
    // ...
});

// 5(?). Декомпозируем на блоки кода
