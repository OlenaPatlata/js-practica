class EventsApi {
    static #API_KEY = '9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK';
    static BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
    #page = 1;
    #keyword;
    constructor(keyword = '') {
        this.#keyword = keyword;
    }
    
    async fetchEvents() {
    const params = new URLSearchParams({
        apikey: EventsApi.#API_KEY,
        page: this.#page,
        keyword: this.#keyword,
    });
            const result = await fetch(`${EventsApi.BASE_URL}/events.json?${params}`);
            return result.ok ? result.json() : Promise.reject(result.statusText);
    
    }

  resetPage() {
    this.#page = 1;
  } 

  get keyword() {
    return this.#keyword;
  }
  set keyword(value) {
    this.#keyword = value;
  }
  get page() {
    return this.#page;
  }
  set page(value) {
    this.#page = value;
  }
}

export { EventsApi };