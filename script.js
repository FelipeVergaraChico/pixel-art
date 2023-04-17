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
   CoresAleatorias = coresDaPagina[2].style.backgroundColor = CoresAutomaticas();
   corAleatoria1 = coresDaPagina[1].style.backgroundColor = CoresAutomaticas();
   corAleatoria3 = coresDaPagina[3].style.backgroundColor = CoresAutomaticas();
  }

};


button.addEventListener('click', CoresRandom);

document.querySelector('#button-random-color').addEventListener('click', function () {
  const ColorSource = CoresAleatorias;
  const ColorSource2 = corAleatoria1;
  const ColorSource3 = corAleatoria3;
  localStorage.setItem('colorPalette', JSON.stringify(ColorSource));
  localStorage.setItem('colorPalette2',JSON.stringify(ColorSource2));
  localStorage.setItem('colorPalette3',JSON.stringify(ColorSource3));
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

  //fazendo requisito 6 e 7

  const pixel = document.getElementsByClassName('pixel');
  for(let i = 0; i < pixel.length; i += 1) {
    // eslint-disable-next-line no-multi-assign
    pixel[i] += pixel[i].style.backgroundColor = 'white';
    // pixel[i] += pixel[i].style.width = '5px';
    // pixel[i] += pixel[i].style.height = '5x';
  }

const button2 = document.getElementById('clear-board');

  // requisito 9
let ColorToDraw = 'black';

const ColorSelected = (colorDraw) => {
ColorToDraw = colorDraw;
}

coresDaPagina[1].addEventListener('click', () => {
  coresDaPagina[1].classList.add('selected');
  coresDaPagina[0].classList.remove('selected');
  coresDaPagina[2].classList.remove('selected');
  coresDaPagina[3].classList.remove('selected');
});

coresDaPagina[2].addEventListener('click', () => {
  coresDaPagina[2].classList.add('selected');
  coresDaPagina[0].classList.remove('selected');
  coresDaPagina[1].classList.remove('selected');
  coresDaPagina[3].classList.remove('selected');
});

coresDaPagina[3].addEventListener('click', () => {
  coresDaPagina[3].classList.add('selected');
  coresDaPagina[0].classList.remove('selected');
  coresDaPagina[2].classList.remove('selected');
  coresDaPagina[1].classList.remove('selected');
});

const Colorir = (pixel) => {
pixel.addEventListener('click', () => {
    pixel.style.backgroundColor = ColorToDraw;
  });
};

for(let i = 0; i < pixel.length; i += 1) {
  pixel[i] += Colorir(pixel[i]);

  }

  button2.addEventListener('click', () => {
    for(let i = 0; i < pixel.length; i += 1) {
      pixel[i] += pixel[i].style.backgroundColor = ColorToDraw;
    }
  })
