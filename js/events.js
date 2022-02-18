import { EventsApi } from './eventsAPI.js';
const refs = {
  events: document.querySelector('.events'),
  prevBtn: document.querySelector("[data-btn='prev']"),
  nextBtn: document.querySelector("[data-btn='next']"),
  linkList: document.querySelector('.link-list'),
};

let listFirstPage = 1;
let totalPages = null;
const eventsAPI = new EventsApi('beatles');

eventsAPI.fetchEvents().then(handleSuccess).catch(handleError);
refs.prevBtn.addEventListener('click', onPrevBtnClick);
refs.nextBtn.addEventListener('click', onNextBtnClick);
refs.linkList.addEventListener('click', onlinkClick);


function handleSuccess(res) {
  const events = res._embedded?.events;
  totalPages = res.page?.totalPages;
  renderList(events);
  const listLastPage = totalPages > 5 ? 5 : totalPages;
  createList(1, listLastPage + 1);
}
function renderList(events = []) {
  const markup = events.map(createMarkup).join('');
  refs.events.innerHTML = '';
  refs.events.insertAdjacentHTML('beforeend', markup);
}
function createMarkup({ name, images = [], dates, url }) {
  const { url: imageUrl } = images.find(({ ratio, width }) => ratio === '3_2' && width === 305);
  return `
    <li class="events__item">
    <a class="events__link" href="${url}" target="_blank" rel="noopener noreferrer">
    <img src="${imageUrl}" alt="${name}" width="300" />
    <div>
    <p>${name}</p>
    <p>${new Date(dates?.start?.localDate).toLocaleDateString()} ${dates?.start?.localTime}</p>
    </div>
    </a>
    </li>
    `;
}

function handleError(err) {
  console.error(err);
}

function onPrevBtnClick() {
  if (listFirstPage <= 1) return;

  refs.nextBtn.disabled = false;
  const linksRef = getLinksRef();

  if (linksRef.length < 5) {
    listFirstPage = listFirstPage - 5;
    createList(listFirstPage, listFirstPage + 5);
    return;
  }

  changeLinksText(-5, linksRef);
  if (listFirstPage === 1) {
    refs.prevBtn.disabled = true;
  }
}
function onNextBtnClick() {
  if (listFirstPage > totalPages) return;

  refs.prevBtn.disabled = false;
  const linksRef = getLinksRef();
  const lastPage = listFirstPage + 4;
  const pages = totalPages - lastPage;

  if (pages < 5) {
    listFirstPage = lastPage + 1;
    createList(listFirstPage, totalPages + 1);
    refs.nextBtn.disabled = true;
    return;
  }

  changeLinksText(5, linksRef);
}

function getLinksRef() {
  return document.querySelectorAll('.link-list .link');
}

function changeLinksText(num, refs) {
  listFirstPage += num;
  refs.forEach((link, index) => {
    const num = listFirstPage + index;
    link.textContent = num;
    link.dataset.num = num;
  });
}

function createList(first, last) {
  refs.linkList.innerHTML = '';
  let markup = '';
  for (let i = first; i < last; i += 1) {
    markup += createLinkMarkup(i);
  }
  refs.linkList.insertAdjacentHTML('beforeend', markup);
}

function createLinkMarkup(num) {
  return `
    <li class="link-list__item">
      <a class="link" href="">${num}</a>
    </li>
    `;
}


async function onlinkClick(e) {
  if (e.target === e.currentTarget) return;
  e.preventDefault();
  const linksRef = [...getLinksRef()];
  const index = linksRef.findIndex(link=>link===e.target);
  const page = listFirstPage + index;
  eventsAPI.page = page;
  try {
      const result = await  eventsAPI.fetchEvents();
  const events = result._embedded?.events;
  renderList(events);
  } catch (error) {
    handleError(error)
  }
}