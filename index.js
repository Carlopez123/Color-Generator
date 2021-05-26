for (let i = 1; i <= 108; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  document.querySelector(".container").appendChild(box);

  const modeLarge = document.getElementById("th-large");
  modeLarge.addEventListener("click", () => {
    box.classList.add("large");
    box.classList.remove("small")
   
  });
  const modeSmall = document.getElementById("th-small");
  modeSmall.addEventListener("click", () => {
    box.classList.add("small");
    box.classList.remove("large")
    
  });
}

const btn = document.querySelector(".btn");
const randomColorBlock = document.querySelectorAll(".box");
function RandomHexColorCode() {
  var chars = "0123456789abcdef";
  var colorLength = 6;
  var color = "";

  for (var i = 0; i < colorLength; i++) {
    var randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return "#" + color;
}

function addColor() {
  randomColorBlock.forEach((e) => {
    var newColor = RandomHexColorCode();
    e.style.backgroundColor = newColor;
    e.innerHTML = newColor;
  });
}

const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

