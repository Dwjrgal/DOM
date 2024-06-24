// console.log(document.getElementById("text"));
// document.getElementById("text").style.color = "teal";
// document.getElementById("text").style.fontSize = "40px";
// document.getElementById("text").style.backgroundColor = "yellow";

// const myElement = document.createElement("h1");

// const els = document.getElementsByClassName("demo");
// console.log("EL", els[0].children);

// els.backgroundColor = "red";

// function change() {
//   console.log("Button clicked ");
// }

// const btnEl = document.getElementById("btn");
// console.log(btnEl);

// btnEl.addEventListener("click", change);

// btnEl.backgroundColor = "red";

// function color() {}

const boxEl = document.getElementsByClassName("box")[0];
const btnEl = document.getElementsByTagName("button")[0];

console.log(boxEl);
console.log(btnEl);

const colors = ["green", "yellow", "teal"];
let i = 0;

function changeBackgroundColor() {
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);

  //   boxEl.style.backgroundColor = colors[i];
  //   i++;
  //   if (i === colors.length) {
  //     i = 0;
  //   }
}

btnEl.addEventListener("click", changeBackgroundColor);
