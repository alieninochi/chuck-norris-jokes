const URL = 'https://api.chucknorris.io/jokes/random';

const fetchPeople = url => {
    fetch(url)
        .then(res => res.json())
        .then(console.log);
}

fetchPeople(URL);
