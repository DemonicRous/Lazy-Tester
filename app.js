let CONFIG = require("./config.json");

window.onload = () => {
  console.log(CONFIG.dbHost)
}




// window.onload = function () {
//     resetHead();
//     resetBody();
// }

// console.log(document.head.getAttribute("id"))

// function resetHead() {
//     if (document.head.getAttribute("id") !== "VisualVibeTweakerHead") {
//         document.head.innerHTML = "";
//     }
// }

// function resetBody() {
//     if (document.body.getAttribute("id") !== "VisualVibeTweakerBody") {
//         document.body.innerHTML = "";
//     }
// }
