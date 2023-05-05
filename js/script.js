// Select the image element by its ID
let image = document.getElementById("imagem-primo");

console.log(image); // check the value of "image"

// Select the button element by its ID
let button = document.getElementById("rotate-button");

// Add a click event listener to the button
button.addEventListener("click", rotateImage);

// Define the rotateImage function
function rotateImage() {
    console.log("entrei aqui")
  // Get the current rotation angle from the style attribute
  let currentRotation = parseInt(image.style.transform.replace("rotate(", "").replace("deg)", ""));
  // Calculate the new rotation angle
  let newRotation = currentRotation + 90;
  // Apply the new rotation angle to the style attribute
  image.style.transform = "rotate(" + newRotation + "deg)";
  console.log("a imagem deveria ter rodado")
}

function changeColor() {
    console.log("entrei")
    let heading = document.getElementById("primo");
    heading.style.color = "red"; // Altera a cor do elemento para vermelho
    console.log("sai")
}

function changeStyle() {
    let elements = document.getElementsByClassName("my-div"); // Seleciona todos os elementos com a classe "my-div"
    for (let i = 0; i < elements.length; i++) { // Loop pelos elementos
      elements[i].style.backgroundColor = "blue"; // Altera a cor de fundo do elemento para azul
    }
  }

  function changeColor() {
    var coloredDiv = document.querySelector('.colored-div');
    if (coloredDiv.classList.contains('green')) {
      coloredDiv.classList.remove('green');
    } else {
      coloredDiv.classList.add('green');
    }
  }