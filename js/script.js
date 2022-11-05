const queryString = location.search;
const target = queryString.replace('?', '');

fetch('json/data.json')
.then((response) => response.json())
.then((data) => {
    const person = data.person.find(person => person.username === target);

    const profile = document.querySelector('#profile');
    const name = document.querySelector('#name');
    const skills = document.querySelector('#skill');
    const education = document.querySelector('#education');
    const phone = document.querySelector('#phone');
    const email = document.querySelector('#email');

    //profile picture
    profile.setAttribute('src', person.profile);
    //name
    name.innerHTML = person.name;

    //skill
    const table = document.querySelector('#table-skill');
    person.skill.map((msg) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');

        const lang = document.createTextNode(msg.lang);
        const score = document.createTextNode(msg.score + " / " + "5");
        td1.appendChild(lang);
        td2.appendChild(score);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    });
    skills.appendChild(table);

    //education
    person.education.map((msg) => {
        const h3 = document.createElement('h3');
        const text = document.createTextNode(msg);
        h3.appendChild(text);
        education.appendChild(h3);
    });
    
    //contact
    phone.textContent = person.contact.phone;
    email.textContent = person.contact.email;
});

