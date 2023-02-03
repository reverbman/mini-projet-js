let content = document.getElementById('content');
let btn = document.querySelector('button');
let body = document.querySelector('#containers');
let count = 1;
let html = document.querySelector('html');
let mask = document.querySelector("#mask")

async function fetchPeople(url) {
    let results = await fetch(url);
    let data = await results.json();
    let next = data.next;
    data.results.forEach(element => {
        let div = document.createElement('div');
        div.id = "peopleContent"
        let p = document.createElement('p');
        content.appendChild(div);
        div.appendChild(p);
        p.textContent = element.name;
    });
}

btn.addEventListener('click', async function () {
    mask.style.zIndex = "999"
    btn.style.display = "none"
    let urlPeople = `https://swapi.dev/api/people/?page=${count}`;
    await fetchPeople(urlPeople);
    btn.style.display = ""
    mask.style.zIndex = "-1";
    count++;
});
