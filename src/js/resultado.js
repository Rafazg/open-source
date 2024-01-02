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
  var imagemResultadoBack = document.getElementById('imageId')

  imagemResultadoBack.src = '../../assets/imagens/phyton.png';
  console.log(imagemResultadoBack.src)

  function direc() {
    window.location.href = "Trilhas/paginaBack.html"
  }

} 
else if (curso == "Front-End") {
  document.getElementById('hUm').innerText = 'Front'
  document.getElementById('hDois').innerText = '-End'
  document.getElementById('desc').innerText = "A área de desenvolvimento web front-end é a ponte que une os mundos do design e da programação. O profissional desenvolvedor front-end é o responsável por colocar em prática, através de códigos, o design de um site ou interface. Enquanto o web design projeta o visual de um site, o desenvolvimento front-end implementa esse design através de códigos, como HTML, CSS e JavaScript. Ou seja, é o front-end que coloca “para funcionar” toda a parte visual de uma interface, como a página de um site ou de um aplicativo."
  var imagemResultado = document.getElementById("imageId")
  imagemResultado.src = ""
  function direc() {
    window.location.href = "Trilhas/paginaFront.html"
  }
} 
else if (curso == "Full-Stack") {
  document.getElementById('hUm').innerText = 'Fullt'
  document.getElementById('hDois').innerText = '-Stack'
  document.getElementById('desc').innerText = 'O desenvolvedor full stack é aquele profissional multitarefa que cobre várias frentes na área de TI, pois pode trabalhar com diferentes linguagens. Habilitado a oferecer um suporte completo, esse especialista está muito valorizado no mercado.'
  function direc() {
    window.location.href = "Trilhas/paginaFullstack.html"
  }
} 
else if (curso == "Desenvolvimento de Jogos") {
  document.getElementById('hUm').innerText = 'Game'
  document.getElementById('hDois').innerText = ' Dev'
  document.getElementById('desc').innerText = 'Profissionais dessa área têm a função de criar e desenvolver jogos eletrônicos para computadores, celulares, tablets ou consoles de vídeo game, além de supervisionar o andamento dos processos que envolvem a criação de um jogo.'
}
else if (curso == "Ciência de Dados") {
  document.getElementById('hUm').innerText = 'Ciência'
  document.getElementById('hDois').innerText = ' de Dados'
  document.getElementById('desc').innerText = 'A ciência dos dados é a pesquisa de informações para obter conhecimentos relevantes para o mundo dos negócios. Envolve uma abordagem eclética que une conhecimentos e práticas provenientes de campos como matemática, estatística, inteligência artificial e engenharia da computação, com o objetivo de analisar grandes volumes de dados. Através desse tipo de análise, os cientistas de dados conseguem formular e responder questões como o que ocorreu, por que ocorreu, o que está por vir e como lidar com os resultados obtidos.'
}
else if (curso == "Desenvolvimento Mobile") {
  document.getElementById('hUm').innerText = 'Desenvolvimento'
  document.getElementById('hDois').innerText = ' Mobile'
  document.getElementById('desc').innerText = 'O desenvolvimento mobile refere-se ao processo de criar e aprimorar aplicativos e sistemas para dispositivos móveis, como smartphones e tablets. É a área responsável por projetar, programar e implementar software específico para funcionar em plataformas móveis, como Android e IOS.'
}
