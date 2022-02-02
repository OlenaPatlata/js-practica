const books = [
	{
		id: '1',
		title: `Apple. Эволюция компьютера`,
		author: `Владимир Невзоров`,
		img: `https://bukva.ua/img/products/449/449532_200.jpg`,
		plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
	},
	{
		id: '2',
		title: `Как объяснить ребенку информатику`,
		author: `Кэрол Вордерман`,
		img: `https://bukva.ua/img/products/480/480030_200.jpg`,
		plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
	},
	{
		id: '3',
		title: `Путь скрам-мастера. #ScrumMasterWay`,
		author: `Зузана Шохова`,
		img: `https://bukva.ua/img/products/480/480090_200.jpg`,
		plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
	},
];




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


function formMarkup({ title,  author, img, plot  }){
    return `<form action="">
    <label>
    Title
    <input type="text" name="title" value=${title}/>
    </label>
    <label>
    Author
        <input type="text" name="author" value=${author} />
    </label>
    <label>
    Image URL
        <input type="text" name="img" value=${img}/>
    </label>
    <label>
    Plot
        <input type="text" name="plot" value=${plot}/>
    </label>
    <button type="button">Save</button>
    </form>`
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

