import books from './books.js';
// Вводим константу для названия ключа из локального хранилища
const BOOKS = "book";

// Сохраняем в локальном хранилище обект books, предварительно превратив его в строку 
localStorage.setItem(BOOKS, JSON.stringify(books));

// Получаем ссылку на основной div
const divRootRef = document.querySelector('#root');

// Cоздаем два div
const firstDivRef = document.createElement('div');
const secondDivRef = document.createElement('div');


// Lобавляем классы на созданные div
firstDivRef.classList.add('first-div');
secondDivRef.classList.add('second-div');

// Добавляем после основного дива два новосозданных элемента
divRootRef.append(firstDivRef, secondDivRef);

// Создаём три элемента разметки, добавляем текстовый контент, добавляем их в первый div
const titleRef = document.createElement('h1');
const bookListRef = document.createElement('ul');
const addBtnRef = document.createElement('button');
titleRef.textContent = 'Library';
addBtnRef.textContent = 'Add';
firstDivRef.append(titleRef, bookListRef, addBtnRef);

// Получаем ссылку на ul
const linkBookList = document.querySelector('ul');

// Вешаем слушателя на кнопку ADD и колбек: вызов функции addBook
addBtnRef.addEventListener('click', addBook);

// Функция renderList
function renderList() {
    // Парсим из локального хранилища массив объектов
    const books = JSON.parse(localStorage.getItem(BOOKS));
    // В переменную markup записываем результат выполнения метода map() - строку
    const markup = books.map(({ title, id}) => {
        return `<li id='${id}'>
            <p class="title-book">${title}</p>
            <button type="button" class="btn-edit">Edit</button>
            <button type="button" class="btn-del">Del</button>
            </li > `
    }).join('');
    // В элемент ul вставляем новосозданную разметку
    bookListRef.insertAdjacentHTML("afterbegin", markup);
    // Получаем ссылки на все кнопки edit
    const btnEditRef = document.querySelectorAll(".btn-edit");
    // Получаем ссылки на все кнопки del
    const btnDelRef = document.querySelectorAll('.btn-del');
    // Методом forEach перебираем все кнопки edit, вешаем слушателей и колбек функцию editBook
    btnEditRef.forEach(item => {
        item.addEventListener('click', editBook);
    });
    // Методом forEach перебираем все кнопки del, вешаем слушателей и колбек функцию delBook
    btnDelRef.forEach(item => {
        item.addEventListener('click', delBook);
    });
    // Получаем ссылки на все абзацы <p> с заголовками книг
    const refP = document.querySelectorAll(".title-book");
    // Методом forEach перебираем все кнопки абзацы <p>, вешаем слушателей и колбек функцию renderPreview
    refP.forEach(item => {
        item.addEventListener('click', renderPreview)
    });
}

// Вызываем функцию renderList()
renderList();

// Создаём функцию previewMarkup, которая создаёт разметку для превью выбранной пользователем книги
function previewMarkup({ title,  author, img, plot, id  }) {
        return `<div id="${id}" class="wrapper">
            <h2>${title}</h2>
            <p>${author}</p>
            <img src='${img}' alt='Титульная страница книги' width="250px">
            <p>${plot}</p>
            </div > `
}

// Создаём функцию formMarkup, кторая создаёт разметку для формы
function formMarkup({ title, author, img, plot }) {
    return ` <form action="" class="add-form">
        <label>
            Title
                <input type="text" name="title" value="${title}" />
            </label>
            <label>
            Author
                <input type="text" name="author" value="${author}"/>
            </label>
            <label>
            Image URL
                <input type="text" name="img" value="${img}"/>
            </label>
            <label>
            Plot
                <input type="text" name="plot" value="${plot}"/>
            </label>
            <button type="button" class="save-btn" >Save</button>
            </form>`;
}

// Создаём функцию renderPreview, которая рендерит разметку превью во втором диве
function renderPreview(event) {
    const books = JSON.parse(localStorage.getItem(BOOKS));
    const book= books.find(book => book.title === event.target.textContent);
    const markup =  previewMarkup(book);
    secondDivRef.innerHTML = '';
    secondDivRef.insertAdjacentHTML('beforeend', markup)
}

function editBook(event) {
    const books = JSON.parse(localStorage.getItem(BOOKS));
    const idElem = event.target.parentNode.getAttribute("id");
    const bookToEdit = books.find(book => book.id === idElem);
    const markup = formMarkup(bookToEdit);
    secondDivRef.innerHTML = '';
    secondDivRef.insertAdjacentHTML('afterbegin', markup);
    saveInputData(bookToEdit);

    const saveBtn = document.querySelector(".save-btn");
    saveBtn.addEventListener("click", onSaveData);

    function onSaveData() {
        if (bookToEdit.title === '' || bookToEdit.author === '' || bookToEdit.img === '' || bookToEdit.plot === '') {
            alert("Please fill in all the fields");
        } else {
            const markup = previewMarkup(bookToEdit);
            secondDivRef.innerHTML = '';
            secondDivRef.insertAdjacentHTML('afterbegin', markup);

            const index = books.indexOf(bookToEdit);
            books[index] = bookToEdit;
            localStorage.setItem(BOOKS, JSON.stringify(books));
            bookListRef.innerHTML = '';
            renderList();
        }
    }
    
}

function delBook(event) {
    const idElem = event.target.parentNode.getAttribute("id");
    const books = JSON.parse(localStorage.getItem(BOOKS));
    const updaitBook = books.filter(book => idElem !== book.id);
    // отфильтрованный массив записали заново в локальное хранилище
    localStorage.setItem(BOOKS, JSON.stringify(updaitBook));
    // очищаем разметку
    bookListRef.innerHTML = '';
    // очищаем превью и вызываем метод renderList() 
    renderList();
    const wrapper = document.querySelector(".wrapper")
    if (wrapper) {
        if(wrapper.id===idElem){
        secondDivRef.innerHTML = '';
        }
    }
}

// Создаём функцию addBook, которая
function addBook(event) {
    const newBook = { id: `${Date.now()}`, title: '', author: '', img: '', plot: '' };
    
    const markup = formMarkup(newBook);
    secondDivRef.innerHTML = '';
    secondDivRef.insertAdjacentHTML('afterbegin', markup);
    saveInputData(newBook);

    const saveBtn = document.querySelector('.save-btn');
    saveBtn.addEventListener('click', onSaveData);
    
    function onSaveData() {
        if (newBook.title === '' || newBook.author === '' || newBook.img === '' || newBook.plot === '') {
            alert("Please fill in all the fields!");
        } else {
            const markup = previewMarkup(newBook);
            secondDivRef.innerHTML = '';
            secondDivRef.insertAdjacentHTML('afterbegin', markup);
            const books = JSON.parse(localStorage.getItem(BOOKS)); 
            books.push(newBook);
            localStorage.setItem(BOOKS, JSON.stringify(books));
            bookListRef.innerHTML = '';
            renderList();
        }
    }

}

// Создаём функцию onTextInput, которая
function   saveInputData(book) {
    // Получаем ссылки на все input
    const inputAllRef = document.querySelectorAll('input');

    const onChange = event => { book[event.target.name] = event.target.value };
    // Перебираем в цикле каждый input и вешаем на него слушателя
    inputAllRef.forEach(input => input.addEventListener('change', onChange));
}