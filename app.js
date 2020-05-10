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

// we generate random colors on color containers and div text
function randomColors() {
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    //add color to background pls
    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
    //check for contrast
    checkTextContrast(randomColor, hexText);
    //sliders to work
    const color = chroma(randomColor);
    const sliders = div.querySelectorAll(".sliders input");
    const hue = sliders[0];
    const brightness = sliders[1];
    const saturation = sliders[2];

    colorizeSliders(color, hue, brightness, saturation);
  });
}

// We check contrsat to show black/white color depending on luminance
function checkTextContrast(color, text) {
  const luminance = chroma(color).luminance();
  if (luminance > 0.5) {
    text.style.color = "black";
  } else {
    text.style.color = "white";
  }
}

function colorizeSliders(color, hue, brightness, saturation) {
  //scale saturation
  const noSat = color.set("hsl.s", 0);
  const fullSat = color.set("hsl.s", 1);
  const scaleSat = chroma.scale([noSat, color, fullSat]);
  //scale brightness
  const midBright = color.set("hsl.l", 0.5);
  const scaleBright = chroma.scale(["black", midBright, "white"]);

  // upd input colors now
  // prettier-ignore
  saturation.style.backgroundImage = `linear-gradient(to right,${scaleSat(0)}, ${scaleSat(1)})`;
  // prettier-ignore
  brightness.style.backgroundImage = `linear-gradient(to right,${scaleBright(0)},${scaleBright(0.5)},${scaleBright(1)})`;
  // prettier-ignore
  hue.style.backgroundImage = `linear-gradient(to right, rgb(204,75,75),rgb(204,204,75),rgb(75,204,75),rgb(75,204,204),rgb(75,75,204),rgb(204,75,204),rgb(204,75,75))`
}

randomColors();
