//global selections
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector("generate");
const sliders = document.querySelectorAll("input[type='range'] ");
const currentHexes = document.querySelectorAll(".color h2");
let initialColors;

// function - color generator
function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}
let randomHex = generateHex();
console.log(randomHex);

//
function randomColors() {
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    //add color to background pls
    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
  });
}

randomColors();
