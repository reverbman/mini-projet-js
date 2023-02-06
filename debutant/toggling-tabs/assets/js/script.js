let btn = document.querySelectorAll('button');
let containersInpt = document.querySelector("#containersInpt");
let select = document.querySelector('select');

for (let j = 0; j < btn.length; j++) {
    let option = document.createElement('option');
    select.appendChild(option);
    option.textContent = btn[j].textContent;
    btn[j].addEventListener('click', () => {
        let selection = select.selectedIndex = (j)
        for (let e = 0; e < btn.length; e++) {
            btn[e].classList.remove('select');
        }
        btn[j].classList.add('select');
    })
}

function selected() {
    select.addEventListener("change", function () {
        btn.forEach(element => {
            element.classList.remove('select');
        });
        btn[select.selectedIndex].classList.add('select')
    });
}
window.addEventListener("load", selected, false);

window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1150px)").matches) {
        btn.forEach(t => {
            t.style.display = ''
        });
        select.style.display = 'none'
    } else {
        appearance()
    }
})
function appearance() {
    btn.forEach(t => {
        t.style.display = 'none'
    });
    select.style.display = 'block';
}


