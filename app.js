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

// we generate random colors on divs and div text
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
        const sliders = div.querySelectorAll('.sliders input')
        console.log(sliders);

    });
}

// We check contrsat to show black/white color depending on luminance
function checkTextContrast(color, text) {
    const luminance = chroma(color).luminance();
    if (luminance > 0.5) {
        text.style.color = "black";
    } else {
        text.style.color = 'white'
    }
}

randomColors();