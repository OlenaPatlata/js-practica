import books from './books.js';
console.log(books);

const divRootRef = document.querySelector('#root');
// создаем два div
const firstDivRef = document.createElement('div');
const secondDivRef = document.createElement('div');


// добавляем классы на созданные div
firstDivRef.classList.add('first-div');
secondDivRef.classList.add('second-div');
document.querySelector('#root').append(firstDivRef, secondDivRef);
const titleRef = document.createElement('h1');
const bookListRef = document.createElement('ul');
const addBtnRef = document.createElement('button');
titleRef.textContent = 'Library';
addBtnRef.textContent = 'Add';
firstDivRef.append(titleRef, bookListRef, addBtnRef);
const linkBookList = document.querySelector('ul');



addBtnRef.addEventListener('click', addBook);

function renderList(books) {
    const markup = books.map(({ title, id}) => {
        return `<li id='${id}'>
            <p class="title-book">${title}</p>
            <button type="button" class="btn-edit">Edit</button>
            <button type="button" class="btn-del">Del</button>
            </li > `
    }).join('');
    bookListRef.insertAdjacentHTML("afterbegin", markup);
    const btnEditRef = document.querySelectorAll(".btn-edit");
    const btnDelRef = document.querySelectorAll('.btn-del');
    btnEditRef.forEach(item => {
        item.addEventListener('click', editBook);
    });
    btnDelRef.forEach(item => {
        item.addEventListener('click', delBook);
    });
    const refP = document.querySelectorAll(".title-book");
    refP.forEach(item => {
        item.addEventListener('click', renderPreview)
    });
    
}

renderList(books)

function previewMarkup({ title,  author, img, plot  }) {
        return `<div>
            <h2>${title}</h2>
            <p>${author}</p>
            <img src='${img}' alt='Титульная страница книги' width="250px">
            <p>${plot}</p>
            </div > `
}


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
            <button type="button" class="form-btn" >Save</button>
            </form>`;
}


function renderPreview(event) {
    const book= books.find(book => book.title === event.target.textContent);
    const markup =  previewMarkup(book);
    secondDivRef.innerHTML = '';
    secondDivRef.insertAdjacentHTML('beforeend', markup)
}


function editBook() {
    console.log("edit");
}

function delBook(event) {
    const idElem = event.target.parentNode.getAttribute("id")
    const updaitBook = books.filter(book => idElem !== book.id)
    bookListRef.innerHTML = '';
    renderList(updaitBook);
}

function addBook(event) {

    const newBook = { id: Date.now(), title: '', author: '', img: '', plot: '' };
    
    const markup = formMarkup(newBook);
    secondDivRef.innerHTML = '';
    secondDivRef.insertAdjacentHTML('afterbegin', markup);
    onTextInput(newBook);

    const btnInputRef = document.querySelector('.form-btn');
    btnInputRef.addEventListener('click', onSaveData);
    
    function onSaveData() {
        if (newBook.title === '' || newBook.author === '' || newBook.img === '' || newBook.plot === '') {
            alert("Все поля заполни!");
        } else {
            const markup = previewMarkup(newBook);
            secondDivRef.innerHTML = '';
            secondDivRef.insertAdjacentHTML('beforeend', markup);
        }
    }
    function onTextInput(book) {
    const inputAllRef = document.querySelectorAll('input');
    const onChange = event => { book[event.target.name] = event.target.value };
        inputAllRef.forEach(input => input.addEventListener('change', onChange));
    }
}

