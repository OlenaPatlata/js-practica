const API_KEY = "9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK";
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

function fetchEvents(page=1) {
    const params = new URLSearchParams({
        apikey: API_KEY,
        page,
    });
    return fetch(`${BASE_URL}/events.json?${params}`)
        .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
        // .then(res => res._embedded?.events)
        ;
}
export { fetchEvents };