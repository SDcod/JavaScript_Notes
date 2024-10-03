const body = document.body;
const currentColor = document.querySelector(".current-color");

const btn = document.querySelector("button");

function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

btn.addEventListener("click", function () {
  const randomColor = randomColorGenerator();
  body.style.backgroundColor = randomColor;
  currentColor.innerText = randomColor;
});
