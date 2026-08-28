// Qs1
let newInput = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me";

document.querySelector("body").append(newInput);
document.querySelector("body").append(btn);

// Qs2
newInput.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

// Qs3
btn = document.querySelector("#btn");
btn.classList.add("btn");

// Qs4
let heading = document.createElement("h1");
heading.innerText = "<u>DOM Practice</u>";
document.querySelector("body").append(heading);

// Qs5
let para = document.createElement("p");
para.innerHTML = "Arjun Yadav <b>DOM</b> Practice";
document.querySelector("body").append(para);