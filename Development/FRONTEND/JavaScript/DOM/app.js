// DOM

// DOM Events
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   let randomColor = getRandomColor();
//   h3.innerText = randomColor;

//   let div = document.querySelector("div");
//   div.style.backgroundColor = randomColor;
//   // h3.style.color = randomColor;

//   console.log("Color updated...");
// });

// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red}, ${green}, ${blue})`;
//   return color;
// }

// JS Mini Project
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//   console.log("div was clicked...");
// });

// ul.addEventListener("click", function (event) {
//     event.stopPropagation();
//   console.log("ul was clicked...");
// });

// for (li of lis) {
//   li.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("li was clicked...");
//   });
// }

// Todo App
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let dltBtn = document.createElement("button");
  dltBtn.innerText = "delete";
  dltBtn.classList.add("delete");

  item.appendChild(dltBtn);
  ul.appendChild(item);
  // console.log(inp.value);
  inp.value = "";
});


// Event Delegation
ul.addEventListener("click", function (event) {
    // console.log(event.target);
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});

// Event Listener
// let del = document.querySelectorAll(".delete");
// for (dltBtn of del) {
//   dltBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }
