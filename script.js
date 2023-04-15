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
// const Paletas = {
// cor2: coresDaPagina[2].style.backgroundColor = CoresAutomaticas(),
// cor3: coresDaPagina[3].style.backgroundColor = CoresAutomaticas(),
// cor4: coresDaPagina[1].style.backgroundColor = CoresAutomaticas(),
// }

const button = document.getElementById('button-random-color');
let CoresAleatorias;
const CoresRandom = () => { 
  coresDaPagina[2].style.backgroundColor = CoresAutomaticas();
  coresDaPagina[3].style.backgroundColor = CoresAutomaticas();
  coresDaPagina[1].style.backgroundColor = CoresAutomaticas();
  if(CoresRandom) {
    return CoresAleatorias = [coresDaPagina[2].style.backgroundColor = CoresAutomaticas(),
      coresDaPagina[3].style.backgroundColor = CoresAutomaticas(),
      coresDaPagina[1].style.backgroundColor = CoresAutomaticas(),
  ]
  }
  
};

button.addEventListener('click', CoresRandom);

let FavoriteColors = JSON.parse(localStorage.getItem('colorPalette')) || [];
let manterACor = JSON.parse(localStorage.getItem('colorPalette'));

document.querySelector('#button-random-color').onclick = function() {
  const ColorSource = CoresAleatorias;
  FavoriteColors.push(ColorSource);
  localStorage.setItem('colorPalette', JSON.stringify(FavoriteColors));
};
