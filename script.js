let res = document.getElementById("res");

let atualValue = Number(res.value);

function addOne() {
  // mais um
  let addOne = (atualValue += 1);
  res.value = addOne;
}

document.addEventListener("keydown", function (event) {
  // ouvinte do evento ao apertar uma tecla
  if (event.keyCode === 39) {
    //  verifica a tecla apertada (39 é o codigo da tecla direita)
    addOne();
  }
});

function rmOne() {
  // menos um
  let removeOne = (atualValue -= 1);
  res.value = removeOne;
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 37) {
    rmOne();
  }
});

function clearCounter() {
  res.value = 0;
}
