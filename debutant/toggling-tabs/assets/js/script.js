let btn = document.querySelectorAll('button');
let containersInpt = document.querySelector("#containersInpt");
let select = document.querySelector('select');
let arr = [];

for(let j = 0; j < btn.length; j++) {
    let option = document.createElement('option');
    select.appendChild(option);
    btn.forEach(element => {
        arr.push(element.textContent)
    })
    option.textContent = arr[j];
    btn[j].addEventListener('click', () => {
         let selection = select.selectedIndex = (j)
        for(let e = 0; e < btn.length; e++) {
            btn[e].classList.remove('select');
        }
        btn[j].classList.add('select');
    })
    if(window.matchMedia("(min-width: 1150px)").matches  && document.querySelectorAll('option').forEach(b => {
        b.addEventListener('click',function(){})
    })){
        
    };
}

function appearance() {
    btn.forEach(e => {
        e.style.display = 'none'
    });
    select.style.display = 'block';
}

window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1150px)").matches) {
        btn.forEach(a => {
            a.style.display = ''
        });
        select.style.display = 'none'
    } else {
        appearance();
    }
})


