const colorRed = document.getElementById('red');
colorRed.style.backgroundColor = 'red';
colorRed.style.border = 'solid';
colorRed.style.width = '75%';
colorRed.style.borderWidth = '1px';

const coloGreen = document.getElementById('green');
coloGreen.style.backgroundColor = 'green';
coloGreen.style.border = 'solid';
coloGreen.style.width = '75%';
coloGreen.style.borderWidth = '1px';

const colorBlack = document.getElementById('black');
colorBlack.style.backgroundColor = 'black';
colorBlack.style.border = 'solid';
colorBlack.style.width = '75%';
colorBlack.style.borderWidth = '1px';

const colorBlue = document.getElementById('blue');
colorBlue.style.backgroundColor = 'blue';
colorBlue.style.border = 'solid';
colorBlue.style.width = '85%';
colorBlue.style.borderWidth = '1px';

function CoresAutomaticas() {
  const letras = '0123456789ABCDEF';
  let cores = '#';
  for (let index = 0; index < 6; index += 1) {
    cores += letras.charAt(Math.floor(Math.random() * letras.length));
  }
  console.log(cores);
  return cores;
}
const coresDaPagina = document.querySelectorAll('div.color');
let CoresAleatorias;
let corAleatoria1;
let corAleatoria3;
const button = document.getElementById('button-random-color');
const CoresRandom = () => {
  coresDaPagina[2].style.backgroundColor = CoresAutomaticas();
  coresDaPagina[3].style.backgroundColor = CoresAutomaticas();
  coresDaPagina[1].style.backgroundColor = CoresAutomaticas();
  if (CoresRandom) {
    coresDaPagina[2].style.backgroundColor = CoresAutomaticas();
    CoresAleatorias = coresDaPagina[2].style.backgroundColor;
    coresDaPagina[1].style.backgroundColor = CoresAutomaticas();
    corAleatoria1 = coresDaPagina[1].style.backgroundColor;
    coresDaPagina[3].style.backgroundColor = CoresAutomaticas();
    corAleatoria3 = coresDaPagina[3].style.backgroundColor;
  }
};

button.addEventListener('click', CoresRandom);

document.querySelector('#button-random-color').addEventListener('click', () => {
  const ColorSource = CoresAleatorias;
  const ColorSource2 = corAleatoria1;
  const ColorSource3 = corAleatoria3;
  localStorage.setItem('colorPalette', JSON.stringify(ColorSource));
  localStorage.setItem('colorPalette2', JSON.stringify(ColorSource2));
  localStorage.setItem('colorPalette3', JSON.stringify(ColorSource3));
});

const manterACor = localStorage.getItem('colorPalette');
const manterACor2 = localStorage.getItem('colorPalette2');
const manterACor3 = localStorage.getItem('colorPalette3');
const CorComJson = JSON.parse(manterACor);
const CorComJson2 = JSON.parse(manterACor2);
const CorComJson3 = JSON.parse(manterACor3);

coresDaPagina[2].style.backgroundColor = CorComJson || 'blue';
coresDaPagina[1].style.backgroundColor = CorComJson2 || 'red';
coresDaPagina[3].style.backgroundColor = CorComJson3 || 'green';
console.log(CorComJson);

// fazendo requisito 6 e 7

const pixel = document.getElementsByClassName('pixel');
for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].style.backgroundColor = 'white';
  // pixel[i].style.width = '5px';
  // pixel[i].style.height = '5x';
}

const button2 = document.getElementById('clear-board');

// requisito 9
let ColorToDraw = 'black';

const ColorSelected = (e) => {
  ColorToDraw = e.target.style.backgroundColor;
  for (let i = 0; i < coresDaPagina.length; i += 1) {
    coresDaPagina[i].classList.remove('selected');
  }
  e.target.classList.add('selected');
};

for (let i = 0; i < coresDaPagina.length; i += 1) {
  coresDaPagina[i].addEventListener('click', ColorSelected);
}

const Colorir = (pixels) => {
  const pixelElement = pixels;
  return pixelElement.addEventListener('click', () => {
    pixelElement.style.backgroundColor = ColorToDraw;
  });
};

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i] += Colorir(pixel[i]);
}

button2.addEventListener('click', () => {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});
