const queryString = location.search;
const target = queryString.replace('?', '');

fetch('json/data.json')
.then((response) => response.json())
.then((data) => {
    const person = data.person.find(person => person.username === target);

    const profile = document.querySelector('#profile');
    const name = document.querySelector('#name');
    const skills = document.querySelector('#skill');
    const resume = document.querySelector('#resume');
    const phone = document.querySelector('#phone');
    const email = document.querySelector('#email');

    profile.setAttribute('src', person.profile);
    name.innerHTML = person.name;

    const ul = document.createElement('ul');
    person.skill.map((msg) => {
        const h3 = document.createElement('h3');
        const li = document.createElement('li');
        const text = document.createTextNode(msg);
        li.appendChild(h3);
        h3.appendChild(text);
        ul.appendChild(li);
    });
    skills.appendChild(ul);

    person.resume.map((msg) => {
        const h3 = document.createElement('h3');
        const text = document.createTextNode(msg);
        h3.appendChild(text);
        resume.appendChild(h3);
    });

    phone.textContent = person.contact.phone;
    email.textContent = person.contact.email;
})