const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));
//cursos
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("curso");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

//resultados
var curso = localStorage.getItem("rItem");
if (curso == "Back-End") {
  document.getElementById('hUm').innerText = 'Back'
  document.getElementById('hDois').innerText = '-End'
} else if (curso == "Front-End") {
  document.getElementById('hUm').innerText = 'Front'
  document.getElementById('hDois').innerText = '-End'
  document.getElementById('desc').innerText = "A área de desenvolvimento web front-end é a ponte que une os mundos do design e da programação. O profissional desenvolvedor front-end é o responsável por colocar em prática, através de códigos, o design de um site ou interface. Enquanto o web design projeta o visual de um site, o desenvolvimento front-end implementa esse design através de códigos, como HTML, CSS e JavaScript. Ou seja, é o front-end que coloca “para funcionar” toda a parte visual de uma interface, como a página de um site ou de um aplicativo."
} else if (curso == "Full-Stack") {
  document.getElementById('hUm').innerText = 'Fullt'
  document.getElementById('hDois').innerText = '-Stack'
  document.getElementById('desc').innerText = 'O desenvolvedor full stack é aquele profissional multitarefa que cobre várias frentes na área de TI, pois pode trabalhar com diferentes linguagens. Habilitado a oferecer um suporte completo, esse especialista está muito valorizado no mercado.'
} else if (curso == "Desenvolvimento de Jogos") {
  document.getElementById('hUm').innerText = 'Game'
  document.getElementById('hDois').innerText = ' Dev'
  document.getElementById('desc').innerText = 'Profissionais dessa área têm a função de criar e desenvolver jogos eletrônicos para computadores, celulares, tablets ou consoles de vídeo game, além de supervisionar o andamento dos processos que envolvem a criação de um jogo.'
}