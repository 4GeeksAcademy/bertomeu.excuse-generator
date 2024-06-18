/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
function random(arreglo) {
  return arreglo[Math.floor(Math.random() * arreglo.length)];
}

window.onload = function() {
  //write your code here
  let randomWho = random(who);
  let randomAction = random(action);
  let randomWhat = random(what);
  let randomWhen = random(when);

  let excuse = randomWho + randomAction + randomWhat + randomWhen;
  document.getElementById("excuse").innerHTML = excuse;
};

const reload = document.getElementById("btnReload");

reload.addEventListener("click", _ => {
  location.reload();
});
