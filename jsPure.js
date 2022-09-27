// Pure js codes

let game_block = document.querySelectorAll(".game-block");

let overlay = document.querySelector(".overlay");
let overlay_btn = document.querySelector(".overlay button");
let overlay_input = document.querySelector(".overlay input");
let Username = document.querySelector(".name");

function UnActive() {
  let time = setTimeout(onload, 2000);
}

overlay_btn.addEventListener("click", () => {
  if (overlay_input !== "") {
    overlay.style.display = "none";
    Username.textContent = overlay_input.value;
    UnActive();
  }
});

// let game_block = document.querySelectorAll(".game-block");
let arrayFrom_game_block = Array.of(game_block);
let trueTry = 0;
let falseTry = 0;

//adding active class
function addActive() {
  game_block.forEach((e) => {
    e.classList.add("activeCart");
  });
}
addActive();
//adding active class for one ele
function activeEle(e, E) {
  let Block = blockArray.filter((el) => {
    return el.classList.contains("activeCart");
  });
  if (Block.length < 2) {
    e.classList.add("activeCart");
    e.id = E;
    UnActive();
  }
  filterfunc(E);
}
// removing active class
function onload() {
  game_block.forEach((e) => {
    e.classList.remove("activeCart");
  });
}

let blockArray = Array.from(document.querySelectorAll(".game-block"));

// controling

function filterfunc(check) {
  let Block = blockArray.filter((el) => {
    return el.classList.contains("activeCart");
  });
  console.log(Block);

  let Block2 = Block.filter((el) => {
    return el.id === check;
  });
  console.log(Block2);
  let v = [];
  Block2.forEach((el) => {
    v.push(el);
  });
  if (v.length == 2) {
    v.forEach((o) => {
      o.classList.add("sabitCart");
      document.getElementById("success").play();
    });
    trueTry++;
    document.querySelector(".true").textContent = trueTry;
  }
  if (Block.length !== Block2.length) {
    falseTry++;
    document.querySelector(".wrong").textContent = falseTry;
  }
}

game_block.forEach((e) => {
  e.addEventListener("click", (el) => {
    activeEle(e, e.dataset.technology);
  });
});
