// Qs1
// Mouseout Event
let btn = document.querySelector("#btn");

btn.addEventListener("mouseout", function () {
    console.log("Mouse left the button");
});

// Keypress Event
let input = document.querySelector("#input");

input.addEventListener("keypress", function (event) {
    console.log("Key Pressed:", event.key);
});

// Scroll Event
window.addEventListener("scroll", function () {
    console.log("Page Scrolled");
});

// Load Event
window.addEventListener("load", function () {
    console.log("Page Loaded Successfully");
});


// // Qs2
// let btn = document.createElement("button");
// btn.innerText = "Color Change";
// document.querySelector("body").append(btn);

// btn.addEventListener("click", function () {
//   btn.style.color = "green";
//   console.log("color changed...");
// });

// // Qs3

// let inp = document.querySelector("input");
// let h2 = document.querySelector("h2");

// inp.addEventListener("change", function () {
//   let inpValue = inp.value.replace(/[^a-zA-Z ]/g, "");
//   inp.value = inpValue;
//   h2.innerText = inpValue;
// });
