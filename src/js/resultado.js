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
var
  imagem01 = document.getElementById('imageId1'),
  imagem02 = document.getElementById('imageId2'),
  imagem03 = document.getElementById('imageId3');

var curso = localStorage.getItem("rItem");
if (curso == "Back-End") {
  document.getElementById('hUm').innerText = 'Back'
  document.getElementById('hDois').innerText = '-End'
  //imagens
  imagem01.src = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Python_logo_51.svg';
  imagem02.src = 'https://cdn-icons-png.flaticon.com/128/5968/5968322.png';
  imagem03.src = 'https://cdn-icons-png.flaticon.com/128/919/919830.png';
  //nome das linguagens
  document.getElementById('langName1').innerHTML = "Python"
  document.getElementById('langName2').innerHTML = "Node.JS"
  document.getElementById('langName3').innerHTML = "PHP"

  function direc() {
    window.location.href = "Trilhas/paginaBack.html"
  }

}
else if (curso == "Front-End") {
  document.getElementById('hUm').innerText = 'Front'
  document.getElementById('hDois').innerText = '-End'
  document.getElementById('desc').innerText = "A área de desenvolvimento web front-end é a ponte que une os mundos do design e da programação. O profissional desenvolvedor front-end é o responsável por colocar em prática, através de códigos, o design de um site ou interface. Enquanto o web design projeta o visual de um site, o desenvolvimento front-end implementa esse design através de códigos, como HTML, CSS e JavaScript. Ou seja, é o front-end que coloca “para funcionar” toda a parte visual de uma interface, como a página de um site ou de um aplicativo."
  //imagens
  imagem01.src = 'https://cdn-icons-png.flaticon.com/128/1051/1051277.png';
  imagem02.src = 'https://cdn-icons-png.flaticon.com/128/732/732190.png';
  imagem03.src = 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png';
  //nome das linguagens
  document.getElementById('langName1').innerHTML = "HTML"
  document.getElementById('langName2').innerHTML = "CSS"
  document.getElementById('langName3').innerHTML = "JavaScript"
  function direc() {
    window.location.href = "Trilhas/paginaFront.html"
  }
}
else if (curso == "Full-Stack") {
  document.getElementById('hUm').innerText = 'Fullt'
  document.getElementById('hDois').innerText = '-Stack'
  document.getElementById('desc').innerText = 'O desenvolvedor full stack é aquele profissional multitarefa que cobre várias frentes na área de TI, pois pode trabalhar com diferentes linguagens. Habilitado a oferecer um suporte completo, esse especialista está muito valorizado no mercado.'
  //imagens
  imagem01.src = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Python_logo_51.svg';
  imagem02.src = 'https://cdn-icons-png.flaticon.com/128/5968/5968313.png';
  imagem03.src = 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png';
  //nome das linguagens
  document.getElementById('langName1').innerHTML = "Python"
  document.getElementById('langName2').innerHTML = "MySQL"
  document.getElementById('langName3').innerHTML = "JavaScript"
  function direc() {
    window.location.href = "Trilhas/paginaFullstack.html"
  }
}
else if (curso == "Desenvolvimento de Jogos") {
  document.getElementById('hUm').innerText = 'Game'
  document.getElementById('hDois').innerText = ' Dev'
  document.getElementById('desc').innerText = 'Profissionais dessa área têm a função de criar e desenvolver jogos eletrônicos para computadores, celulares, tablets ou consoles de vídeo game, além de supervisionar o andamento dos processos que envolvem a criação de um jogo.'
  //imagens
  imagem01.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHb9p3QIezFVDz6i23gK96odA2TaEYwPulzQ&usqp=CAU';
  imagem02.src = 'https://cdn.sanity.io/images/fuvbjjlp/production/bd6440647fa19b1863cd025fa45f8dad98d33181-2000x2000.png';
  imagem03.src = 'https://i.imgur.com/P31DZba.png';
  //nome das linguagens
  document.getElementById('langName1').innerHTML = "Game Maker"
  document.getElementById('langName2').innerHTML = "Unity"
  document.getElementById('langName3').innerHTML = "RPG Maker"
}
else if (curso == "Ciência de Dados") {
  document.getElementById('hUm').innerText = 'Ciência'
  document.getElementById('hDois').innerText = ' de Dados'
  document.getElementById('desc').innerText = 'A ciência dos dados é a pesquisa de informações para obter conhecimentos relevantes para o mundo dos negócios. Envolve uma abordagem eclética que une conhecimentos e práticas provenientes de campos como matemática, estatística, inteligência artificial e engenharia da computação, com o objetivo de analisar grandes volumes de dados. Através desse tipo de análise, os cientistas de dados conseguem formular e responder questões como o que ocorreu, por que ocorreu, o que está por vir e como lidar com os resultados obtidos.'
  //imagens
  imagem01.src = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Python_logo_51.svg';
  imagem02.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKZxjr8u5xyf-XTUkUEUqL_GhnM7-t6qwU0YQcIQg-9LdgVi3G-bY&usqp=CAE&s';
  imagem03.src = 'https://cdn-icons-png.flaticon.com/128/76/76148.png';
  //nome das linguagens
  document.getElementById('langName1').innerHTML = "Python"
  document.getElementById('langName2').innerHTML = "Julia"
  document.getElementById('langName3').innerHTML = "SQL"
}
else if (curso == "Desenvolvimento Mobile") {
  document.getElementById('hUm').innerText = 'Desenvolvimento'
  document.getElementById('hDois').innerText = ' Mobile'
  document.getElementById('desc').innerText = 'O desenvolvimento mobile refere-se ao processo de criar e aprimorar aplicativos e sistemas para dispositivos móveis, como smartphones e tablets. É a área responsável por projetar, programar e implementar software específico para funcionar em plataformas móveis, como Android e IOS.'
  //imagens
  imagem01.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png';
  imagem02.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/2048px-Kotlin_Icon.svg.png';
  imagem03.src = 'https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png';
  //nome das linguagens
  document.getElementById('langName1').innerHTML = "React Native"
  document.getElementById('langName2').innerHTML = "Kotlin"
  document.getElementById('langName3').innerHTML = "Flutter"
}
