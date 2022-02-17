import { fetchEvents } from "./eventsAPI.js";

const refs = {
    events: document.querySelector('.events'),
    prevBtn: document.querySelector('[data-btn="prev"]'),
    nextBtn: document.querySelector('[data-btn="next"]'),
    linkList: document.querySelector('.link-list'),
    
}
refs.links = refs.linkList.querySelectorAll('.link');
let totalPages = null;

fetchEvents().then(onSuccess).catch(handleError)
refs.prevBtn.addEventListener('click', onPrevBtnClick);
refs.nextBtn.addEventListener('click', onNextBtnClick);



function createMarkup({ name, images }) {
    return `<li>
    <img src="${images[0].url}" alt="${name}" width="300"/>
    <p>Title: ${name}</p>
    </li>`;
    
}
function renderList(events=[]){
    const markup = events.map(createMarkup).join('');
    refs.events.insertAdjacentHTML('beforeend', markup)
}
function handleError() {
    console.log("Not");
}

function onSuccess(res) {
    renderList(res._embedded.events);
}

function onPrevBtnClick() {
    refs.nextBtn.disabled = false;
    const prevPage = Number(refs.links[0].textContent);
    const linksref = document.querySelectorAll('.link-list .link');
    console.log(linksref);
    changeLinksText(-5);

    if (refs.links[0].textContent === '1') {
        refs.prevBtn.disabled = true;
    }
}

function onNextBtnClick() {
    const pages = totalPages - Number(refs.links[4].textContent);
    if (pages < 5) {
        refs.linkList.innerHTML = '';
        for (let i = lastPage; i <= totalPages; i += 1){
            markup+= createLinksMarkup(i)
        }
        refs.linkList.insertAdjacentHTML('beforeend', markup)
    }
    changeLinksText(5);
    if (refs.links[0].textContent !== '1') {
        refs.prevBtn.disabled = false;
    }
}


function changeLinksText(num) {
    refs.links.forEach(link=>(link.textContent = Number(link.textContent)+num))
}
function createLinksMarkup(num) {
    return `</li>
        <li class="link-list__item">
          <a class="link" href="">${num}</a>
        </li>`
}


