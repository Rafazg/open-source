const imgs1 = document.getElementById('cursos1');
const img = document.querySelectorAll("#cursos1 img");

let idn = 0;

function carrossel1(){
    idn++;

    if (idn > img.length -1) {
        idn = 0;
    }

    imgs1.style.transform = `translateX(${- idn * 420}px)`;
}
setInterval(carrossel1, 1800);

const imgs2 = document.getElementById('cursos2');
const img2 = document.querySelectorAll("#cursos2 img");

let idn2 = 0;

function carrossel2(){
    idn2++;

    if (idn2 > img2.length -1) {
        idn2 = 0;
    }

    imgs2.style.transform = `translateX(${- idn2 * 420}px)`;
}
setInterval(carrossel2, 2800);