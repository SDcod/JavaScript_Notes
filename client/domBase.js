const headingText = document.querySelector("h1");
headingText.style.color = "red";
headingText.addEventListener("click", function () {
  headingText.style.color = "black";
  console.log("clicked h1");
});
