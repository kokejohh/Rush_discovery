const queryString = location.search;
const target = queryString.replace('?', '');

fetch('json/data.json')
.then((response) => response.json())
.then((data) => {
    const person = data.person.find(person => person.username === target);

    const profile = document.querySelector('#profile');
    const name = document.querySelector('#name');

    profile.setAttribute('src', person.profile);
    name.innerHTML = person.name;
})