console.log('hello world');

const bouton = document.querySelector('#button');

const spanText = document.querySelector('.press')
;

bouton.addEventListener("click", () => {
    console.log('fuck off');
});

spanText.addEventListener("click", () => {
    console.log('quel joli span dis donc');
}
)


const hulkImg = document.querySelector('.hulk');

hulkImg.addEventListener("click", () => {
    console.log('wow balèze');
    hulkImg.classList.add('circle');
}
)