const KEY_API = '25712416-b7f8b21cfce49117d938a95c8';
const BASE_URL = "https://pixabay.com/api/";

// "https://pixabay.com/api/?key=25712416-b7f8b21cfce49117d938a95c8&q=dog&page=1'

const params = new URLSearchParams({
    image_type: "photo",
    orientation: "horizontal",
    per_page: 10,

})

const inputRef = document.querySelector('input');
const listRef = document.querySelector(".list")


let page = 0;

function fetchImages(word) {
    return fetch(`${BASE_URL}?key=${KEY_API}&q=${word}&${params}&page=${page}`).then(res => {
            if (!res.ok) {
            return new Error(res.message)
        }
        return res.json();
    })
}


function getImages() {
    const searchQuery = inputRef.value.trim();
    if (searchQuery === '') {
        listRef.innerHTML = "";
        return;
    }
    page += 1;
    fetchImages(searchQuery).then(({hits}) => {
    renderList(hits);
    })
}


function renderList(array) {
    const markup = array.map(({ webformatURL, largeImageURL, tags }) => {
        return `<li><a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" data-source=""></a></li>`
    }).join('');
    listRef.insertAdjacentHTML('beforeend', markup)
    loadMore();
}


// Бесконечный скрол 
// function loadMore() {
//     const observer = new IntersectionObserver(
//         (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 observer.unobserve(entry.target)
//                 getImages()
//             }
//         })
//         }, { threshold: 0.5 })
//     observer.observe(document.querySelector("li:last-child"))
// }


// inputRef.addEventListener('input', _.throttle(getImages, 1000))

inputRef.addEventListener('input', _.debounce(getImages, 1000))


// rxjs библиотека