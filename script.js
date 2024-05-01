// let resourcesElements = Array.from(
//   document.querySelectorAll("#Resources, #Versions")
// );

// resourcesElements.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     event.stopPropagation(); // Prevent the document click event from firing
//     let resourceMenu = element.querySelector(".resources-opened-menu");

//     let icons = element.querySelector(".icon");

//     icons.style.rotate = icons.style.rotate === "180deg" ? "0deg" : "180deg";

//     resourceMenu.style.display =
//       resourceMenu.style.display === "block" ? "none" : "block";
//     console.log(resourceMenu.style.display);
//   });
// });

// // Add this event listener
// document.addEventListener("click", () => {
//   resourcesElements.forEach((element) => {
//     let resourceMenu = element.querySelector(".resources-opened-menu");
//     if (resourceMenu.style.display === "block") {
//       resourceMenu.style.display = "none";
//       let icons = element.querySelector(".icon");
//       icons.style.rotate = "0deg";
//     }
//   });
// });

let hamMenu = document.querySelector(".ham-menu");

hamMenu.addEventListener("click", () => {
  let nav = document.querySelectorAll(".main-nav");
  nav.forEach((element) => {
    element.style.display = element.style.display === "flex" ? "none" : "flex";
  });
});

// Listen for changes in the viewport's width
let mediaQuery = window.matchMedia("(min-width: 1000px)");

mediaQuery.addListener((e) => {
  if (e.matches) {
    // If the viewport's width is greater than 1000px
    let nav = document.querySelectorAll(".main-nav");
    nav.forEach((element) => {
      element.style.display = "flex";
    });
  }
});
